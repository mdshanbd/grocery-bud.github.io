/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import { MainContext } from './Context';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';

const Update = () => {



    const { id } = useParams();
    const [allUser, setAllUser] = useContext(MainContext);
    const user = allUser.filter((user) => user.id == id);

    const [name, setName] = useState(user[0].name)
    const [email, setEmail] = useState(user[0].email)

    const editName = (e) => {
        setName(e.target.value)
        const e_name = name;
        user[0].name = e_name;
    }

    const editEmail = (e) => {
        setEmail(e.target.value)
        const e_Email = email;
        user[0].email = e_Email;
    }

    const editUser = (e) => {
        e.preventDefault();
        setAllUser([allUser])
    }

    return (
        <div>
            <form >
                <div className="form-group">
                    <label >Name : </label>
                    <input onChange={editName} type="text" name="name" placeholder={user[0].name} />
                </div><br />
                <div className="form-group">
                    <label >Email  : </label>
                    <input onChange={editEmail} type="text" name="email" placeholder={user[0].email} />
                </div><br />
                <Link to="/"><button onSubmit={() => editUser}>Update User</button></Link>
                <Link to="/"><button>Go To Home Page</button></Link>
            </form>
        </div>
    );
}

export default Update;
