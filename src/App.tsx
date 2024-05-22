import Sidebar from "./components/layout/Sidebar";
import TabWrapper from "./components/tab/TabWrapper";
import TabContentWrapper from "./components/tab/TabContentWrapper";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <>
    <div className="d-flex">
      <Sidebar />
      <div className="d-flex flex-column w-100">
        <TabWrapper/>
        <TabContentWrapper/>
      </div>
    </div>
    </>
  );
}
