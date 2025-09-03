import './styles/hero.css'

export default function Hero () {

    return (

        <section className={`__section __section_hero`}>

            <div className='__banner'>
                <div className='--degrade'>
                    <div className='--content-txt'>
                        <h1 className='--tit'>Impulsamos el desarrollo empresarial de Jauja</h1>
                        <p className='--sub'>Somos la Cámara de Comercio de Jauja, una institución que conecta, representa y fortalece a empresarios y emprendedores. Promovemos la formalización, la innovación, el turismo y las oportunidades de negocio en toda la provincia.</p>
                        <div className='--flx'>
                            <button className='--btn --btn-primary'>Hazte socio</button>
                            <button className='--btn --btn-secondary'>Ver beneficios</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )

}