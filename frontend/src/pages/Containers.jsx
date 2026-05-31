import React, { useEffect, useState } from "react";

const Containers = ({ setPage }) => {

    const [containers, setContainers] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8000/api/containers")
            .then((res) => res.json())
            .then((data) => setContainers(data))
            .catch((err) => console.error(err));

    }, []);

    return (

        <div
            style={{
                background: "#020617",
                minHeight: "100vh",
                color: "white",
                padding: "30px"
            }}
        >

            <button
                onClick={() => setPage("dashboard")}
                style={{
                    padding: "10px 20px",
                    marginBottom: "20px",
                    cursor: "pointer"
                }}
            >
                ← Back to Dashboard
            </button>

            <h1>
                Running Containers
            </h1>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th style={cellStyle}>
                            ID
                        </th>

                        <th style={cellStyle}>
                            Name
                        </th>

                        <th style={cellStyle}>
                            Image
                        </th>

                        <th style={cellStyle}>
                            Status
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {containers.map((container) => (

                        <tr key={container.id}>

                            <td style={cellStyle}>
                                {container.id}
                            </td>

                            <td style={cellStyle}>
                                {container.name}
                            </td>

                            <td style={cellStyle}>
                                {container.image}
                            </td>

                            <td style={cellStyle}>
                                {container.status}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
};

const cellStyle = {
    border: "1px solid #334155",
    padding: "10px"
};

export default Containers;