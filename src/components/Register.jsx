import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const { creatUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const accepted =form.get('terms')
        const password = form.get('password');
        console.log(name, email, password,accepted);

// reset error and success
        setRegisterError('');
        setSuccess('');


if(password.length < 6){
    setRegisterError('Password should be at least 6 characters');
    return;
}
else if (!/[A-Z]/.test(password)){
    setRegisterError('Your password should have at least one upper casecharacter');
    return;
}
else if (!/[!@#$%^&*]/.test(password)){
    setRegisterError('Your password should have at least one spacial casecharacter')
}
else if (!accepted){
    setRegisterError('Please accept our terms and condition');
    return;
}


       

        creatUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center pt-8">Please Register</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-2" htmlFor="terms">Accept our<a href="">Terms and Conditon</a></label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p>{success}</p>
                        }
                        <p className="p-3">Already have an account <Link className="text-blue-500 font-bold" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;