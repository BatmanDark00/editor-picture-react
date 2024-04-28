import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";


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
  
  ];
  
  const router = createBrowserRouter(routes);

  export default router;