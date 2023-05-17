import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LoadingProvider } from "./context/Loading";
import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./context/Auth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <LoadingProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoadingProvider>
  </AuthProvider>
);
