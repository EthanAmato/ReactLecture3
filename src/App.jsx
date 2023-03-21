import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Parent from "./Components/Parent";
import ReducerExample from "./Components/ReducerExample";
import ToDoList from "./Components/ToDoList";



function App() {

    return (
        // Routes defines a series of urls that your app can follow
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/* Shares route of parent route (path="/") and renders it too */}
                <Route index element = {<Parent/>}/>
                <Route path="/reducer" element={<ReducerExample/>}/>
                <Route path="/todo" element={<ToDoList/>}/>
            </Route>
        </Routes>
    )
}

export default App