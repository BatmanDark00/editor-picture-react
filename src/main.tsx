import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./redux/index.tsx";

import App from "./App.tsx";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome, faEnvelope);

import "@/i18n.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="loading">
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
