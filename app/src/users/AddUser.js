import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        surname: "",
        gender: "",
        birthdate: "",
        workAddress: "",
        homeAddress: ""
    })

    const { name, surname, gender, birthdate, workAddress, homeAddress } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/users", user)
        navigate("/")
    };

    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className='text-center m-4'>Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Name
                            </label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter your name'
                                name="name"
                                value={name}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Surname' className='form-label'>
                                Surname
                            </label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter your surname'
                                name="surname"
                                value={surname}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Gender' className='form-label'>
                                Gender
                            </label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter your Gender'
                                name="gender"
                                value={gender}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Birthdate' className='form-label'>
                                Birthdate
                            </label>
                            <input
                                type={'date'}
                                className='form-control'
                                placeholder='Enter your Birthdate'
                                name="birthdate"
                                value={birthdate}
                                onChange={(e) => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Work_Address' className='form-label'>
                                Work_Address
                            </label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter your Work_Address'
                                name="workAddress"
                                value={workAddress}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Home_Address' className='form-label'>
                                Home_Address
                            </label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter your Home_Address'
                                name="homeAddress"
                                value={homeAddress}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
