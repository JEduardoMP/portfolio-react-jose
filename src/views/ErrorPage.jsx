import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Error 404</h2>
            <Link exact to="/">Back home</Link>
        </div>
    )
}

export default ErrorPage;