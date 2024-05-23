import { ReactNode, useState } from "react";
import TabContext from "./TabContext";

export default function TabContextProvider({children} : {children: ReactNode}) {
    const [tabs, setTabs] = useState<any>([]);

    const activateTab = (tabId: string) => {
        setTabs((prev: any) => [...prev.map((tab: any) => {
            if (tab.id === tabId) {
                return { ...tab, active: true }
            }
            return tab;
        })]);
    }
    
    const deactivateTabs = () => {
        setTabs((prev: any) => [...prev.map((tab: any) => {
            return { ...tab, active: false }
        })]);
    }

    const addTab = (tab: any) => {
        setTabs((prev:any) => [...prev, tab]);
    }

    const removeTab = (tabId: string) => {
        setTabs((prev: any) => [...prev.map((tab: any) => {
            if (tab.id === tabId) {
                return { ...tab, deleted: true }
            }
            return tab;
        })]);
    }

    return (
        <TabContext.Provider value={{
            tabs,
            activateTab,
            deactivateTabs,
            addTab,
            removeTab
        }}>
            {children}
        </TabContext.Provider>
    )
}