'use strict'

const express = require('express')
const router = express.Router()

const auth = require('../../middlewares/authorization')
const Task = require('../../models/task.model')
const User = require('../../models/user.model')

/* ADMIN ENDPOINTS */

router.post('/task', auth(['admin']), (req, res) => {
    const { etalon, description } = req.body;
    const task = new Task({
        etalon, description
    });
    await task.save();
    res.status(201).json({ message: 'Created', task })
});

router.get('/tasks', auth(['admin']), (req, res) => {
    const tasks = await Task.find({});
    
    res.status(200).json({ tasks, message: 'Created tasks fetched' });
});

router.put('/task/:id', auth(['admin']), (req, res) => {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    const {etalon, description} = req.body;

    if (etalon) {
        task.etalon = etalon;
    }

    if (description) {
        task.description = description;
    }

    await task.save();

    res.status(200).json({ task, message: 'Updated' });
})

router.get('/taskscompleted', auth(['admin']), (req, res) => {
    const tasks = await TaskAnswer.find({});
    
    res.status(200).json({ tasks, message: 'All completed tasks fetched' });
});

/* USER ENDPOINTS */

router.get('/notcompleted/:userId', auth(['user']), (req, res) => {
    const userId = req.params.userId;
    const tasks = await Task.find({});
    const user = await User.findById(userId);
    tasks.filter((task) => !user.tasksFinished.contains(task));

    res.status(200).json({ tasks, message: 'Not completed tasks fetched' });
})

router.get('/completed/:userId', auth(['user']), (req, res) => {
    const userId = req.params.userId;
    const tasks = await TaskAnswer.find({userId});

    res.status(200).json({ tasks, message: 'Completed tasks fetched' });
})



module.exports = router
