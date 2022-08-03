import React from 'react'
import "./whatsapp.css";

const Whatsapp = () => {
    return (
        <div className='whatsapp'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
            <a href="https://api.whatsapp.com/send?phone=5491157716197&text=Hola!%21%20Quisiera%20cotizar%20un%20sitio%20web." target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>

        </div>
    )
}

export default Whatsapp