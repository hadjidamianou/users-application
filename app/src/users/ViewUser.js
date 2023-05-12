import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        surname: "",
        gender: "",
        birthdate: "",
        workAddress: "",
        homeAddress: ""
    })

    const { id } = useParams();

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`)
        setUser(result.data)
    }
    
    return (
        <div>

            <div className="container">
                <div className='row'>
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className='text-center m-4'>Details of the User </h2>

                        <div className='card'>
                            <div className='card-header'>
                                Details of the user id: {user.id}
                                <ul className='list-group list-group-flush'>

                                    <li className='list-group-item'>
                                        <b>Name:</b>
                                        {user.name}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Surname:</b>
                                        {user.surname}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Gender:</b>
                                        {user.gender}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Birthdate:</b>
                                        {user.birthdate}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Work_Address:</b>
                                        {user.workAddress}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Home_Address:</b>
                                        {user.homeAddress}
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
