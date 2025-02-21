import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/contact',
          element: <Contact />
        }

      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>

    </>
  )
}

export default App
