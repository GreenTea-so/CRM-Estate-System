import React, {useState} from 'react'
import * as get from "../helper"
import "./admin.css"

const AdminFun = ()=>{

    const [login, setLogin] = useState("")
  
    const [owner, setOwner] = useState("")
    const [types, setTypes] = useState("")
    const [S, setS] = useState("")


    return(
        <div> <h1 align = "center">Админ панель</h1>
        <br />
        
        <div  style={{display:"flex"}}>
                
                <div className = "admin">
                    <h3>Регистрация дома</h3>
                    <input className = "address" placeholder="Адрес владельца" value={owner} onChange={(e)=>setOwner(e.target.value)}/><br/>
                    <input className = "address" placeholder="Тип дома" value={types} onChange={(e)=>setTypes(e.target.value)}/><br/>
                    <input className = "address" placeholder="Площадь" value={S} onChange={(e)=>setS(e.target.value)}/><br/><br/><br/>
                    <button className = "button-1" onClick = {()=> get.registr_home(owner, types, S)}>Зарегистрировать дом</button>
                </div> 

                <div  className = "admin1">
                    <h3>Назначение администратора</h3>
                    <input className = "address" placeholder = "Логин пользователя"  value ={login} onChange={(e)=>setLogin(e.target.value)}/><br />
                    <button className = "button-1" onClick = {()=> get.add_admin(login)}>Назначить администратора</button>
                </div>

            </div>
        </div>
    );
}

export default AdminFun