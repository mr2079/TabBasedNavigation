import { create } from "zustand";

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
        set((state: any) => ({ tabs: [...state.tabs], tab }))
    },
    removeTab: () => {
    }
}))

export default useTabStore;