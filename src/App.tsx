import { MainRoutes } from "./infra/routes"
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
