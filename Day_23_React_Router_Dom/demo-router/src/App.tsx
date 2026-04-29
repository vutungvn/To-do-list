import { RouterProvider } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import router from "./routes/AppNewRoutes";

function App() {
  return (
    // <AppRoutes />
    <RouterProvider router={router} />
  );
}

export default App;
