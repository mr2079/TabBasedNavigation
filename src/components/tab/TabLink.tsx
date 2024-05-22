import { FunctionComponent, ReactNode } from "react";
import useTabStore from "../../stores/TabStore";
//@ts-ignore
import { v4 as uuidv4 } from "uuid";

interface ITabLinkProps {
  className: string;
  label: string;
  component: FunctionComponent;
}

export default function TabLink(props: ITabLinkProps): ReactNode {
  const [addTab, deactivateTabs] = useTabStore((state: any) => [
    state.addTab,
    state.deactivateTabs,
  ]);

  const handleClick = () => {
    deactivateTabs();
    addTab({
      id: uuidv4(),
      label: props.label,
      component: props.component,
      active: true,
    });
  };

  return (
    <a className={props.className} onClick={handleClick}>
      {props.label}
    </a>
  );
}
