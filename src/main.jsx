import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Information/store.jsx";
import { QueryClient ,QueryClientProvider  } from "@tanstack/react-query";

const queryClient = new QueryClient({})
   
ReactDOM.createRoot(document.getElementById("root")).render(
  
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
