import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchContainer from "./components/WatchContainer";
import MainContainer from "./components/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchContainer />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <Head />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
