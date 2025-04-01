import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandX, IconMenu, IconX } from '@tabler/icons-react'

import logotipo from '../assets/img/LogoTipo.svg'
import logo from '../assets/img/logo.svg'

import './styles/header.css'

export default function Header () {

    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    return (

        <header className={`__header`}>

            <div className='__header_content'>

                <div className={`__box`}>

                    <div className={`__col __colA`}>
                        <Link to={'/'} className='__link __link_img'>
                            <picture>
                                <source media="(max-width: 600px)" srcSet={logotipo} />
                                <source media="(max-width: 1200px)" srcSet={logo} />
                                <img src={logo} alt="Logo" />
                            </picture>
                        </Link>
                    </div>

                    <div className={`__col __colC`}>
                        <nav className={`__nav_header`}>
                            <ul className={`__nav_list`}>
                                <li className={`__nav_item`}>
                                    <Link to={'/'} className={`__link __link_nav`}>
                                        <span className={`__span`}>Inicio</span>
                                    </Link>
                                </li>
                                <li className={`__nav_item`}>
                                    <Link to={'/'} className={`__link __link_nav`}>
                                        <span className={`__span`}>Servicios</span>
                                    </Link>
                                </li>
                                <li className={`__nav_item`}>
                                    <Link to={'/'} className={`__link __link_nav`}>
                                        <span className={`__span`}>Proyectos</span>
                                    </Link>
                                </li>
                                <li className={`__nav_item`}>
                                    <Link to={'/'} className={`__link __link_nav`}>
                                        <span className={`__span`}>Nosotros</span>
                                    </Link>
                                </li>
                                <li className={`__nav_item`}>
                                    <Link to={'/'} className={`__link __link_nav`}>
                                        <span className={`__span`}>Auspicios</span>
                                    </Link>
                                </li>
                                <li className={`__nav_item __nav_item_bg`}>
                                    <Link to={'/'} className={`__link __link_nav`}>
                                        <span className={`__span`}>Quiero ser socio</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className={`__col __colB`}>
                        <button className={`__btn __btn_square __btn_centered`} onClick={() => setIsOpenMenu(!isOpenMenu)}>{isOpenMenu ? <IconX/> : <IconMenu/>}</button>
                    </div>

                </div>

                <nav className={`__nav ${isOpenMenu ? '__nav_opening' : ''}`}>
                    <ul className={`__nav_list`}>
                        <li className={`__nav_item`}>
                            <Link to={'/'} className={`__link __link_nav`}>
                                <span className={`__span`}>Inicio</span>
                            </Link>
                        </li>
                        <li className={`__nav_item`}>
                            <Link to={'/'} className={`__link __link_nav`}>
                                <span className={`__span`}>Servicios</span>
                            </Link>
                        </li>
                        <li className={`__nav_item`}>
                            <Link to={'/'} className={`__link __link_nav`}>
                                <span className={`__span`}>Proyectos</span>
                            </Link>
                        </li>
                        <li className={`__nav_item`}>
                            <Link to={'/'} className={`__link __link_nav`}>
                                <span className={`__span`}>Nosotros</span>
                            </Link>
                        </li>
                        <li className={`__nav_item`}>
                            <Link to={'/'} className={`__link __link_nav`}>
                                <span className={`__span`}>Auspicios</span>
                            </Link>
                        </li>
                        <div className='__line'></div>
                        <li className={`__nav_item __nav_item_bg`}>
                            <Link to={'/'} className={`__link __link_nav`}>
                                <span className={`__span`}>Quiero ser socio</span>
                            </Link>
                        </li>
                        <div className='__line'></div>
                        <div className='__socials'>
                            <Link to={`https://www.facebook.com/camaradejauja/`} target='_blank' className={`__link __link_socials`}><IconBrandFacebook/></Link>
                            <Link to={`/`} target='_blank' className={`__link __link_socials`}><IconBrandInstagram/></Link>
                            <Link to={`/`} target='_blank' className={`__link __link_socials`}><IconBrandLinkedin/></Link>
                            <Link to={`/`} target='_blank' className={`__link __link_socials`}><IconBrandX/></Link>
                            <Link to={`/`} target='_blank' className={`__link __link_socials`}><IconBrandTiktok/></Link>
                        </div>
                    </ul>
                </nav>
            
            </div>

        </header>

    )

}