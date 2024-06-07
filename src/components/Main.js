import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


export default function Main(props){
    return(
        <>
        <div className="main">
            <div className="main--img">
                <img src={`./images/${props.imageUrl}`}
                alt="bogota"/>
            </div>
            <div className="main--text">
                <div className="main--text--top">
                    <p className="main--text--top--country"><FontAwesomeIcon className="main--text--top--icon" icon={faLocationDot} /> {props.location}</p>
                    <a target="_blank" rel="noreferrer" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="main--text--title">
                    <h2>{props.title}</h2>
                </div>
                <div className="main--text--dates">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <div className="main--text--description">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        </>
    )
}