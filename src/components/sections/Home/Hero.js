import { Link } from 'react-router-dom'

import banner1 from '../../../assets/img/banner1.jpeg'

import './styles/hero.css'

export default function Hero () {

    const messageSocio = "Hola, quisiera asociarme a la Cámara de Turismo y Comercio de Jauja";
    const encodedMessage = encodeURIComponent(messageSocio);
    const whatsappLink = `https://wa.me/+51932215917/?text=${encodedMessage}`;

    const messageInfo = 'Hola, quisera más información acerca de la Cámara de Turismo y Comercio de Jauja'
    const encodedMessageInfo = encodeURIComponent(messageInfo);
    const whatsappLinkInfo = `https://wa.me/+51932215917/?text=${encodedMessageInfo}`

    return (

        <>
        
            <section className={`__section __section_hero`}>

                <div className={`__banner __bannerA`}>

                    <div className='__image' style={{backgroundImage: `url(${banner1})`}}>
                        <img src={banner1} alt='Plaza principal de la Provincia de Jauja' />
                    </div>
                    <div className='__mask'>

                        <div className='__content_mask'>
                            <h1>La fuerza de los empresarios Jaujinos</h1>
                            <p>Con una rica tradición de innovación, los empresarios de Jauja están impulsando el desarrollo económico.</p>
                            <div className='__link_cta'>
                                <Link to={whatsappLink} target='_blank' className='__link __link_btn __link_btn_primary'>Quiero ser socio</Link>
                                <Link to={whatsappLinkInfo} target='_blank' className='__link __link_btn __link_btn_secondary'>Deseo más información</Link>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={`__banner __bannerB`}>

                    <div className={`__content_banner`}>

                        <h2>TENEMOS EL ASESORAMIENTO QUE NECESITAS.</h2>
                        <Link to={whatsappLink} target='_blank' className='__link __link_btn'>Quiero ser socio</Link>

                    </div>

                </div>

            </section>

        </>

    )

}