import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
