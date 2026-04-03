import { Link } from "react-router-dom";

export default function AboutPage () {

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}>Somos la voz del <span className="text-yellow">empresariado</span> de Jauja</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Representamos, fortalecemos e impulsamos a emprendedores y empresas de la provincia mediante capacitación, articulación estratégica y promoción comercial, construyendo un ecosistema empresarial moderno, competitivo y sostenible.</p>
                    <div className="flex gap-sm">
                        <Link to={'/join'} className="block bg-secondary py-md px-lg rounded-pill text-semibold" aria-label="Afiliarse a la Cámara de Comercio de Jauja">Quiero afiliarme</Link>
                        <Link to={'https://drive.google.com/file/d/1RZ_XMcblIRlhZEvt-e5V1VWj8Io0q5Va/view?usp=sharing'} target="_blank" className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold" rel="noopener noreferrer" aria-label="Ver estatutos institucionales">Nuestros Estatutos</Link>
                    </div>
                </div>
            </section>

            <section className="w-full h" style={{"--h": "100dvh"}}></section>
        
        </>

    )
    
}