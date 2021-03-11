const publicRoutes = {
    LOGIN: "/login",
    REGISTER: "/register",
};

const privateRoutes = {
    HOME: "/",
    PROFILE: "/profile"
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes,
};
export default Routes;