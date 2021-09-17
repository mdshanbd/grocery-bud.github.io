import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainContext } from './Context';

const Read = () => {

    // eslint-disable-next-line no-unused-vars
    const [allUser, setAllUser] = useContext(MainContext);
    const { id } = useParams();
    // eslint-disable-next-line eqeqeq
    const user = allUser.filter((user) => user.id == id);
    return (
        <div>
            <h3>ID : {user[0].id}</h3>
            <h3>Name : {user[0].name}</h3>
            <h3>Email : {user[0].email}</h3>
            <Link to="/"><button>Go To Home Page</button></Link>
        </div>
    );
}
export default Read;
