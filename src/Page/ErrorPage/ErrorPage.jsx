import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="text-center mt-32">
                <h1 className="text-red-500 font-bold text-5xl pb-2">Oops..!!! </h1>

                <p className="pb-6 pt-2 text-xl">Not Found </p>
                    <Link to="/">
                       <button className="p-4 bg-blue-900 rounded-lg text-white text-xl">Go Back Home
                       </button>
                    </Link>
            </div>
        </div>
    );
};

export default ErrorPage;