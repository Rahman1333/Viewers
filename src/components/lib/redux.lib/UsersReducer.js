import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {usersData} from "../rawData";

export const UsersAdapter = createEntityAdapter();
// For CRUD Operations created Entity Adapter

const UsersCreateSlice = createSlice({
    name: 'UsersSlice',
    initialState: UsersAdapter.getInitialState(usersData),
    reducers: {
        AddUser: UsersAdapter.addOne,
        ViewAllUser: UsersAdapter.getSelectors,
        UpdateUser: UsersAdapter.updateOne,
        DeleteUser: UsersAdapter.removeOne
    }
})
// reducers and actions

export const {ViewAllUser, UpdateUser, AddUser, DeleteUser} = UsersCreateSlice.actions;
const UsersReducer = UsersCreateSlice.reducer
export default UsersReducer;