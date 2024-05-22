import { ReactNode, useState } from "react";
import TabContext from "./TabContext";

export default function TabContextProvider({children} : {children: ReactNode}) {
    const [tabs, setTabs] = useState([]);

    const activateTab = (tabId: string) => {
    }
    const deactivateTabs = () => {
    }
    const addTab = (tab: any) => {
    }
    const removeTab = (tabId: string) => {
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