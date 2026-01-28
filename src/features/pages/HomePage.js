import { Link } from "react-router-dom";

export default function HomePage () {

    const services = [
        {
            title: 'Conexión Empresarial',
            text: 'Accede a una red activa de empresarios, aliados y oportunidades de negocio en toda la provincia.'
        },
        {
            title: 'Formalización y Representación',
            text: 'Te acompañamos en tu proceso de formalización y representamos tus intereses ante autoridades y entidades clave.'
        },
        {
            title: 'Impulso a tu Crecimiento',
            text: 'Capacitaciones, ferias, promociones y herramientas para fortalecer y hacer crecer tu emprendimiento.'
        }
    ]

    const training = [
        {
            id: 1,
            category: 'Webinar',
            image: '',
            date: '2026/02/02',
            title: 'Marketing Digital para Mypes',
            text: 'Estrategias prácticas para potenciar ventas online y posicionamiento de marca regional.'
        },
        {
            id: 2,
            category: 'Taller',
            image: '',
            date: '2026/02/12',
            title: 'Finanzas y Gestión de Caja',
            text: 'Controla el flujo de efectivo y mejora la rentabilidad de tu negocio local.'
        }
    ]

    const interviews = [
        {
            id: 1,
            type: 'video',
            date: '2026-01-22',
            title: 'El futuro del turismo en Jauja: Desafíos y Oportunidades',
            text: 'Conversamos con líderes del sector sobre las oportunidades de crecimiento y el impacto real en la economía de nuestra provincia.'
        }
    ]

    const blogs = [
        {
            id: 1,
            category: 'Entrevista',
            image: '',
            title: "La reactivación del turismo es clave para Jauja",
            date: "2026-01-15"
        },
        {
            id: 2,
            category: 'Economía',
            image: '',
            title: "Nuevas proyecciones comerciales para el primer trimestre",
            date: "2026-01-20"
        },
        {
            id: 3,
            category: 'Digitalización',
            image: '',
            title: "Pymes de Jauja dan salto al ecommerce",
            date: "2026-01-25"
        },
        {
            id: 4,
            category: 'Tributación',
            image: '',
            title: "SUNAT: Recibirás capacitaciones en cambio de sanciones",
            date: "2026-01-28"
        }
    ]

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}>Impulsando el Desarrollo Empresarial de Jauja</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Construyendo el futuro de nuestra comunidad empresarial con servicios modernos y profesionales</p>
                    <div className="flex gap-sm">
                        <Link to={'/register'} className="block bg-secondary py-md px-lg rounded-pill text-semibold">Inscribirse</Link>
                        <Link to={'/about'} className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold">Conoce más</Link>
                    </div>
                </div>
            </section>

            <section className="w-full py-xl">
                <div className="w m-auto" style={{"--w": "90%"}}>
                    <div className="w-full mb" style={{"--mb": "1rem"}}>
                        <p className="text-uppercase text-yellow text-medium text-sm">Que te ofrecemos</p>
                        <h2 className="text-primary text-xxl md:text-display">Nuestros servicios</h2>
                    </div>

                    <ul className="w-full flex flex-col gap-md md:flex-row">
                        {services.map((service, idx) => (
                            <li key={idx} className="w-full bg-white rounded-md p-md flex flex-col align-center gap-sm text-center">
                                <div className="w h center rounded-circle bg-default" style={{"--w": "60px", "--h": "60px"}}></div>
                                <h4 className="text-primary text-lg">{service.title}</h4>
                                <p className="text-gray-dark line-relaxed">{service.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full py-xl bg-white">
                <div className="w m-auto" style={{"--w": "90%"}}>
                    <div className="w-full flex align-center gap-md justify-between mb" style={{"--mb": "1rem"}}>
                        <div>
                            <p className="text-uppercase text-yellow text-medium text-sm">Formación profesional</p>
                            <h2 className="text-primary text-xxl md:text-display">Próximas Capacitaciones</h2>
                        </div>
                        <Link to={'/'} className="text-nowrap text-semibold">Ver todos</Link>
                    </div>
                    <ul className="flex flex-col gap-md md:grid md:grid-cols lg:grid-cols" style={{"--grid-cols-md": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(3, 1fr)"}}>
                        {training.map((inter) => (
                            <li key={inter.id} className="w-full">
                                <div className="relative w-full h bg-default rounded-md" style={{"--h": "200px"}}>
                                    <span className="absolute top left bg-secondary text-xs rounded-pill text-medium px-sm py-xs" style={{"--top": "1rem", "--left": "1rem"}}>{inter.category}</span>
                                </div>
                                <div className="flex flex-col gap-sm py-sm">
                                    <p className="text-gray-dark text-semibold">{inter.date}</p>
                                    <h3 className="text-primary text-lg">{inter.title}</h3>
                                    <p className="text-gray line-normal">{inter.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full py-xl">
                <div className="w m-auto" style={{"--w": "90%"}}>
                    <div className="w-full mb" style={{"--mb": "1rem"}}>
                        <p className="text-uppercase text-yellow text-medium text-sm">Contenido multimedia</p>
                        <h2 className="text-primary text-xxl md:text-display">Entrevistas</h2>
                    </div>
                    <ul className="flex flex-col gap-md md:grid md:grid-cols lg:grid-cols" style={{"--grid-cols-md": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(3, 1fr)"}}>
                        {interviews.map((inter) => (
                            <li key={inter.id} className="w-full bg-white rounded-md">
                                <div className="w-full h" style={{"--h": "180px"}}></div>
                                <div className="w-full p-md flex flex-col gap-sm">
                                    <p className="flex gap-sm align-center text-uppercase text-medium">
                                        <span className="p-xs text-xs text-primary bg-primary-transparent rounded-sm">{inter.type}</span>
                                        {inter.date}
                                    </p>
                                    <h3 className="text-primary text-lg" aria-label={inter.title}>{inter.title}</h3>
                                    <p className="text-gray line-normal" aria-label={inter.text}>{inter.text}</p>
                                    <Link to={'/'} className="text-uppercase text-primary text-medium text-decoration text-decoration-yellow underline-offset text-decoration-thickness">Ver entrevista completa</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full py-xl bg-white">
                <div className="w m-auto" style={{"--w": "90%"}}>
                    <div className="w-full flex align-center gap-md justify-between mb" style={{"--mb": "1rem"}}>
                        <div>
                            <p className="text-uppercase text-yellow text-medium text-sm">Ultimas tendencias</p>
                            <h2 className="text-primary text-xxl md:text-display">Noticias y Actualidad</h2>
                        </div>
                        <Link to={'/'} className="text-nowrap text-semibold">Ver todos</Link>
                    </div>
                    <ul className="flex flex-col gap-md md:grid md:grid-cols lg:grid-cols" style={{"--grid-cols-md": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(3, 1fr)"}}>
                        {blogs.map((blog) => (
                            <li key={blog.id} className="flex gap-sm">
                                <div className="w h bg-default rounded-md" style={{"--w": "100px", "--mnw": "100px", "--h": "100px"}}></div>
                                <div className="flex flex-col gap-xs">
                                    <p className="text-gray text-xs text-medium">{blog.category}</p>
                                    <h3 className="text-lg text-primary">{blog.title}</h3>
                                    <p className="text-gray text-xs">{blog.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full py-xl">
                <div className="w m-auto" style={{"--w": "90%"}}>
                    <div className="w-full mb" style={{"--mb": "1rem"}}>
                        <p className="text-uppercase text-yellow text-medium text-sm">Mantente informado</p>
                        <h2 className="text-primary text-xxl md:text-display">Recibe las últimas noticias</h2>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-col gap-sm">
                            <input type="text" className="w-full h rounded-md px-sm" style={{"--h": "50px"}} name="name" id="name" placeholder="Ingresa tu nombre" aria-placeholder="Ingresa tu nombre" />
                            <div className="flex flex-col gap-xs md:flex-row">
                                <input type="number" className="w-full h rounded-md px-sm" style={{"--h": "50px"}} inputMode="numeric" name="phone" id="phone" placeholder="Ingresa tu número de WhatsApp" aria-placeholder="Ingresa tu número de WhatsApp" />
                                <input type="email" className="w-full h rounded-md px-sm" style={{"--h": "50px"}} name="email" id="email" placeholder="Ingresa tu correo electrónico" aria-placeholder="Ingresa tu correo electrónico" />
                            </div>
                            <textarea className="w-full px-sm py-sm rounded-md h" style={{"--mnh": "100px", "resize": "none"}} name="message" id="message" placeholder="Déjanos un mensaje" aria-placeholder="Déjanos un mensaje" />
                            <button className="w-full h bg-secondary text-primary text-semibold rounded-md" style={{"--h": "50px"}}>Enviar</button>
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    )

}