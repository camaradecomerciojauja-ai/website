import graph from '../../shared/img/summary.png'
import './styles/summary.css'
export default function Summary () {

    return (

        <section className="__section __section_summary">

            <div className='__content_summary'>

                <div className='__col __col_graphic'>
                    <img src={graph} alt='Empresarios - Una Cámara que impulsa, conecta y transforma - Cámara de Comercio de Jauja' />
                </div>

                <div className='__col __col_parragrahp'>

                    <h4>Comprometidos con el desarrollo sostenible de Jauja</h4>
                    <h2>Una Cámara que impulsa, conecta y transforma</h2>

                    <p>La Cámara de Comercio de Jauja es una institución privada sin fines de lucro que representa a los empresarios y emprendedores de la provincia. Trabajamos para fortalecer el ecosistema empresarial, fomentar la formalización, impulsar el turismo y generar alianzas estratégicas que construyan una Jauja más competitiva e integrada.</p>

                    <ul>
                        <li>Representación empresarial</li>
                        <li>Desarrollo económico local</li>
                        <li>Promoción del turismo y la cultura</li>
                        <li>Apoyo a la formalización</li>
                        <li>Innovación y capacitación</li>
                        <li>Integración provincial</li>
                        <li>Oportunidades de negocio</li>
                    </ul>

                    <a href='/'>Conoce más</a>

                </div>

            </div>

        </section>

    )

}