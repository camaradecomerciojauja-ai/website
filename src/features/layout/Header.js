import { useState } from 'react'
import { IconChevronRight, IconMenu, IconX } from '@tabler/icons-react'
import { navlinks, socials } from "../../config/config";
import logo from '../../shared/img/LOGO - PRIMARY.svg'

import './styles/header.css'

export default function Header () {

    const [ nav, setNav ] = useState(false);

    return (

        <header className='__header'>

            <div className='__content_header'>

                <div className='__col_header'>
                    <a href='/' className='__link_logo'>
                        <img className='__img_logo' src={logo} alt='Logo de la Cámara de Comercio de la Provincia de Jauja - La primera Capital del Perú' loading='lazy' />
                    </a>
                </div>

                <nav className='__col_header __col_header_nav'>
                    <ul className='__nav'>
                        {navlinks.map((nl, index) => (
                            <li key={index} className={`__nav_item __nav_item_desktop`}>
                                <a className={`__link_nav ${nl.active ? '__link_nav--active' : ''}`} href={`${nl.link}`}>{nl.txt}</a>
                            </li>
                        ))}
                        <li className='__nav_item __nav_item_mobile'>
                            <button className='__btn __btn_menu' onClick={() => setNav(true)}><IconMenu/></button>
                        </li>
                    </ul>
                </nav>

            </div>

            <nav className={`__content_subnav ${nav ? '__content_subnav--active' : ''}`}>

                <div className='__subnav_header'>
                    <button className='__btn __btn_close_menu' onClick={() => setNav(false)}><IconX/></button>
                </div>

                <ul className='__subnav_main'>
                    {navlinks.map((nl, index) => (
                        <li key={index}>
                            <a className={`__link ${nl.active ? '__link--active' : ''}`} href={`${nl.link}`}>
                                {nl.txt}
                                {!nl.active ? <IconChevronRight/> : ''}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className='__subnav_socials'>
                    {socials.map((sl, i) => (
                        <li key={i}>
                            <a className='__link __link_social' rel="noreferrer" href={sl.url} target='_blank'>{sl.ico}</a>
                        </li>
                    ))}
                </ul>

            </nav>

        </header>

    )

}