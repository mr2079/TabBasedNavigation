import { useShallow } from "zustand/react/shallow";
import useTabStore from "../../stores/TabStore";
import TabContent from "./TabContent";

export default function TabContentWrapper() {
  const tabs = useTabStore(useShallow((state: any) => state.tabs));

  return (
    <div className="container-fluid p-5">
        {tabs?.map((tab: any, index: number) => {
            if (!tab.deleted) {
                return (
                    <TabContent key={index}
                        component={tab.component}
                        active={tab.active} />
                )
            }
        })}
    </div>
  );
}
