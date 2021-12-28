import { useState } from 'react';
import {} from 'firebase/compat/auth';
import {Modal} from '@mui/material';
import {FaArrowRight, FaChalkboardTeacher, FaDesktop, FaUserGraduate, FaTimesCircle} from 'react-icons/fa';

import './css/login.css'; 


const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="flex flex-col gap-28 justify-center items-center w-screen h-screen bg-[#020B0D]">
            <h1 className='flex items-center gap-7 text-5xl text-gray-300'><FaDesktop/>SCHOOL OS</h1>
            <div className='w-full flex justify-center gap-32'>
                <LoginCard callback={()=>{setModalOpen(true)}} title='Teacher' icon={<FaChalkboardTeacher className='text-4xl text-gray-300'/>}></LoginCard>
                <LoginCard title='Student' icon={<FaUserGraduate className='text-4xl text-gray-300'/>}></LoginCard>
            </div>
            
            {/* LOGIN FORM */}
            <Modal open={modalOpen} className='flex justify-center items-center'>
                <div className='flex flex-col gap-2 px-10 pt-7 pb-10 bg-gray-300 outline-none rounded-lg'>
                    <FaTimesCircle onClick={()=>{setModalOpen(false)}} className='self-end text-lg text-gray-800 cursor-pointer'/>
                    <h1 className='text-3xl font-semibold text-gray-800'>Login</h1>
                    <form onSubmit={(e)=>e.preventDefault()} className='w-[24rem] h-96 flex flex-col justify-center gap-44'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor='phone' className='text-gray-500 font-medium text-sm'>
                                    Phone Number
                            </label>
                            <div className='flex items-center border-b border-red-500 focus-within:border-[#028d81] transition-all duration-300'>
                                <h1 className='text-gray-700 text-lg font-semibold '>+91</h1>
                                <input type='number' id='phone' className='text-gray-700 text-lg font-semibold px-1 py-2 w-full outline-none bg-transparent' required autoComplete='off'/>
                            </div>
                        </div>
                        <button type='submit' className='w-full p-3 rounded-full bg-[#028d81] text-white font-semibold'>LOGIN</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

const LoginCard = ({title, callback, icon})=>{
    return(
        <div onClick={callback} className='flex flex-col bg-[#0E1E25] w-[25rem] h-[25rem] cursor-pointer rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-500'>
            <div className='w-full h-4 bg-[#15847B]'></div>
            <div className='pl-10 h-full flex flex-col gap-10 justify-center'>
                <div className='w-fit h-fit p-6 bg-[#028d81] rounded-3xl'>
                    {icon}
                </div>
                <h1 className='text-3xl text-gray-300'>{title}</h1>
                <h1 className='flex items-center gap-2 text-lg text-[#00C7B6] font-bold tracking-widest'>START HERE <FaArrowRight/></h1>
            </div>
        </div>
    )
};

export default Login;