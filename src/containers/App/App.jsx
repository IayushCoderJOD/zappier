import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Router from "./Router";
// import store from "./store";
import ToastComponent from "./ToastComponent.jsx";


const App = () => {
    return (
        // <Provider store={store}>
        <>
            <ToastComponent />
            <Router />
        </>
        // </Provider>
    );
};

export default App;
