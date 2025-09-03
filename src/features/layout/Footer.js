import { navlinks, socials } from '../../config/config'
import logo from '../../shared/img/LOGO - WHITE.svg'
import './styles/footer.css'

export default function Footer () {

    const year = new Date().getFullYear()

    return (

        <>
        
            <footer className="__footer">

                <div className='__row __row_A'>

                    <div className='__col __col_A'>
                        <div className='__box_image'>
                            <img src={logo} alt='Logo de la Cámara de Comercio de la Provincia de Jauja | La Primera Capital del Perú' />
                        </div>
                    </div>

                    <div className='__col __col_D'>
                        <ul>
                            <li>
                                <h3>Dirección</h3>
                                <p>Jr. Arica 466, Jauja</p>
                            </li>
                            <li>
                                <h3>Teléfono</h3>
                                <p>977 498 134</p>
                            </li>
                            <li>
                                <h3>Correo</h3>
                                <p>camaradecomerciojauja@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    <div className='__col __col_B'>
                        <ul>
                            {navlinks.map((n, i) => (
                                <li key={i}>
                                    <a href={n.link}>{n.txt}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className='__col __col_C'>
                        <ul className='__lst_social'>
                            {socials.map((s, i) => (
                                <li key={i}>
                                    <a href={s.url} rel='noreferrer' target='_blank'>{s.ico}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className='__row __row_B'>
                    <h4>Copyright © {year} · Cámara de Comercio de Jauja · All rights reserved</h4>
                </div>

            </footer>

        </>

    )

}