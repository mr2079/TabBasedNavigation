import useTabStore from "../../stores/TabStore";

interface ITabProps {
  id: string;
  label: string;
  active: boolean;
}

export default function Tab(props: ITabProps) {
  const [activateTab, deactivateTabs, removeTab] = useTabStore((state: any) => [
    state.activateTab,
    state.deactivateTabs,
    state.removeTab,
  ]);

  const handleClick = (id: string) => {
    deactivateTabs();
    activateTab(id);
  };

  const handleClose = (id: string) => {
    removeTab(id);
  };

  return (
    <li
      className={`nav-item d-flex justify-content-between align-items-center cursor-pointer ${
        props.active ? "active-tab" : ""
      }`}
    >
      <a
        className="text-decoration-none text-black p-2"
        onClick={() => handleClick(props.id)}
      >
        {props.label}
      </a>
      <button
        className="btn-close"
        style={{
          fontSize: "10px",
          margin: "0 10px",
        }}
        onClick={() => handleClose(props.id)}
      />
    </li>
  );
}
