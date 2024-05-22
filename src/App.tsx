import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/layout/Sidebar";
import TabWrapper from "./components/tab/TabWrapper";
import TabContentWrapper from "./components/tab/TabContentWrapper";

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
