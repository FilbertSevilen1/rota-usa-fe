import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from "react";
function ErrorMessage(){
    useEffect(()=>{
        toast.success('Login Success', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "dark",
            });
    },[])
    return(
        <div>
             <ToastContainer/>
        </div>
    )
}
export default ErrorMessage