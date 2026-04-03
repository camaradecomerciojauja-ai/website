import { useEffect, useState } from "react"
import { getListPartners } from "../../../services/partners.service";
import { IconDots, IconSearch } from "@tabler/icons-react";

export default function Partners () {

    const [ search, setSearch ] = useState('');
    const [ list, setList ] = useState([]);
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(true);

    const matchSearch = (itm) => {

        if (!search.trim()) return true;

        const term = search.toLowerCase();

        return (
            itm.codigo_socio?.toLowerCase().includes(term) ||
            itm.ruc?.toLowerCase().includes(term) ||
            itm.razon_social?.toLowerCase().includes(term) ||
            itm.sector?.toLowerCase().includes(term) ||
            itm.category?.toLowerCase().includes(term)
        );
    };

    useEffect(() => {
        const getPartners = async () => {
            try {
                const data = await getListPartners();
                setList(data);
            } catch (error) {
                console.error(error);
                setError(error.message)
            } finally {
                setLoading(false);
            }
        };
        getPartners();
    }, [])

    return (

        <>

            <h1>Socios</h1>
            <p>Ten a la mano la lista de socios activos y agrega, edita o elimina.</p>

            <div className="w-full flex align-center justify-between my-md">
                <div>
                    <div className="relative bg-white w h rounded-md hidden flex" style={{"--w": "300px","--h": "50px"}}>
                        <input type="text" name="search" id="search" value={search} className="w h px-md" style={{"--w": "calc(300px - 50px)","--h": "50px"}} placeholder="Buscar socio por nombre, categoria u otros" onChange={(e) => setSearch(e.target.value)} />
                        <span className="center w h" style={{"--w": "50px", "--mnw": "50px", "--h": "50px"}}><IconSearch/></span>    
                    </div>
                </div>
                <button className="bg-primary text-white h px-md rounded-md" style={{"--h": "50px"}}>Agregar nuevo</button>
            </div>
        
            <p className="text-sm text-gray mb-sm">Mostrando <b>{list.length}</b> de <b>{list.length}</b></p>
            <div className="w-full bg-white rounded-md border">
                <ul className="w-full h flex align-center justify-between border-bottom" style={{"--h": "60px"}}>
                    <li className="w-full h center border-right" style={{"--h": "60px"}}>Código</li>
                    <li className="w-full h center border-right" style={{"--h": "60px"}}>RUC</li>
                    <li className="w-full h center border-right" style={{"--h": "60px"}}>R. Social</li>
                    <li className="w-full h center border-right" style={{"--h": "60px"}}>Sector</li>
                    <li className="w-full h center border-right" style={{"--h": "60px"}}>Categoria</li>
                    <li className="w-full h center border-right" style={{"--h": "60px"}}>Estado</li>
                    <li className="w h center" style={{"--w": "60px", "--mnw": "60px", "--h": "60px"}}>Más</li>
                </ul>
                <ul>
                    {loading ? (
                        <li className="center w-full h" style={{"--h": "60px"}}>Cargando...</li>
                    ) : (
                        error ? (
                            <li className="center w-full h" style={{"--h": "60px"}}>{error}</li>
                        ) : (
                            list.length > 0 ? (
                                list.map((itm) => {

                                    const visible = matchSearch(itm);

                                    return (
                                        <li key={itm.id} className={`w-full h flex align-center justify-between border-bottom text-sm ${!visible ? 'none' : ''}`} style={{"--h": "60px"}}>
                                            <span className="center w-full h border-right" style={{"--h": "60px"}} title={itm.codigo_socio}>{itm.codigo_socio}</span>
                                            <span className="center w-full h border-right" style={{"--h": "60px"}} title={itm.ruc}>{itm.ruc}</span>
                                            <span className="flex w-full h border-right text-clamp-3" style={{"--h": "60px"}} title={itm.razon_social}>{itm.razon_social}</span>
                                            <span className="center w-full h border-right text-clamp-3 text-center" style={{"--h": "60px"}} title={itm.sector}>{itm.sector}</span>
                                            <span className="center w-full h border-right text-clamp-3" style={{"--h": "60px"}} title={itm.category}>{itm.category}</span>
                                            <span className="center w-full h border-right" style={{"--h": "60px"}} title={itm.estado_socio ? 'Activo' : 'No activo'}>{itm.estado_socio ? 'Activo' : 'No activo'}</span>
                                            <span className="center w h" style={{"--w": "60px", "--mnw": "60px", "--h": "60px"}} title={`Más`}>
                                                <button className="w h center bg-default rounded-sm" style={{"--w": "40px", "--mnw": "40px", "--h": "40px"}}><IconDots/></button>
                                            </span>
                                        </li>
                                    )
                                })
                            ) : (
                                <li className="center w-full h" style={{"--h": "60px"}}>No hay socios disponibles</li>
                            )
                        )
                    )}
                </ul>
            </div>
        
        </>

    )

}