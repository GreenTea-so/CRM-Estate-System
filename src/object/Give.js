import React, {useState} from 'react'
import * as get from "../helper"
import "./Give.css"

const GiveFun = ()=>{

const [id_give, setId_give] = useState()
  const [id_give_renter, setId_give_renter] = useState("")
  const [id_give_cancel_renter, setId_give_cancel_renter] = useState("")
  const [id_give_cancel_owner, setId_give_cancel_owner] = useState("")
  const[give, setGive] = useState({})

  const [give_id_home, setGive_id_home] = useState("")
  const [give_renter, setGive_renter] = useState("")
  const [give_time, setGive_time] = useState("")


    return(
        <div>
           
            <h1 align = "center">Дарение</h1>
           
                <div className = "grid-give-up">
                    <div className = "grid1-give">
                        <h3>Информация о дарении</h3>
                        <input  placeholder="ID дарения" value={id_give} onChange={(e)=>setId_give(e.target.value)}/><br/>
                        <button className ="button-get" onClick = {()=> {get.get_give(id_give).then(give=>setGive(give))}}>Информация о дарении</button>
                        <ul>
                        <li>ID дома: {give.id_home}</li>
                        <li>Владелец: {give.owner}</li>
                        <li>Получатель: {give.renter}</li>
                        <li>Срок дарения: {give.time}</li>
                        </ul>
                    </div>
                    <div className = "grid2-give">
                        <h3>Создание дарения</h3>
                        <input placeholder="ID дома" value={give_id_home} onChange={(e)=>setGive_id_home(e.target.value)}/><br/>
                        <input placeholder="Адрес получателя" value={give_renter} onChange={(e)=>setGive_renter(e.target.value)}/><br/>
                        <input placeholder="Срок дарения" value={give_time} onChange={(e)=>setGive_time(e.target.value)}/><br/>
                        <button className = "button-send" onClick = { ()=> get.create_give(give_id_home, give_renter, give_time)}>Создать дарение</button>
                    </div>
                </div>


                <br/>
                <br/>
                <div className = "grid-give-down">
                    <div className = "grid3-give">
                            <h3>Подтверждение ( получатель) </h3>
                            <input placeholder="ID дарения" value={id_give_renter} onChange={(e)=>setId_give_renter(e.target.value)}/><br/>
                            <button className = "button-send" onClick = {()=> get.give_renter(id_give_renter)}>Подтвердить дарение</button>
                    </div>

                    <div className = "grid4-give">
                            <h3>Отменить дарение ( владелец )</h3>
                            <input placeholder="ID дарения" value={id_give_cancel_owner} onChange={(e)=>setId_give_cancel_owner(e.target.value)}/><br/>
                            <button className = "button-send" onClick = {()=> get.cancel_owner(id_give_cancel_owner)}>Отменить дарение</button>
                    </div>

                    <div className = "grid5-give">
                            <h3>Отменить дарение ( получатель )</h3>
                            <input placeholder="ID дарения" value={id_give_cancel_renter} onChange={(e)=>setId_give_cancel_renter(e.target.value)}/><br/>
                            <button className = "button-send" onClick = {()=> get.cancel_renter(id_give_cancel_renter)}>Отменить дарение</button>
                    </div>

                </div>

           
            
            
        </div>

    );
}

export default GiveFun