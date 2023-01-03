import {UpdateUser, ViewAllUser} from "./lib/redux.lib/UsersReducer";
import {useDispatch, useSelector} from "react-redux";

export default function UpdateUsers() {
    const Dispatch = useDispatch();
    const storeReducer = useSelector(State => State.RootReducer.UsersReducer)
    const UsersData = ViewAllUser(storeReducer).payload.entities;
    return (
        <nav className={"componentBox DeleteUser"}>
            <h1 className={'componentTitle'}>Update User</h1>
            <table>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Email ID</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Update</th>
                </tr>
                </thead>
                <tbody>
                {
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
                                Dispatch(UpdateUsers())
                            }}>Update
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </nav>
    );
}