import React, { useState, useEffect } from 'react';
const DataList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((result) => setUserList(result))
            .catch((error) => console.log(error));

    }, []);
    return(  
        <div>  
    <table>
            <tr>
                <th> name</th>
                <th> email</th>
                <th> address</th>
                <th> type</th>
                <th> phone</th>
            </tr>
            {
               ( userList && (userList.length > 0)) ?
                    userList.map(user =>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
                    :'loading'
        }
        </table>
        </div>
)}
export default DataList