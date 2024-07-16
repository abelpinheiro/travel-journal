import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
 
    return (
        <nav className="header">
            <FontAwesomeIcon icon={faEarthAmericas} className="header--logo"/>
            <h3 className="header--title">Meu caderno de viagens.</h3>
        </nav>
    )
}