import { IconHome, IconLogout2, IconSettings, IconStars, IconUser, IconUsers } from "@tabler/icons-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function DashboardLayout () {

    const location = useLocation();
    const { user } = useAuth();

    console.log(user);

    return (
        <div className="w-screen h-screen flex hidden">
            <nav className="w h-screen bg-white px-md" style={{"--w": "350px"}}>
                <div className="w-full h flex align-center justify-center" style={{"--h":"100px"}}>
                    <div className="w-full border rounded-md h flex flex-col justify-center px-md" style={{"--h": "60px"}}>
                        <h3 className="text-gray text-xs text-regular">Bienvenido,</h3>
                        <h2>{user?.nombre}</h2>
                    </div>
                </div>
                <ul className="w-full flex gap-md flex-col h" style={{"--h": "calc(100dvh - 200px)"}}>
                    <Link to={'/wp/admin'} className={`flex w-full h align-center gap-sm bg-hover px-md rounded-sm ${location.pathname === '/wp/admin' ? 'active text-bold' : ''}`} style={{"--h": "50px"}}><IconHome/> Inicio</Link>
                    <Link to={'/wp/admin/partners'} className={`flex w-full h align-center gap-sm bg-hover px-md rounded-sm ${location.pathname === '/wp/admin/partners' ? 'active text-bold' : ''}`} style={{"--h": "50px"}}><IconUsers/> Socios</Link>
                    <Link to={'/wp/admin/interested'} className={`flex w-full h align-center gap-sm bg-hover px-md rounded-sm ${location.pathname === '/wp/admin/interested' ? 'active text-bold' : ''}`} style={{"--h": "50px"}}><IconStars/> Interesados</Link>
                    <Link to={'/wp/admin/users'} className={`flex w-full h align-center gap-sm bg-hover px-md rounded-sm ${location.pathname === '/wp/admin/users' ? 'active text-bold' : ''}`} style={{"--h": "50px"}}><IconUser/> Usuarios</Link>
                    <Link to={'/wp/admin/settings'} className={`flex w-full h align-center gap-sm bg-hover px-md rounded-sm ${location.pathname === '/wp/admin/settings' ? 'active text-bold' : ''}`} style={{"--h": "50px"}}><IconSettings/> Configuración</Link>
                </ul>
                <div className="w-full h flex align-center justify-center" style={{"--h":"100px"}}>
                    <button className="w-full h flex align-center justify-center gap-xs text-danger bg-danger-trans rounded-md" style={{"--h": "60px"}}><IconLogout2/> Cerrar Sesión</button>
                </div>
            </nav>
            <main className="w h-screen p-md scroll" style={{"--w": "calc(100dvw - 350px)"}}>
                <Outlet/>
            </main>
        </div>
    )
}