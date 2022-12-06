import React, {useEffect} from "react";

const Alert = ({isAlertOpen , setIsAlertOpen , alertMessage , setAlertMessage , alertType , setAlertType}) => {

    useEffect(()=>{
        setTimeout(()=>{
            setIsAlertOpen(false);
            setAlertMessage("");
            setAlertType("");
        },5000)
    },[isAlertOpen])

    return(
        <div className={(isAlertOpen ? "block" : "hidden") + " text-white px-6 w-80 py-4 border-0 rounded relative mb-4 " + (alertType === "success" ? "bg-green-500 " : alertType === "error" ? "bg-red-500" : "")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-triangle" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 9v2m0 4v.01"/>
                <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"/>
            </svg>
            <span className="inline-block align-middle mr-8">
                {alertMessage}
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-1 mr-3 outline-none focus:outline-none" onClick={()=> setIsAlertOpen(false)}>
                <span>×</span>
            </button>
        </div>
    );
}

export default Alert;
