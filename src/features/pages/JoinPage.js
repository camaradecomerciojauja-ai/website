import { Link } from "react-router-dom";

export default function JoinPage () {

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}><span className="text-yellow">Afíliate</span> y haz crecer tu empresa</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Forma parte de una comunidad empresarial organizada que te brinda representación institucional, capacitación continua y acceso a oportunidades comerciales reales.</p>
                    <div className="flex gap-sm">
                        <Link to={'/join'} className="block bg-secondary py-md px-lg rounded-pill text-semibold" aria-label="Afiliarse a la Cámara de Comercio de Jauja">Iniciar afiliación</Link>
                        <Link to={'/benefits'} className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold" aria-label="Ver entrevistas de la Cámara de Comercio de Jauja">Ver beneficios</Link>
                    </div>
                </div>
            </section>
                
            <section className="w-full h" style={{"--h": "100dvh"}}></section>
        
        </>

    )

}