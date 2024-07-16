import React from "react"

export default function Travel(props){
    const date = `${props.startDate} - ${props.endDate}`
    console.log(props.imageUrl)
    return (
        <div className="travel">
            <img src={props.imageUrl} alt="" className="travel--photo"/>
            <div className="travel--details">
                <div className="travel--map-locations">
                    <img src="./mark-location.svg" alt="" />
                    <h2 className="travel--country">{props.location}</h2>
                    <a href={props.googleMapsUrl} className="travel--google-maps">Visualizar no Google Maps</a>
                </div>
                <h1 className="travel--location-title">{props.title}</h1>
                <h2 className="travel--date">{date}</h2>
                <p className="travel--description">{props.description}</p>
            </div>
        </div>
    )
}