import { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutesProps } from "@/shared/types/router";
import { PageLoader } from "@/widgets/PageLoader";
import { routeConfig } from "../config/routeConfig";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{route.element}</RequireAuth>
          ) : (
            route.element
          )
        }
      />
    );
  }, []);

  // const isAuth = useSelector(getUserAuthData);

  // const routes = useMemo(() => {
  //   return Object.values(routeConfig).filter((route) => {
  //     if (route.authOnly && !isAuth) {
  //       return false;
  //     }

  //     return true;
  //   });
  // }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
