'use strict'

const express = require('express')
const router = express.Router()

const auth = require('../../middlewares/authorization')
const Task = require('../../models/task.model')
const TaskAnswer = require('../../models/taskAnswer.model')
const User = require('../../models/user.model')
const etalonComparer = require('../../services/etalon-comparer')

/* ADMIN ENDPOINTS */

router.post('/', auth(['admin']), async (req, res) => {
    const { etalon, maxMark, description } = req.body;
    const task = new Task({
        etalon, maxMark, description
    });
    await task.save();
    res.status(201).json({ message: 'Created', task })
});

router.get('/', auth(['admin']), async (req, res) => {
    const tasks = await Task.find({});

    res.status(200).json({ tasks, message: 'Created tasks fetched' });
});

router.put('/:taskid', auth(['admin']), async (req, res) => {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    const { etalon, description, maxMark} = req.body;

    if (etalon) {
        task.etalon = etalon;
    }

    if (description) {
        task.description = description;
    }

    if (maxMark) {
        task.maxMark = maxMark;
    }

    await task.save();

    res.status(200).json({ task, message: 'Updated' });
})

router.get('/allcompleted', auth(['admin']), async (req, res) => {
    const tasks = await TaskAnswer.find({});

    res.status(200).json({ tasks, message: 'All completed tasks fetched' });
});

/* USER ENDPOINTS */

router.get('/notcompleted/', auth(['user']), async (req, res) => {
    const userId = req.user._id;
    const tasks = await Task.find({});
    const user = await User.findById(userId);
    tasks.filter((task) => !user.tasksFinished.includes(task));

    res.status(200).json({ tasks, message: 'Not completed tasks fetched' });
})

router.get('/completed/', auth(['user']), async (req, res) => {
    const userId = req.user._id;
    const tasks = await TaskAnswer.find({ userId });

    res.status(200).json({ tasks, message: 'Completed tasks fetched' });
})

router.post('/pass', auth(['user']), async (req, res) => {
    const { solution, taskId} = req.body;
    const userId = req.user._id;

    if (req.user.tasksFinished.includes(taskId)) {
        return res.status(422).json({ message: 'You have already passed this test' })
    
    }
    const task = await Task.findById(taskId);

    const percentage = etalonComparer(task.etalon, solution);
    const mark = Math.round(task.maxMark * percentage);
    const taskAnswer = new TaskAnswer({
        solution, mark, taskId, userId, percentage
    });

    const user = await User.findById(userId);
    user.tasksFinished.push(taskId);

    await taskAnswer.save();
    await user.save();
    res.status(201).json({ message: 'Solution is saved', taskAnswer })
});

router.get('/studentstat', auth(['user']), async (req, res) => {
    const userId = req.user._id;
    const tasksByUser = await TaskAnswer.find({userId});
    const tasksAll = await Task.find({});
    const averagePercentage = tasksByUser.reduce((accum, task) => task.percentage + accum, 0)/tasksByUser.length;
    const completedPercentage = req.user.tasksFinished.length/tasksAll.length * 100;

    res.status(200).json({ averagePercentage, completedPercentage , message: 'Student stat fetched' });
})

module.exports = router
