import { GoBack } from "../helpers/Functions"

const NotFound = () => {
    return (
        <div className="">
            <div className="">
                <h1>404</h1>
                <p className="">PAGE NOT FOUND</p>
                <button className="" onClick={GoBack}>GO BACK</button>
            </div>

        </div>
    )
}

export default NotFound
