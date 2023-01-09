import {useState} from 'react';
import {useForm} from "react-hook-form";
import * as React from "react";
import {cscData} from "./lib/rawData";
import {useDispatch} from "react-redux";
import {AddUser} from "./lib/redux.lib/UsersReducer";
import ReduxStore from "./lib/redux.lib/ReduxStore";

export default function CreateUser() {
    const CityCountryState = cscData; // country state city loaded
    const [successMessage, successMessageSet] = useState(null)
    const Dispatch = useDispatch();
    const [idState, idStateSet] = useState(Number(ReduxStore.getState().RootReducer.UsersReducer.ids.length + 1));
    const {register, handleSubmit, formState: {errors}} = useForm(); // useForm module used for CreateUser
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const availableState = CityCountryState.countries.find((c) => c.name === selectedCountry);
    const availableCities = availableState?.states?.find(
        (s) => s.name === selectedState
    );
    const onSubmit = data => { // onSubmit Sending a data to redux store via Dispatch method and then successful message through timeout
        idStateSet(idState + 1);
        Dispatch(AddUser(data))
        successMessageSet("User Added Successfully")
        setTimeout(() => {
            successMessageSet(null)
        }, 3000);
    }

    return (
        <nav className={"componentBox createUser"}>
            <h1 className={'componentTitle CreateUserTitle'}>Create User Form</h1>
            <form className={"createUserFormBox"} name={"FormBox"} onSubmit={handleSubmit(onSubmit)}>
                <div className={"createUserFormSmallInput"}>
                    <input type={"hidden"} id={"id"} value={idState} {...register('id')}/>
                    <input id="firstName" className={"createUserFormInput"}
                           placeholder={"First Name"} {...register('firstName', {required: true, minLength: 5})}
                           autoFocus/>
                    <input id="lastName" className={"createUserFormInput"}
                           placeholder={"Last Name"} {...register('lastName', {
                        required: true,
                        minLength: 5
                    })} />
                    <div>
                        {errors.firstName && errors.firstName.type === "required" &&
                            <span className={"formErrorMessage"}>Required First Name</span>}
                        {errors.firstName && errors.firstName.type === "minLength" &&
                            <span className={"formErrorMessage"}>Min Length 5 Char</span>}
                    </div>
                    <div>
                        {errors.lastName && errors.lastName.type === "required" &&
                            <span className={"formErrorMessage"}>Required Last Name</span>}
                        {errors.lastName && errors.lastName.type === "minLength" &&
                            <span className={"formErrorMessage"}>Min Length 5 Char</span>}
                    </div>
                </div>
                <div className={"createUserFormSmallInput"}>
                    <input id="emailId" className={"createUserFormInput"}
                           placeholder={"Email ID"} {...register('emailId', {
                        required: true,
                        pattern: /^\S+@\S+$/i
                    })}/>
                    <input type={"number"} id="mobileNo" className={"createUserFormInput"}
                           placeholder={"Mobile No"} {...register('mobileNo', {
                        required: true,
                        minLength: 10,
                        maxLength: 10
                    })} />
                    <div>
                        {errors.emailId && errors.emailId.type === "required" &&
                            <span className={"formErrorMessage"}>Required EmailID</span>}
                        {errors.emailId && errors.emailId.type === "pattern" &&
                            <span className={"formErrorMessage"}>Type Valid Email ID</span>}
                    </div>
                    <div>
                        {errors.mobileNo && errors.mobileNo.type === "required" &&
                            <span className={"formErrorMessage"}>Required Last Name</span>}
                        {errors.mobileNo && errors.mobileNo.type === "minLength" &&
                            <span className={"formErrorMessage"}>Invalid Mobile No.(Must Be 10 Digits)</span>}
                        {errors.mobileNo && errors.mobileNo.type === "maxLength" &&
                            <span className={"formErrorMessage"}>Invalid Mobile No.(Must Be 10 Digits)</span>}
                    </div>
                </div>
                <div className={"createUserFormSmallInput"}>
                    <input id="addressOne" className={"createUserFormInput"}
                           placeholder={"Address 1"} {...register('addressOne', {
                        required: true
                    })}/>
                    <input id="addressTwo" className={"createUserFormInput"}
                           placeholder={"Address 2"} {...register('addressTwo')} />
                    <div>
                        {errors.addressOne && errors.addressOne.type === "required" &&
                            <span className={"formErrorMessage"}>Required Address 1</span>}
                    </div>
                </div>
                <div className={"createUserFormSmallInput"}>
                    <select id={"country"}
                            className={"createUserFormInputSelect"} {...register("country", {required: true})}
                            value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                        <option>Country</option>
                        {CityCountryState.countries.map((value, key) => {
                            return (
                                <option value={value.name} key={key}>
                                    {value.name}
                                </option>
                            );
                        })}
                    </select>
                    <select id={"state"}
                            className={"createUserFormInputSelect"} {...register("state", {required: true})}
                            value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                        <option>State</option>
                        {availableState?.states.map((e, key) => {
                            return (<option value={e.name} key={key}>{e.name}</option>)
                        })}
                    </select>
                    <div>
                        {errors.country && errors.country.type === "required" &&
                            <span className={"formErrorMessage"}>Required Country</span>}
                        {errors.state && errors.state.type === "required" &&
                            <span className={"formErrorMessage"}>Required State</span>}
                    </div>
                </div>
                <div className={"createUserFormSmallInput"}>
                    <select id={"city"} className={"createUserFormInputSelect"} {...register("city", {required: true})}
                            value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        <option>City</option>
                        {availableCities?.cities.map((e, key) => {
                            return (<option value={e.name} key={key}>{e}</option>)
                        })}
                    </select>
                    <input type={"number"} id="zipCode" className={"createUserFormInput"}
                           placeholder={"ZipCode"} {...register('zipCode', {
                        required: true, minLength: 6, maxLength: 6
                    })} />
                    <div>
                        {errors.city && errors.city.type === "required" &&
                            <span className={"formErrorMessage"}>Required City</span>}
                    </div>
                    <div>
                        {errors.zipCode && errors.zipCode.type === "required" &&
                            <span className={"formErrorMessage"}>Required ZipCode</span>}
                        {errors.zipCode && errors.zipCode.type === "minLength" &&
                            <span className={"formErrorMessage"}>Must Be 6 Digits</span>}
                        {errors.zipCode && errors.zipCode.type === "maxLength" &&
                            <span className={"formErrorMessage"}>Must Be 6 Digits</span>}
                    </div>
                </div>
                <input type="submit" className={"createUserFormInputSubmitBtn"} value={"Submit User Info"}/>
            </form>
            <h1>{successMessage}</h1>
        </nav>
    );
}
