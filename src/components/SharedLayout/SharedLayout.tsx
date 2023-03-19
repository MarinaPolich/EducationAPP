import { Suspense } from "react";
import { Outlet } from "react-router";

export const SharedLayout = () => {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};
