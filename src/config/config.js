import { IconBrandFacebook, IconBrandLinkedin, IconBrandWhatsapp, IconBrandX } from '@tabler/icons-react'

const message = 'Me podría brindar información para ser parte de la Cámara de Comercio de Jauja'

export const navlinks = [
    {
        link: '/',
        txt: 'Inicio',
        active: false,
        blank: false
    },
    {
        link: '/services',
        txt: 'Servicios',
        active: false,
        blank: false
    },
    {
        link: '/interviews',
        txt: 'Entrevistas',
        active: false,
        blank: false
    },
    {
        link: '/training',
        txt: 'Capacitaciones',
        active: false,
        blank: false
    },
    {
        link: '/about',
        txt: 'Nosotros',
        active: false,
        blank: false
    }
]

export const socials = [
    {
        ico: <IconBrandFacebook/>,
        url: 'https://www.facebook.com/camaradejauja'
    },
    {
        ico: <IconBrandLinkedin/>,
        url: 'https://www.linkedin.com/company/camara-de-jauja'
    },
    {
        ico: <IconBrandX/>,
        url: 'https://x.com/CamaraJauja'
    },
    {
        ico: <IconBrandWhatsapp/>,
        url: `https://wa.me/51977498134/?text=${encodeURIComponent(message)}`
    }
]

export const team = [
    {
        name: "Danny Maita Mayor",
        post: "Presidente del Consejo Directivo",
        photo: "url-de-la-foto.jpg",
        correo: "presidencia@camaradejauja.org.pe"
    },
    {
        name: "J. Franco Pérez Caro",
        post: "Director Ejecutivo",
        photo: "url-de-la-foto.jpg"
    },
    {
        name: "Manuel Santos Ortiz",
        post: "Director de Operaciones",
        photo: "url-de-la-foto.jpg"
    },
    {
        name: "Julio Jaramillo Cóndor",
        post: "Director Sectorial de Turismo",
        photo: "url-de-la-foto.jpg"
    }
]