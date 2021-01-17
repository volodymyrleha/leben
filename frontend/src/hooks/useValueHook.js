import { useState } from 'react';

export default function useValueHook() {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    }

    return {
        value: value,
        handleChange: handleChange
    };
}

