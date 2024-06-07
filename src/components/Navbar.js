import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'


export default function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <a href="index.html"><FontAwesomeIcon className="navbar--icon" icon={faEarthAmericas} /></a>
                <a href="index.html"><h1 className="navbar--h1">My Travel Journal</h1></a>
            </nav>
        </header>
    )
}