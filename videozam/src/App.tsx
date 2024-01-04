import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchContainer from "./components/WatchContainer";
import MainContainer from "./components/MainContainer";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import ResultsContainer from "./components/ResultsContainer";
import { MouseEvent } from "react";
import { setShowSuggestions } from "./store/feature/search/searchSlice";

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
  const dispatch = useAppDispatch();
  const handleCloseSuggestions = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.id !== "search") dispatch(setShowSuggestions(false));
  };
  return (
    <div
      id="app"
      className={dark ? "dark" : "light"}
      onClick={handleCloseSuggestions}
    >
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
