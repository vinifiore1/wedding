import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";

const AppRouter = [
  {
    path: "/",
    main: <Home />,
  },
];

export const Router = () => {
  return (
    <Routes>
      {AppRouter.map((route, index) => {
        return (
          <>
            <Route key={index} path={route.path} element={route.main} />
          </>
        );
      })}
    </Routes>
  );
};
