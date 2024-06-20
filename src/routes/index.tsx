import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";

import CanvaView from "@/views/CanvaView";
import HomeView from '@/views/HomeView.tsx';
import PictureView from '@/views/PictureView.tsx';
import TextureView from "@/views/TextureView";

const routes: RouteObject[] = [
    {
      path: "/picshur/",
      Component: HomeView,
    },
    {
      path: "/picshur/editor",
      Component: PictureView,
    },    

    {
      path: "/picshur/image-texture",
      Component: TextureView,
    },    

    {
      path: "/picshur/canva",
      Component: CanvaView,
    },    
  
  
  ];
  
  const router = createBrowserRouter(routes);

  export default router;