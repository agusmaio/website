import React from 'react'
import './download.css';

const Download = () => {
    return (
        <div className="d">
            <div
                className="button donwload">
                <span>
                    <a href="./CV-Agustin-Maio-es.pdf" download={''}>Descargar CV</a>
                </span>
            </div>
        </div>
    )
}

export default Download