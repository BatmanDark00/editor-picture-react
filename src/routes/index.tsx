import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";

import App from '@/App';
import HomeView from '@/views/HomeView.tsx';
import PictureView from '@/views/PictureView.tsx';

const routes: RouteObject[] = [
    {
      path: "/",
      Component: HomeView,
    },
    {
      path: "/editor-picture",
      Component: PictureView,
    },
  
  
  ];
  
  const router = createBrowserRouter(routes);

  export default router;