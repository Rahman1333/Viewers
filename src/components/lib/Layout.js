import {Link} from "react-router-dom";

export default function Layout() {
    return (
        <ul className={"headerMenu"}>
            <li>
                <Link to="/" className={"headerButtons"}>CreateUsers</Link>
            </li>
            <li>
                <Link to="viewusers" className={"headerButtons"}>ViewUsers</Link>
            </li>
            <li>
                <Link to="updateusers" className={"headerButtons"}>UpdateUsers</Link>
            </li>
            <li>
                <Link to="deleteusers" className={"headerButtons"}>DeleteUsers</Link>
            </li>
        </ul>
    )
};

