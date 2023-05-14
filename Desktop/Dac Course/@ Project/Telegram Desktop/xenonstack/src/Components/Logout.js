// Logout.js
import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem("token");
        // Redirect to login page or do something else
    };
    return (
        <div>
            <h2>Logout Page</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;