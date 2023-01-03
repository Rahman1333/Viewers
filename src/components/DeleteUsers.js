import {DeleteUser, ViewAllUser} from "./lib/redux.lib/UsersReducer";
import {useDispatch, useSelector} from "react-redux";

export default function DeleteUsers() {
    const Dispatch = useDispatch();
    const storeReducer = useSelector(State => State.RootReducer.UsersReducer)
    const UsersData = ViewAllUser(storeReducer).payload.entities;
    return (
        <nav className={"componentBox DeleteUser"}>
            <h1 className={'componentTitle'}>Delete User</h1>
            <table>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Del</th>
                </tr>
                </thead>
                <tbody>
                { // Delete User Script
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
                            <td className={"DeleteButton"} onClick={() => {
                                Dispatch(DeleteUser(key))
                            }}>Delete
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </nav>
    );
}