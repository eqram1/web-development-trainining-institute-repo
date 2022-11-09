import React from 'react';

const Logout = () => {
    const handlelogout = event => {
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Logout</h1>
                    <p className="py-6">Please log out.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlelogout} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">user info</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service info</span>
                            </label>
                            <input type="text" placeholder="Service Id" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Logout</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Logout;