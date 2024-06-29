import { createBrowserRouter } from "react-router-dom";
import { RouteObject } from "react-router-dom";

import HomeView from '@/views/HomeView.tsx';
import PictureView from '@/views/PictureView.tsx';
import TextureView from "@/views/TextureView";
import Features from "@/modules/common/components/pages/features/Features";
import About from "@/modules/common/components/pages/about/About";
import Contact from "@/modules/common/components/pages/contact/Contact";

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
      path: "/picshur/features",
      Component: Features,
    },
    {
      path: "/picshur/about",
      Component: About,
    },
    {
      path: "/picshur/contact",
      Component: Contact,
    }
  
  ];
  
  const router = createBrowserRouter(routes);

  export default router;