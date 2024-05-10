import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";


import GridView from '@/views/GridView.tsx';
import HomeView from '@/views/HomeView.tsx';
import PictureView from '@/views/PictureView.tsx';



const routes: RouteObject[] = [
    {
      path: "/editor-picture/home",
      Component: HomeView,
    },
    {
      path: "/editor-picture",
      Component: PictureView,
    }, 
    {
      path: "/editor-picture/grid-view",
      Component: GridView,
    }, 
  
  ];
  
  const router = createBrowserRouter(routes);

  export default router;