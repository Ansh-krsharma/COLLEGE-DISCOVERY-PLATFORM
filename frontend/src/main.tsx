import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.css";
import {QueryClient,QueryClientProvider,} from "@tanstack/react-query";
import ErrorBoundary from "./components/common/ErrorBoundary";

const queryClient = new QueryClient();
<Toaster position="top-right" />
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
<ErrorBoundary>
  <App />
</ErrorBoundary>