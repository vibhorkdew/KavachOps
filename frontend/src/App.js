import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Containers from "./pages/Containers";
import Vulnerabilities from "./pages/Vulnerabilities";
import Monitoring from "./pages/Monitoring";
import AIAssistant from "./pages/AIAssistant";
import Threats from "./pages/Threats";
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
if (page === "vulnerabilities") {
    return (
        <Vulnerabilities
            setPage={setPage}
        />
    );
}
if (page === "monitoring") {
    return (
        <Monitoring
            setPage={setPage}
        />
    );
}
if (page === "ai") {
    return (
        <AIAssistant
            setPage={setPage}
        />
    );
}
if (page === "threats") {
    return (
        <Threats
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
