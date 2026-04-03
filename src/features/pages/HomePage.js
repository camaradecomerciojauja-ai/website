import { Link } from "react-router-dom";
import { blogs, interviews, services, training } from "../../db/dinamic";

export default function HomePage () {

    return (

        <>
        
            <section className="w-full h bg-primary" style={{"--h": "100dvh"}}>
                <div className="w h m-auto pt pb flex flex-col justify-center gap-sm" style={{"--w": "90%", "--pt": "60px", "--pb": "1rem"}}>
                    <h1 className="text-white text-display line-normal md:w md:text-3xl lg:w lg:text-5xl" style={{"--w-md": "70%", "--w-lg": "60%"}}>Impulsamos el <span className="text-yellow">desarollo</span> empresarial de Jauja</h1>
                    <p className="text-gray-light line-relaxed md:w lg:w lg:text-lg" style={{"--w-md": "70%", "--w-lg": "40%"}}>Conectamos emprendedores y empresas con oportunidades reales, capacitación estratégica y respaldo institucional.</p>
                    <div className="flex gap-sm">
                        <Link to={'/join'} role="button" aria-label="Inscribirse como socio" className="block bg-secondary py-md px-lg rounded-pill text-semibold">Afíliate ahora</Link>
                        <Link to={'/about'} role="button" aria-label="Conocer más sobre la Cámara" className="bg-primary-bg text-white py-md px-lg rounded-pill text-semibold">Conoce la Cámara</Link>
                    </div>
                </div>
            </section>

            <section className="w-full py-xl">
                <div className="w m-auto" style={{"--w": "90%"}}>
                    <div className="w-full mb" style={{"--mb": "1rem"}}>
                        <p className="text-uppercase text-yellow text-medium text-sm">Qué te ofrecemos</p>
                        <h2 className="text-primary text-xxl md:text-display">Servicios empresariales</h2>
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
                        <Link to={'/'} aria-label="Ver todas las formaciones profesionales" className="text-nowrap text-semibold">Ver todos</Link>
                    </div>
                    <ul className="flex flex-col gap-md md:grid md:grid-cols lg:grid-cols" style={{"--grid-cols-md": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(3, 1fr)"}}>
                        {training.map((inter) => (
                            <Link to={'/'} key={inter.id} aria-label={`${inter.title} - ${inter.text}`}>
                                <li className="w-full">
                                    <div className="relative w-full h bg-default rounded-md" style={{"--h": "200px"}}>
                                        <span className="absolute top left bg-secondary text-xs rounded-pill text-medium px-sm py-xs" style={{"--top": "1rem", "--left": "1rem"}}>{inter.category}</span>
                                    </div>
                                    <div className="flex flex-col gap-sm py-sm">
                                        <p className="text-gray-dark text-semibold">{inter.date}</p>
                                        <h3 className="text-primary text-lg">{inter.title}</h3>
                                        <p className="text-gray line-normal">{inter.text}</p>
                                    </div>
                                </li>
                            </Link>
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
                                    <Link to={'/'} aria-label={`Ver entrevista completa de ${inter.title}`} className="text-uppercase text-primary text-medium text-decoration text-decoration-yellow underline-offset text-decoration-thickness">Ver entrevista completa</Link>
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
                        <Link to={'/'} className="text-nowrap text-semibold" aria-label="Ver todas las últimas tendencias">Ver todos</Link>
                    </div>
                    <ul className="flex flex-col gap-md md:grid md:grid-cols lg:grid-cols" style={{"--grid-cols-md": "repeat(2, 1fr)", "--grid-cols-lg": "repeat(3, 1fr)"}}>
                        {blogs.map((blog) => (
                            <Link to={'/newsletter/'} key={blog.id}>
                                <li className="flex gap-sm">
                                    <div className="w h bg-default rounded-md" style={{"--w": "100px", "--mnw": "100px", "--h": "100px"}}></div>
                                    <div className="flex flex-col gap-xs">
                                        <p className="text-gray text-xs text-medium">{blog.category}</p>
                                        <h3 className="text-lg text-primary">{blog.title}</h3>
                                        <p className="text-gray text-xs">{blog.date}</p>
                                    </div>
                                </li>
                            </Link>
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