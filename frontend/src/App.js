import React, { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Containers from "./pages/Containers";

function App() {

    const [authenticated, setAuthenticated] = useState(
        !!localStorage.getItem("token")
    );

    const [page, setPage] = useState("dashboard");

    if (!authenticated) {
        return (
            <Login
                setAuthenticated={setAuthenticated}
            />
        );
    }

    if (page === "containers") {
        return (
            <Containers
                setPage={setPage}
            />
        );
    }

    return (
        <Dashboard
            setPage={setPage}
        />
    );
}

export default App;
