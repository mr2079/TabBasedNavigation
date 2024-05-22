import useTabStore from "../../stores/TabStore";
import Tab from "./Tab";

export default function TabWrapper() {
  //@ts-ignore
  const tabs = useTabStore((state) => state.tabs);

  return (
    <ul className="nav nav-tabs p-3 pb-0">
      {tabs?.map((tab: any, index: number) => {
        if (!tab.deleted) {
          return (
            <Tab
              key={index}
              id={tab.id}
              label={tab.label}
              active={tab.active}
            />
          );
        }
      })}
    </ul>
  );
}
