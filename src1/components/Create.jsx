import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from './Context';


const Create = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [allUser, setAllUser] = useContext(MainContext);
    const UpId = (e) => {
        setId(e.target.value)
    }
    const UpName = (e) => {
        setName(e.target.value)
    }
    const UpEmail = (e) => {
        setEmail(e.target.value)
    }
    const AddUser = (e) => {
        e.preventDefault()
        setAllUser([...allUser, { id: id, name: name, email: email }])
    }

    return (
        <div>
            <form onSubmit={AddUser}>
                <div className="form-group">
                    <label >Id  : </label>
                    <input onChange={UpId} type="text" name="id" value={id} placeholder="Enter id" />
                </div><br />
                <div className="form-group">
                    <label >Name : </label>
                    <input onChange={UpName} type="text" name="name" value={name} placeholder="Enter Name" />
                </div><br />
                <div className="form-group">
                    <label >Email  : </label>
                    <input onChange={UpEmail} type="text" name="email" value={email} placeholder="Enter Email" />
                </div><br />
                <button>Create User</button>
                <Link to="/"><button>Go To Home Page</button></Link>
            </form>
        </div>
    );
}

export default Create;
