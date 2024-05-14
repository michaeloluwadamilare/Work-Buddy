import { useForm } from "react-hook-form";
import { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const Signup = () => {
    const [error, setError] = useState(null);
    const MySwal = withReactContent(Swal);


    const { register: registerSignup, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (formData) => { 


    }

    return (
        <>
            <form className="signup" onSubmit={handleSubmit(onSubmit)}> 
                <center><h5>Register</h5></center>

                <label>Email</label>
                <input 
                    type="email" 
                    {...registerSignup('email', {required: 'Email is required'})} 
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}


                <label>Password</label>
                <input 
                    type="password" 
                    {...registerSignup('password', {required: 'Password is required'})} 

                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}


                <button>Sign Up</button>
                {error && <div className="error">{error}</div>}

            </form>
        </>
    )
}

export default Signup;