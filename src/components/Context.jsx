import React, { useState, createContext } from "react";
export const MainContext = createContext();

export const MainProvider = (props) => {

    const [users, setUsers] = useState([
        { id: 1, name: "jishan", email: "jishan@gmail.com" },
        { id: 2, name: "Hamza", email: "hamza@gmail.com" },
        { id: 3, name: "sultana", email: "sultana@gmail.com" },
    ]);
    return (
        <MainContext.Provider value={[users, setUsers]}>
            {props.children}
        </MainContext.Provider>
    );
};

