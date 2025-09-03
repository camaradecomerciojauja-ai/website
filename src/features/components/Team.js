import { team } from '../../config/config'
import './styles/team.css'
export default function Team () {

    return (

        <section className="__section __section_team">

            <div className='__content_team'>

                <h4 className='--subtit'>Liderazgo con compromiso por Jauja</h4>
                <h2 className='--tit'>Conoce al equipo que impulsa la Cámara</h2>
                <p className='--summary'>Nuestra institución está liderada por un Consejo Directivo comprometido con el progreso empresarial de Jauja y un equipo administrativo que garantiza una gestión eficiente, transparente y cercana a nuestros socios.</p>

                <ul className='--team-lst'>
                    {team.map((ad, i) => (
                        <li className='--card-team' key={i}>
                            <div className='--info'>
                                <h3>{ad.name}</h3>
                                <p>{ad.post}</p>
                            </div>
                        </li>
                    ))}
                </ul>

                <a href='/' className='--link --link-more'>Ver a todo el equipo</a>

            </div>

        </section>

    )

}