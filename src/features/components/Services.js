import './styles/services.css'

export default function Services () {

    const services = [
        {
            tit: 'Asesoría y Formalización Empresarial',
            txt: 'Orientación legal, tributaria y administrativa para iniciar o formalizar tu negocio.'
        },
        {
            tit: 'Asesoría y Formalización Empresarial',
            txt: 'Orientación legal, tributaria y administrativa para iniciar o formalizar tu negocio.'
        },
        {
            tit: 'Capacitación y Desarrollo Empresarial',
            txt: 'Charlas, talleres y programas de formación adaptados a las necesidades locales.'
        },
        {
            tit: 'Representación Institucional',
            txt: 'Defendemos los intereses del empresariado ante autoridades locales, regionales y nacionales.'
        }
    ]

    return (

        <section className="__section __section_services">

            <div className='__content_service'>

                <h4 className='--subtit'>Herramientas que fortalecen a los emprendedores y empresarios</h4>
                <h2 className='--tit'>Servicios para crecer, conectar y formalizar tu negocio</h2>
                <p className='--summary'>Desde asesoría empresarial hasta promoción comercial, nuestros servicios están diseñados para ayudarte a formalizar, consolidar y hacer visible tu emprendimiento o empresa en Jauja y más allá.</p>

                <ul>
                    {services.map((s, i) => (
                        <li key={i}>
                            <div className='__ico'></div>
                            <h3>{s.tit}</h3>
                            <p>{s.txt}</p>
                        </li>
                    ))}
                </ul>

            </div>

        </section>

    )

}