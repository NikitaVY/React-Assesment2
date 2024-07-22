import { createContext } from "react";

const DataContext =createContext(
    {
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });

    export default DataContext;