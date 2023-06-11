import { Suspense, memo, useCallback, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppRoutesProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <div className="page-wrapper">{route.element}</div>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
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
