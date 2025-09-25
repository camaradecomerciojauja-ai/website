import { useState } from 'react'
import { membership } from '../../db/directory-membership'
import './styles/directory.css'
export default function Directory () {

    const [visible, setVisible] = useState(10) // cantidad inicial

    const handleLoadMore = () => setVisible(prev => prev + 10)

    return (

        <div className="__table">
            <div className="__table_head">
                <div className='__col __col_id'>
                    <span>ID</span>
                </div>
                <div className='__col'>
                    <span>Nombre Comercial</span>
                </div>
                <div className='__col'>
                    <span>Representante</span>
                </div>
                <div className='__col'>
                    <span>Rubro</span>
                </div>
                <div className='__col'>
                    <span>Dirección</span>
                </div>
                <div className='__col'>
                    <span>Teléfono</span>
                </div>
                <div className='__col'>
                    <span>Correo</span>
                </div>
            </div>
            <div className='__table_body'>
                {membership.slice(0, visible).map((socio, i) => (
                    <div className='__row' key={i}>
                        <div className='__col __col_id'>
                            <span>{i+1}</span>
                        </div>
                        <div className='__col'>
                            <span>{socio.bussines.nombre_comercial}</span>
                        </div>
                        <div className='__col'>
                            <span>{socio.person.name}</span>
                        </div>
                        <div className='__col'>
                            <span>{socio.bussines.sector_comercial}</span>
                        </div>
                        <div className='__col'>
                            <span>{socio.bussines.direccion_comercial}</span>
                        </div>
                        <div className='__col'>
                            <span>{socio.bussines.telefono_comercial}</span>
                        </div>
                        <div className='__col'>
                            <span>{socio.bussines.email_comercial}</span>
                        </div>
                    </div>
                ))}
                {visible < membership.length && (
                    <div className='__row_load'>
                        <button className='__btn_load' onClick={handleLoadMore}>Cargar más</button>
                    </div>
                )}
            </div>
        </div>

    )

}