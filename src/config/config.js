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
        link: '/',
        txt: 'Servicios',
        active: false,
        blank: false
    },
    {
        link: '/',
        txt: 'Entrevistas',
        active: false,
        blank: false
    },
    {
        link: '/',
        txt: 'Capacitaciones',
        active: false,
        blank: false
    },
    {
        link: '/',
        txt: 'Nosotros',
        active: false,
        blank: false
    },
    {
        link: `https://wa.me/51977498134/?text=${encodeURIComponent(message)}`,
        txt: 'Inscribirse',
        active: true,
        blank: true
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
        photo: "url-de-la-foto.jpg"
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