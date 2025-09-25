import Directory from "../components/Directory";
import './styles/directory.css'

export default function DirectoryView () {

    return (

        <>
        
            <section className="__section __section_membership">
                
                <div className="__content_section">
                
                    <div className="__tit">
                        <h1>Directorio de socios</h1>
                        <p>El siguiente es el directorio de nuestros socios con los que puedes tener lazos comerciales.</p>
                    </div>
                
                    <Directory/>

                </div>

            </section>
            
        </>

    )

}