import React, { useState } from 'react'
import logo from '../img/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { signUp, signIn, } from '../actions/AuthAction';

const AuthPage = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [showConfirm, setShowConfirm] = useState(false);
    // dispatch
    const dispatch = useDispatch();
    const {loading, authData} = useSelector((state) => state?.authReducer);
    console.log(loading, 'localStorage.getItem')

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        password: '',
        confirmpass: '',
        username: '',
    });

    const handelChange  = (e) => {
        console.log(data?.password, data?.confirmpass);
         setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        if (data?.password == data?.confirmpass) setShowConfirm(false);
        e.preventDefault();
        if (isSignIn) {
            dispatch(signIn(data));
        } else {
            if (data?.password === data?.confirmpass) dispatch(signUp(data)); else setShowConfirm(true);
        }
        console.log(data)
    }
    const resetForm = () => {
        setShowConfirm(true);
        setData({
            firstname: '',
            lastname: '',
            password: '',
            confirmpass: '',
            username: '',
        })
    }
  return (
    <div>
        <div className='container  flex flex-col lg:flex-row items-center justify-center h-[100vh] gap-[4rem] relative'>
            <div className='left flex items-center gap-[2rem] lg:min-w-[30%] min-w-[70%] mx-auto lg:mx-0'>
                <img className='w-[4rem] h-[4rem]' src={logo} />
                <div className='flex flex-col gap-[1rem]'>
                    <h1 className=" font-bold text-[2.5rem] lg:text-[3rem] bg-red-500 gradiant">Social Media</h1>
                    <h6 className='text-[1rem]'>Explore the ideas throughout the world</h6>
                </div>
            </div>
            <div className='lg:min-w-[30%] min-w-[70%] mx-auto lg:mx-0'>
                <form onSubmit={handleSubmit} className='infoForm bg-[#ffffffb0] p-[1rem] rounded-[1rem] flex flex-col justify-center items-center gap-[2rem] w-[100%]'>
                    <h3 className='font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h3>
                    <div className='w-[100%] flex flex-col justify-center items-center gap-[.8rem]'>
                        
                        {!isSignIn && 
                            <div className='flex gap-[.5rem] items-center justify-center'>
                                <input type={'text'} placeholder='First Name' className=' p-[1rem] rounded-md bg-[#e6e6e6] border-none outline-none flex-1'  name='firstname' value={data?.firstname} onChange={(e) => handelChange(e)}/>
                                <input type={'text'} placeholder='Last Name' className=' p-[1rem] rounded-md bg-[#e6e6e6] border-none outline-none flex-1'  name='lastname' value={data?.lastname} onChange={(e) => handelChange(e)}/>
                            </div>
                        }
                        <div className='w-[100%]'>
                            <input type={'text'} placeholder='UserName' className='p-[1rem] rounded-md bg-[#e6e6e6] border-none outline-none flex-1 w-[100%]' name='username' value={data?.username} onChange={(e) => handelChange(e)}/>
                        </div>
                        <div className='flex gap-[.5rem] items-center justify-center w-[100%]'>
                            <input type={'password'} placeholder='Password' className='p-[1rem] rounded-md bg-[#e6e6e6] border-none outline-none flex-1' name='password' value={data?.password} onChange={(e) => handelChange(e)}/>
                            {!isSignIn && <input type={'password'} placeholder='ConfirmPassword' className='p-[1rem] rounded-md bg-[#e6e6e6] border-none outline-none flex-1' value={data?.confirmpass} name='confirmpass' onChange={(e) => handelChange(e)}/>}
                            
                        </div>
                        {showConfirm && !isSignIn && <p className='text-red-500 text-[12px] text-end flex justify-end'>
                            * Confirm password is not same
                        </p>}
                    </div>
                    <div className='flex justify-start w-[100%] '>
                        {isSignIn ? <p>Dont have an account. <span className='font-bold cursor-pointer hover:opacity-[.8] transition-all duration-100' onClick={() => {setIsSignIn(false); resetForm();}}>SignUp</span></p> : <p>Already have an account. <span className='font-bold cursor-pointer hover:opacity-[.8] transition-all duration-100' onClick={() => {setIsSignIn(true); resetForm()}}>SignIn</span></p>}
                    </div>
                    <button type='submit' className='button ml-[80%] h-[2.5rem] w-[8rem]'>{loading ? "loading..." : isSignIn ? "Sign In" : "Sign Up"}</button>
                </form>
                
            </div>
        </div>
    </div>
    
  )
}


export default AuthPage