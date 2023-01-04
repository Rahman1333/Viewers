import {AddUser, UpdateUser, ViewAllUser} from "./lib/redux.lib/UsersReducer";
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import * as React from "react";

export default function UpdateUsers() {
    const Dispatch = useDispatch();
    const storeReducer = useSelector(State => State.RootReducer.UsersReducer)
    const UsersData = ViewAllUser(storeReducer).payload.entities;
    const updateFormRef = useRef(null);
    const [UpdateSuccessMessage, UpdateSuccessMessageSet] = useState(null)

    function UpdateSuccessMessageFunction() {
        UpdateSuccessMessageSet("User Updated Successfully")
        setTimeout(() => {
            UpdateSuccessMessageSet(null)
        }, 3000);
    }

    return (
        <nav className={"componentBox updateUser"}>
            <h1 className={'componentTitle'}>Update User</h1>
            <form ref={updateFormRef} onSubmit={e => e.preventDefault()}>
                <table>
                    <thead>
                    <tr>
                        <th>FName</th>
                        <th>LName</th>
                        <th>Email ID</th>
                        <th>Mobile No</th>
                        <th>AddressOne</th>
                        <th>AddressTwo</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>ZCode</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(UsersData).map(key =>
                            <tr key={key} className={"UpdateUsersTable"}>
                                <td className={"firstName"}><textarea className={"updateInput"} name={"FirstName"}
                                                                      defaultValue={UsersData[key].firstName}/></td>
                                <td className={"lastName"}><textarea className={"updateInput"} name={"LastName"}
                                                                     defaultValue={UsersData[key].lastName}/></td>
                                <td className={"EmailId"}><textarea className={"updateInput"} name={"EmailId"}
                                                                    defaultValue={UsersData[key].emailId}/></td>
                                <td className={"MobileNo"}><textarea className={"updateInput"} name={"MobileNo"}
                                                                     defaultValue={UsersData[key].mobileNo}/></td>
                                <td className={"AddressOne"}><textarea className={"updateInput"} name={"AddressOne"}
                                                                       defaultValue={UsersData[key].addressOne}/></td>
                                <td className={"AddressTwo"}><textarea className={"updateInput"} name={"AddressTwo"}
                                                                       defaultValue={UsersData[key].addressTwo}/></td>
                                <td className={"City"}><textarea className={"updateInput"} name={"City"}
                                                                 defaultValue={UsersData[key].city}/></td>
                                <td className={"State"}><textarea className={"updateInput"} name={"State"}
                                                                  defaultValue={UsersData[key].state}/></td>
                                <td className={"Country"}><textarea className={"updateInput"} name={"Country"}
                                                                    defaultValue={UsersData[key].country}/></td>
                                <td className={"ZipCode"}><textarea className={"updateInput"} name={"ZipCode"}
                                                                    defaultValue={UsersData[key].zipCode}/></td>
                                <td className={"UpdateButton"} onClick={() => {
                                    Dispatch(UpdateUser({
                                        id: key, changes: {
                                            firstName: updateFormRef.current["FirstName"][key - 1].value,
                                            lastName: updateFormRef.current["LastName"][key - 1].value,
                                            emailId: updateFormRef.current["EmailId"][key - 1].value,
                                            mobileNo: updateFormRef.current["MobileNo"][key - 1].value,
                                            addressOne: updateFormRef.current["AddressOne"][key - 1].value,
                                            addressTwo: updateFormRef.current["AddressTwo"][key - 1].value,
                                            city: updateFormRef.current["City"][key - 1].value,
                                            state: updateFormRef.current["State"][key - 1].value,
                                            country: updateFormRef.current["Country"][key - 1].value,
                                            zipCode: updateFormRef.current["ZipCode"][key - 1].value,
                                        }
                                    }))
                                    UpdateSuccessMessageFunction()
                                }}>Update
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </form>
            <br/>
            <h1>{UpdateSuccessMessage}</h1>
        </nav>
    );
}