import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2> Sorry! </h2>
            <p> The page you are trying to acces cannot be found! </p>
            <Link to='/'> Back To Homepage... </Link>
        </div>
     );
}
 
export default NotFound;