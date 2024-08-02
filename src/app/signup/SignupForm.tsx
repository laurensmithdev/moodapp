// src/app/signup/SignupForm.tsx
import React from "react";
import './signup.css'

const SignupForm: React.FC = () => {
    return (
        <div className='form'>
            <div className='title'>Welcome</div>
            <div className='subtitle'>Let's create your account!</div>
            <div className='input-container ic1'>
                <input id='name' className='name-input' type='text' placeholder='Name' required/>
                {/* <div className='cut'></div> */}
                {/* <label htmlFor='name' className='placeholder'>Name</label> */}
            </div>
            <div className='input-container ic2'>
                <input id='password' className='password-input' type='text' placeholder='Password' required/>
                {/* <div className='cut'></div> */}
                {/* <label htmlFor='password' className='placeholder'>Password</label> */}
            </div>
            <div className='input-container ic3'>
                <input id='email' className='email-input' type='email' placeholder='Email' required/>
                {/* <div className='cut cut-short'></div> */}
                {/* <label htmlFor='email' className='placeholder'>Email</label> */}
            </div>
            <button type='text' class='submit'>Submit</button>
        </div>
        // <form>
        //     <label>
        //         Name:
        //         <input type='name' name='name' required />
        //     </label>
        //     <label>
        //         Email:
        //         <input type='email' name='email' required />
        //     </label>
        //     <label>
        //         Password:
        //         <input type='password' name='password' required />
        //     </label>
        //     <button type='submit'>Signup</button>
        // </form>
    );
};

export default SignupForm;
