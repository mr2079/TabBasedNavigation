import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import TabContextProvider from "./context/TabContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <TabContextProvider>
        <App />
    </TabContextProvider>
);
