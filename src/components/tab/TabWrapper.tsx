import useTabStore from "../../stores/TabStore";
import Tab from "./Tab";

export default function TabWrapper() {
  //@ts-ignore
  const tabs = useTabStore((state) => state.tabs);

  return (
    <ul className="nav nav-tabs p-3 pb-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" aria-disabled="true">
          Disabled
        </a>
      </li>
      {tabs?.map((tab: any, index: number) => {
        <Tab key={index} id={tab.id} label={tab.label} active={tab.active} />;
      })}
    </ul>
  );
}
