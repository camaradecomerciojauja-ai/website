import { Link } from "react-router-dom";

export default function NewslatterPage () {

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}><span className="text-yellow">Noticias</span> y actualidad empresarial</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Mantente informado sobre nuestras actividades institucionales, convenios estratégicos, capacitaciones, ferias y oportunidades que impulsan el crecimiento del sector privado.</p>
                    <div className="flex gap-sm">
                        <Link to={'/#'} className="block bg-secondary py-md px-lg rounded-pill text-semibold" aria-label="Suscribirme al boletín de la Cámara de Comercio de Jauja">Suscribirme al boletín</Link>
                        <Link to={'#all'} className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold" aria-label="Ver noticias de la Cámara de Comercio de Jauja">Ver noticias</Link>
                    </div>
                </div>
            </section>
                
            <section className="w-full h" id="all" style={{"--h": "100dvh"}}></section>

        </>

    )

}