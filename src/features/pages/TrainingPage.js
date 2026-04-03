import { Link } from "react-router-dom";

export default function TrainingPage () {

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}>Capacitaciones empresariales para hacer <span className="text-yellow">crecer</span> tu negocio</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Desarrolla habilidades clave en gestión, finanzas, marketing y emprendimiento a través de programas prácticos diseñados para empresarios y emprendedores de nuestra provincia.</p>
                    <div className="flex gap-sm">
                        <Link to={'/join'} className="block bg-secondary py-md px-lg rounded-pill text-semibold" aria-label="Afiliarse a la Cámara de Comercio de Jauja">Quiero afiliarme</Link>
                        <Link to={'#'} className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold" aria-label="Ver calendario de capacitaciones de la Cámara de Comercio de Jauja">Ver calendario</Link>
                    </div>
                </div>
            </section>
        
            <section className="w-full h" style={{"--h": "100dvh"}}></section>

        </>

    )

}