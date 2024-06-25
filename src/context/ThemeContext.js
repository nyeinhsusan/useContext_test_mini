import { createContext, useContext } from "react";

const context =createContext();

export default context;

// if we created context with createContext , we can call every chile or grandchild 
//need to write .Provider in App.js and need to declare or use with useContext in your component 
//We don't need call with prop just need to use useContext 