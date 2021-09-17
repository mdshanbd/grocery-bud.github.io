import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from './Context';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [allUser, setAllUser] = useContext(MainContext);
    return (
        <div>
            <Link to="/create">
                <br />
                <button> Create User</button>
            </Link>
            <table border="2">
                <br />
                <thead >
                    <tr>
                        <th>&nbsp;&nbsp;ID&nbsp;&nbsp;</th>
                        <th>&nbsp;&nbsp;Name&nbsp;&nbsp;</th>
                        <th>&nbsp;&nbsp;Email&nbsp;&nbsp;</th>
                        <th>&nbsp;&nbsp;Action&nbsp;&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((user) => (
                            <tr>
                                <td>&nbsp;&nbsp;{user.id}&nbsp;&nbsp;</td>
                                <td>&nbsp;&nbsp;{user.name}&nbsp;&nbsp;</td>
                                <td>&nbsp;&nbsp;{user.email}&nbsp;&nbsp;</td>
                                <td>
                                    <Link to={"/read/" + user.id}><button>Read</button></Link>
                                    <Link to={"/update/" + user.id}><button>Update</button></Link>
                                    <Link to={"/delete/" + user.id}><button>Delete</button></Link>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;
