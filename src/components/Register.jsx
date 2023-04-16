import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../UserProvider/UserProvider';

const Register = () => {

    const {createUser} = useContext(userContext)
    console.log(createUser)

    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Please Register !</h1>
                <form onSubmit={handleLoginForm} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account please, <span className='text-blue-600 underline'>login</span></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;