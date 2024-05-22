import { create } from "zustand";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

import Page1 from "../components/pages/Page1";
import Page2 from "../components/pages/Page2";
import Page3 from "../components/pages/Page3";

const TABS = [
    {
        id: uuidv4(),
        label: "page 1",
        component: Page1,
        active: true        
    },
    {
        id: uuidv4(),
        label: "page 2",
        component: Page2,
        active: false        
    },
    {
        id: uuidv4(),
        label: "page 3",
        component: Page3,
        active: false        
    },
]

const useTabStore = create((set) => ({
    tabs: [],
    activateTab: (tabId: string) => {
        set((state: any) => ({ 
            tabs: state.tabs.map((tab: any) => {
                if (tab.id === tabId) {
                    return { ...tab, active: true }
                }
            })
        }))
    },
    deactivateTabs: () => {
        set((state: any) => ({ 
            tabs: state.tabs.map((tab: any) => {
                return { ...tab, active: false }
            })
        }))
    },
    addTab: (tab: any) => {
        set((state: any) => ({ tabs: [...state.tabs, tab] }))
    },
    removeTab: () => {
    }
}))

export default useTabStore;