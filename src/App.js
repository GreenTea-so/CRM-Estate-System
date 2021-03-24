import React, {useState} from 'react'
import "./index.css"
import * as get from "./helper"
import RentFun from "./object/Rent"
import EstateFun from "./object/Estate"
import GiveFun from "./object/Give"
import DepositFun from "./object/Deposit"
import AdminFun from "./object/admin"
import UserFun from "./users"

const App=() =>{

  const [openModal, setOpenModal] = useState(false)

  const [user, setUser] = useState({})

  const [auth, setAuth] = useState("")

  const[name, setName] = useState("")
  const[reg_login, setReg_login] = useState("")
  const[reg_password, setReg_password] = useState("")

  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  
  const[UsersBut, setUsersBut] = useState(false)
  const[AdminBut, setAdminBut] = useState(false)
  const[EstateBut, setEstateBut] = useState(false)
  const[GiveBut, setGiveBut] = useState(false)
  const[RentBut, setRentBut] = useState(false)
  const[DepositBut, setDepositBut] = useState(false)


  return (
    <div className = "app-wrapper">
      <header className = "header">
        <table >
          <tr>
            <td></td>
            
            
            <td><input className = "address" height ="300px" placeholder="логин" value={address} onChange={(e)=>setAddress(e.target.value)}/></td>
            <td><input type ="password" className = "pass" placeholder="пароль" value={password} onChange={(e)=>setPassword(e.target.value)}/></td>
            <td width = "400px"><button className = "button-3" onClick = {()=> {get.autorization(address, password).then(user=>setUser(user))
            
            setAddress("")
            setPassword("")}}><span>Авторизоваться</span></button></td>
            <td width = "750px">Вы зашли под аккаунтом: {user.adres}</td>
            <td><div><button className = "button-3" height = "200px" onClick = {()=> setOpenModal(prev => !prev)}>Регистрация</button>
            {openModal && <div  className = "box" id ="box">
              
              <input className = "reg" placeholder="Логин" value={reg_login} onChange={(e)=>setReg_login(e.target.value)}/>
              <input type = "password" className = "reg" placeholder="Пароль" value={reg_password} onChange={(e)=>setReg_password(e.target.value)}/><br /><br />
              <button className = "button-send" height = "200px" onClick = {()=> {get.registr_user(name, reg_login, reg_password)}}>Зарегистрироваться</button>
            </div>}</div></td>
        
          </tr>
        </table>
      </header>
      <nav className = "nav">
        
      {user.adm && <button className = "button-2" onClick = {()=> {setGiveBut(false)
        setRentBut(false)
        setDepositBut(false)
        setEstateBut(false)
        setUsersBut(false)
        setAdminBut(true)}}><span>Админ панель</span></button>}

      <button className = "button-2" onClick = {()=> {setGiveBut(false)
        setRentBut(false)
        setDepositBut(false)
        setAdminBut(false)
        setEstateBut(false)
        setUsersBut(true)}} ><span>Личный кабинет</span></button>

      <button className = "button-2" onClick = {()=> {setGiveBut(false)
        setRentBut(false)
        setDepositBut(false)
        setAdminBut(false)
        setUsersBut(false)
        setEstateBut(true)}}><span>Имущество</span></button>

      <button className = "button-2" onClick = {()=> {setEstateBut(false)
        setRentBut(false)
        setDepositBut(false)
        setAdminBut(false)
        setUsersBut(false)
        setGiveBut(true)}}><span>Дарение</span></button>

      <button className = "button-2" onClick = {()=> {setEstateBut(false)
        setRentBut(true)
        setDepositBut(false)
        setAdminBut(false)
        setGiveBut(false)}}><span>Аренда</span></button>
          
          <button className = "button-2" onClick = {()=> {setEstateBut(false)
        setRentBut(false)
        setDepositBut(true)
        setAdminBut(false)
        setUsersBut(false)
        setGiveBut(false)}}><span>Залог</span></button>

      </nav>

      <div className = "content">

      {AdminBut && <AdminFun />}
      {UsersBut && <UserFun />}
      {EstateBut && <EstateFun />}
      {GiveBut && <GiveFun />}
      {RentBut && <RentFun />}
      {DepositBut && <DepositFun />}

    </div> 

    </div> 
  );
}


export default App;
