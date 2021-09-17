import React, { useContext } from 'react';
import { MainContext } from './Context';
import { Link, useParams } from 'react-router-dom';

const Delete = () => {


    const [allUser, setAllUser] = useContext(MainContext);
    const { id } = useParams();
    const delUser = (id) => {
        // eslint-disable-next-line eqeqeq
        const user = allUser.filter((user) => user.id != id)
        setAllUser([...user])
    }



    return (
        <div>
            <h3>Are You Sure?</h3>
            <Link to="/">
                <button>Cancel</button>
                <button onClick={() => delUser(id)}>Delete</button>
            </Link>

        </div>
    );
}

export default Delete;
