import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { SobreMi } from "./pages/SobreMi";
import { Tienda } from "./pages/Tienda";
import { NotFound } from "./pages/NotFound";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorBoundary />,
    children: [
      { 
        index: true, 
        Component: Home
      },
      { 
        path: "sobre-mi", 
        Component: SobreMi
      },
      { 
        path: "shop", 
        Component: Shop
      },
      { 
        path: "tienda", 
        Component: Tienda
      }
    ],
  },
  {
    path: "*",
    Component: Root,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: NotFound
      }
    ]
  }
]);
