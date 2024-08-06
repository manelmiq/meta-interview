import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import App from "./App";
import { DataProvider } from "./context/DataContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DataProvider>
      <App/>
    </DataProvider>
  </StrictMode>
);
