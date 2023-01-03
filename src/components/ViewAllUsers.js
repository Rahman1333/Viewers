import {ViewAllUser} from "./lib/redux.lib/UsersReducer";
import {useSelector} from "react-redux";

export default function ViewAllUsers() {
    const storeReducer = useSelector(State => State.RootReducer.UsersReducer)
    const UsersData = ViewAllUser(storeReducer).payload.entities;
    return (
        <nav className={"componentBox ViewAllUsers"}>
            <h1 className={'componentTitle'}>Users List</h1>
            <table>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                { // ViewAllUser Script
                    Object.keys(UsersData).map(key =>
                        <tr key={key}>
                            <td>{`${UsersData[key].firstName} 
                            ${UsersData[key].lastName}`}</td>
                            <td>{UsersData[key].emailId}</td>
                            <td>{UsersData[key].mobileNo}</td>
                            <td>{`${UsersData[key].addressOne}
                             ${UsersData[key].addressTwo},
                             ${UsersData[key].city},
                             ${UsersData[key].state},
                             ${UsersData[key].country},
                             PinCode: ${UsersData[key].zipCode}`}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </nav>
    );
}