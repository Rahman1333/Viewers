import './App.css?n=1';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux";
import Layout from "./components/lib/Layout";
import CreateUser from "./components/CreateUser";
import ViewAllUsers from "./components/ViewAllUsers";
import DeleteUsers from "./components/DeleteUsers";
import UpdateUsers from "./components/UpdateUsers";
import ReduxStore from "./components/lib/redux.lib/ReduxStore";

export default function App() {
    console.log('App Rendered')
    return (
        <main className="mainApp">
            <Provider store={ReduxStore}>
                {/*Routing Function*/}
                <BrowserRouter>
                    <Layout/> {/* Layout File Loaded for UI and Layout*/}
                    <div className={"componentsContainer"}>
                        <Routes>
                            <Route exact path={'/'} element={<CreateUser/>}/>
                            <Route exact path="viewusers"
                                   element={<ViewAllUsers/>}/>
                            <Route exact path="updateusers"
                                   element={<UpdateUsers/>}/>
                            <Route exact path="deleteusers"
                                   element={<DeleteUsers/>}/>
                            <Route exact path="*"
                                   element={<h1>Error !404 No Page Found</h1>}/> {/* Not Found Page Error */}
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
        </main>
    );
}

