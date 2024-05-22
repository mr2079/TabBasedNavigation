import { FunctionComponent, ReactNode } from "react";

interface ITabContentProps {
    component: FunctionComponent
}

export default function TabContent(props: ITabContentProps) {
  return <>{<props.component/>}</>;
}
