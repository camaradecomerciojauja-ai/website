import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function AdminLayout () {
    return (
        <>
            <Outlet/>
            <Toaster position="top-center" duration={5000} richColors closeButton />
        </>
    )
}