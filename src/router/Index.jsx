import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ShowPortafolio from "../components/ShowPortafolio.jsx";
import CreatePortafolio from "../components/CreatePortafolio.jsx";
import EditPortafolio from "../components/EditPortafolio.jsx";
import DeletePortafolio from "../components/DeletePortafolio.jsx";
import Projects from "../pages/Projects.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    
    {        
        path: "/portafolio",
        element: <ShowPortafolio/>
    },
    
    {
        path: "/create",
        element: <CreatePortafolio/>
    },
    
    {
        path: "/edit/:id",
        element: <EditPortafolio/>
    },
    
    {
        path: "/delete/:id",
        element: <DeletePortafolio/>
    },
    
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/creados",
        element: <ShowPortafolio/>
    }
]);