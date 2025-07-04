import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import AppRouter from "./router/AppRouter.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
