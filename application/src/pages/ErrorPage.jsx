import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="">
            <h1 className="">Oops!</h1>
            <p className="">Sorry, an unexpected error has occurred.</p>
            <p className="">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
