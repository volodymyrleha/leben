import { useState } from 'react';

export default function useTabHook() {
    const [tab, setTab] = useState(0);

    const handleTab = newTab => {
        setTab(newTab);
    }

    return {
        tab: tab,
        handleTab: handleTab
    };
}

