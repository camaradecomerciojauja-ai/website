import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const isAuth = localStorage.getItem("adminAuth");
    return isAuth ? <Outlet /> : <Navigate to="/wp/login" replace />;
}