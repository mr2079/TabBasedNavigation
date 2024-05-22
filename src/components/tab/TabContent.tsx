import { FunctionComponent } from "react";

interface ITabContentProps {
  component: FunctionComponent;
  active: boolean;
}

export default function TabContent(props: ITabContentProps) {
  return (
    <div className={!props.active ? "d-none": ""}>
        <props.component />
    </div>
  );
}
