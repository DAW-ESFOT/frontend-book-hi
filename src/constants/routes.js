const publicRoutes = {
  LOGIN: "/login",
  REGISTER: "/registro",
};

const privateRoutes = {
  HOME: "/",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
