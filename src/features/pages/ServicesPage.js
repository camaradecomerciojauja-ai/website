import { Link } from "react-router-dom";
export default function ServicesPage () {

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}>Servicios empresariales que <span className="text-yellow">impulsan</span> tu crecimiento</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Acompañamos a emprendedores y empresas con asesoría, representación institucional, capacitación y articulación comercial para fortalecer sus negocios y generar oportunidades reales de desarrollo.</p>
                    <div className="flex gap-sm">
                        <Link to={'/join'} className="block bg-secondary py-md px-lg rounded-pill text-semibold" aria-label="Afiliarse a la Cámara de Comercio de Jauja">Quiero afiliarme</Link>
                        <Link to={'#'} className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold" aria-label="Ver servicios de la Cámara de Comercio de Jauja">Ver servicios</Link>
                    </div>
                </div>
            </section>
        
            <section className="w-full h" style={{"--h": "100dvh"}}></section>
        
        </>

    )

}