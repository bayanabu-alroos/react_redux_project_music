import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "./App.css";



const Login = () => {

    const [formErrors, setFormErrors] = useState({});
    let navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
        role:"",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/ApiReduxPro8/login.php', data)

            .then((result) => {
                // console.log(result.data);
                // console.log(result.data[0].role)

                if (result.data.length == 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data[0].role === 'user') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    navigate('/');


                } else if (result.data.length !== 0 && result.data[0].role === 'admin') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('id', result.data[0].id);
                    sessionStorage.setItem('role', result.data[0].role);


                    navigate('/');

 
                } else {
                    navigate('/Signup');
                }
            })




    }




    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }

        const pregex = /^[0-9]*$/;


        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }
        return errors;
    };







    return (



        <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo mt-5">
        <div className="wrapper wrapper--w680">
            <div className="card card-1">
                <div className="card-heading" />
                <div className="card-body">
                    <h2 className="title">Login  Info</h2>
                    <form onSubmit={submitForm}  >


                        <div className="input-group">
                            <input className="input--style-1  @error('email') is-invalid @enderror"placeholder="email"
                             name="email" 
                            onChange={handleChange}
                            value={data.email} />
                        <p className="errors">{formErrors.email}</p>

                        </div>
                        <div className="input-group">
                            <input className="input--style-1 @error('pass') is-invalid @enderror" type="password" placeholder="password "
                            name="password" 
                            onChange={handleChange}
                            value={data.password}
                        />
                        <p className="errors">{formErrors.password}</p>

                        </div>
                        
                        
                        <div className="p-t-20">
                            <button className="btn btn-primary btn-block mb-4" type="submit">Login</button>
                            <div class="text-center"><p>Not a member? <Link to="/regester">Register</Link></p></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>






    
       
    )
}
export default Login