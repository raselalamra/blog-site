import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blogs from "./components/Blog/Blogs";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Home from "./components/Home/Home";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/blogs",
          loader: async () => {
            return fetch("fake-data.json");
          },
          element: <Blogs></Blogs>,
        },
        {
          path: "/blog/:blogId",
          loader: async ({ params }) => {
            return fetch(`/fake-data.json/${params.blogId}`);
          },
          element: <BlogDetails></BlogDetails>,
        },

        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
