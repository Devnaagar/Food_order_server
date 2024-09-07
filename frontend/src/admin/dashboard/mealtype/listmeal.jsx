import React, { useEffect, useState } from 'react';
import ToastComponent from '../../login/Toast.jsx';


function meal_list() {
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3115/getusers');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const editUsers = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3115/editusers/${userId}`);
            const data = await response.json();
            setSelectedUser(data);
            setModal(true);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };


    const handleSubmit = async (e, userId) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3115/updateusers/${userId}`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedUser),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                const fetchUsers = async () => {
                    try {
                        const response = await fetch('http://localhost:3115/getusers');
                        const data = await response.json();
                        setUsers(data);
                    } catch (error) {
                        console.error('Error fetching users:', error);
                    }
                };
                fetchUsers();
                setToastMessage('User updated successfully!');
                setToastVisible(true);
                setModal(false);
            } else {
                setToastMessage(data.message || 'Failed to update user');
                setToastVisible(true);
            }
        } catch (error) {
            console.error('Error adding user:', error);
            setToastMessage('An error occurred. Please try again.');
            setToastVisible(true);
        }
    };

    const deleteUsers = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3115/deleteusers/${userId}`, {
                method: 'POST',
            });
            
            if (response.ok) {
                const fetchUsers = async () => {
                    try {
                        const response = await fetch('http://localhost:3115/getusers');
                        const data = await response.json();
                        setUsers(data);
                    } catch (error) {
                        console.error('Error fetching users:', error);
                    }
                };
                fetchUsers();
    
                setToastMessage('User deleted successfully!');
                setToastVisible(true);
            } else {
                const data = await response.json();
                setToastMessage(data.message || 'Failed to delete user');
                setToastVisible(true);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            setToastMessage('An error occurred. Please try again.');
            setToastVisible(true);
        }
    };
    
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row my-4">
                                <h2>Users list</h2>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr className='text-center'>
                                                    <th scope="col">S.No.</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone No.</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='table-group-divider'>
                                                {users.map((user, index) => (
                                                    <tr key={user._id} className='text-center'>
                                                        <th scope="row">{index + 1}</th>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.phone}</td>
                                                        <td>{user.status ? 'Active' : 'Inactive'}</td>
                                                        <td className='d-flex justify-content-evenly'>
                                                            <button className="btn btn-warning btn-sm" onClick={() => editUsers(user._id)}>Edit</button>
                                                            <button className="btn btn-danger btn-sm ml-2" onClick={()=> deleteUsers(user._id)}>Delete</button>
                                                            
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {modal && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button type="button" className="btn-close" onClick={() => setModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                {selectedUser ? (
                                    <div>
                                        <form onSubmit={(e) => handleSubmit(e, selectedUser._id)}>
                                        <div className="row">
                                        <div className="form-group col-lg-6">
                                            <label className="form-label" htmlFor="name"><b>Name :</b></label>
                                            <input type="text" id="name" name="name" className="form-control col-lg-6" value={selectedUser.name} onChange={handleChange} required/>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label className="form-label" htmlFor="phone"><b>Phone  :</b></label>
                                            <input type="text" id="phone" name="phone" className="form-control col-lg-6" value={selectedUser.phone} onChange={handleChange} required/>
                                        </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="form-group col-lg-12">
                                                <label className="form-label" htmlFor="email"><b>Email :</b></label>
                                                <input type="email" id="email" name="email" className="form-control col-lg-6" value={selectedUser.email} onChange={handleChange} required/>
                                            </div>
                                            <p className='text-danger mt-2'>*Password cannot change</p>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button className="btn btn-primary col-lg-2 p-2" type='submit'><b>Update</b></button>
                                        </div>
                                    </form>
                                    </div>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ToastComponent show={toastVisible} message={toastMessage} onClose={() => setToastVisible(false)} />
        </>
    );
}

export default meal_list;
