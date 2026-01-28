import { useEffect, useState } from 'react'
import { IconChevronRight, IconMenu, IconX } from '@tabler/icons-react'
import { navlinks, socials } from "../../config/config";
import logo from '../../shared/img/LOGO - PRIMARY.svg'
import logoSecondary from '../../shared/img/LOGO - WHITE.svg'
import { Link, useLocation } from 'react-router-dom';

export default function Header () {

    const location = useLocation();
    const [ nav, setNav ] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // si el scroll vertical es mayor a 60, true; sino false
            if (window.scrollY > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // limpiar el listener al desmontar
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <header className={`fixed inset w-full h bg-transparent zIndex-header ${scrolled ? 'bg-white' : ''} ${nav ? 'bg-primary' : ''}`} style={{"--h": "60px", "--inset": "0"}}>

            <div className='w h m-auto flex align-center justify-between' style={{"--w": "90%"}}>

                <Link href='/' className='block h' style={{"--h": "40px"}}>
                    <img src={!scrolled ? logoSecondary : logo} alt='Logo de la Cámara de Comercio de la Provincia de Jauja - La primera Capital del Perú' loading='lazy' />
                </Link>

                <nav className={`none lg:block`}>
                    <ul className='flex align-center gap-lg'>
                        {navlinks.map((nl, index) => (
                            <li key={index} className={`__nav_item __nav_item_desktop`}>
                                <Link className={`block py-sm px-md ${scrolled ? 'text-primary' : 'text-white'} ${location.pathname === nl.link ? 'text-semibold' : ''}`} to={`${nl.link}`} target={nl.blank ? "_blank" : "_self"} rel={nl.blank ? "noopener noreferrer" : undefined}>{nl.txt}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='flex align-center gap-md'>
                    <Link to={'/register'} className='block py-sm px-md bg-secondary text-semibold rounded-pill'>Inscribirse</Link>
                    <button className='w h center lg:none' style={{"--w": "40px", "--h": "40px"}} onClick={() => setNav(!nav)}>{nav ? <IconX color={scrolled && nav ? '#003059' : '#FFFFFF'} /> : <IconMenu color={scrolled && !nav ? '#003059' : '#FFFFFF'} />}</button>
                </div>

            </div>

            <nav className={`w-screen h py-md fixed ${nav ? 'flex flex-col gap-lg bg-primary' : 'none'}`} style={{"--h": "calc(100dvh - 60px)"}}>

                <ul className='w m-auto flex flex-col gap-md' style={{"--w": "90%"}}>
                    {navlinks.map((nl, index) => (
                        <li key={index} className='w-full'>
                            <Link className={`flex align-center justify-between text-white text-lg text-medium py-md`} to={`${nl.link}`}>
                                {nl.txt}
                                {!nl.active ? <IconChevronRight/> : ''}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='w m-auto flex flex-row gap-md justify-center' style={{"--w": "90%"}}>
                    {socials.map((sl, i) => (
                        <li key={i}>
                            <a className='center w h bg-primary-bg rounded-circle text-white' style={{"--w": "50px", "--h": "50px"}} rel="noreferrer" href={sl.url} target='_blank'>{sl.ico}</a>
                        </li>
                    ))}
                </ul>

            </nav>

        </header>

    )

}