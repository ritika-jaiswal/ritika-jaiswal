import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Alert from './Alert/alert';
import Portfolio from './component/Portfolio';

function App() {
  const [isAlertOpen , setIsAlertOpen] = useState(true);
  const [alertMessage , setAlertMessage] = useState("");
  const [alertType , setAlertType] = useState("");
  return (
    <>
   <Portfolio  setAlertMessage={setAlertMessage} setAlertType={setAlertType} setIsAlertOpen={setIsAlertOpen}/>
   <div className={"fixed bottom-4 right-8"}>
   <Alert setAlertMessage={setAlertMessage} setAlertType={setAlertType} alertType={alertType} alertMessage={alertMessage} isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen}/>
 </div>
 </>
  );
}

export default App;
