import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import { login } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function LoginScreen () {

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        username: '',
        password: '',
        viewPass: false
    })

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        try {

            if (!formData.username || !formData.password) return toast.warning('Alerta', { description: 'Ingresa correctamente los campos antes de continuar.' })

                const data = await login(formData.username, formData.password);

                if (!data.ok) return toast.warning('Alerta', { description: data.message });

                    navigate('/wp/admin')
            
        } catch (error) {
            console.error(error);
            toast.error('Error', { description: error.message })
        }
    }

    return (

        <div className="w-screen h-screen center">
            <form className="w bg-white p-md rounded-md lg:w" style={{"--w": "90%", "--w-lg": "40%"}} onSubmit={handleSubmit}>
                <h1 className="text-center mb" style={{"--mb": "1rem"}}>Inicia sesión</h1>
                <div className="w-full mb" style={{"--mb": "1rem"}}>
                    <label className="text-gray text-sm block mb" style={{"--mb": ".5rem"}}>Ingresa tu nombre de usuario</label>
                    <div className="relative w-full">
                        <input className="w-full h rounded-md px-sm bg-default" style={{"--h": "50px"}} name="username" id="usd" type="text" value={formData.username} placeholder="Ingresa tu nombre de usuario" onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                    </div>
                </div>
                <div className="w-full mb" style={{"--mb": "1rem"}}>
                    <label className="text-gray text-sm block mb" style={{"--mb": ".5rem"}}>Ingresa tu contraseña</label>
                    <div className="relative w-full">
                        <span className="absolute w h center right" style={{"--w": "50px", "--h": "50px", "--right": "0"}} onClick={() => setFormData(prev => ({ ...prev, viewPass: !formData.viewPass }))}>{formData.viewPass ? <IconEyeClosed/> : <IconEye/>}</span>
                        <input className="w-full h rounded-md pl pr bg-default" style={{"--h": "50px", "--pl": "1rem", "--pr": "50px"}} name="password" id="pwd" type={formData.viewPass ? 'text': 'password'} value={formData.password} placeholder="Ingresa tu contraseña" onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />
                    </div>
                </div>
                <div className="w-full">
                    <button className="w-full h bg-secondary text-primary text-semibold rounded-md" style={{"--h": "50px"}}>Iniciar Sesión</button>
                </div>
            </form>
        </div>

    )

}