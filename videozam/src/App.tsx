import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchContainer from "./components/WatchContainer";
import MainContainer from "./components/MainContainer";
import { useAppSelector } from "./store/hooks/hooks";
import ResultsContainer from "./components/ResultsContainer";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch",
//         element: <WatchContainer />,
//       },
//       {
//         path: "results",
//         element: <ResultsContainer />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Head />,
    children: [
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
          {
            path: "results",
            element: <ResultsContainer />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  const dark = useAppSelector((store) => store.app.dark);
  return (
    <div className={dark ? "dark" : "light"}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
