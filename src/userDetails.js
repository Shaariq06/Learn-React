import { useLocation} from "react-router-dom"

export const UserDetails = (props) => {
    const {state} = useLocation();

    return (
        <div>
            <h2 className="titles">User Details</h2>
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
        </div>
    )
}
