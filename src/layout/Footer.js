import logo from '../assets/img/logo-invert.svg'

import './styles/footer.css'

export default function Footer () {

    const year = new Date().getFullYear();

    return (

        <>
        
            <footer className={`__footer`}>

                <div className='__colA'>

                    <div className='__rowA'>

                        <img src={logo} alt='Cámara de Turismo y Comercio de Jauja' />

                    </div>

                    <div className='__rowB'>
                        <h6>© {year} - Todos los Derechos Reservados</h6>
                        <p>La información contenida en este sitio es de propiedad de la Cámara de Turismo y Comercio de Jauja, y su reproducción será permitida toda vez que sea citada la fuente.</p>
                    </div>

                </div>

                <div className='__colB'></div>

            </footer>

        </>

    )

}