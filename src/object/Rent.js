import React, {useState} from 'react'
import * as get from "../helper"
import "./Rent.css"

const RentFun = ()=>{

const [rent, setRent] = useState({})
  const [id_rent, setId_rent] = useState()
  const [rent_id_home, setRent_id_home] = useState("")
  const [rent_count, setRent_count] = useState("")
  const [rent_time, setRent_time] = useState("")

  const [rent_renter_id_rent, setRent_renter_id_rent] = useState("")
  const [rent_renter_count, setRent_renter_count] = useState("")

  const [rent_owner_id_rent, setRent_owner_id_rent] = useState("")

  const [rent_cancel_owner, setRent_cancel_owner] = useState("")
  const [rent_cancel_renter, setRent_cancel_renter] = useState("")

  const [rent_out, setRent_out] = useState("")
    return(
        <div>
           


            <h1 align = "center">Аренда</h1>

            
            <div className = "grid-up">
                <div className = "grid1">
                    <h3>Информация об аренде</h3>
                    <input placeholder="ID аренды" value={id_rent} onChange={(e)=>setId_rent(e.target.value)}/><br/><br/>
                    <button className ="button-get" onClick = {()=> get.get_rent(id_rent).then(rent=>setRent(rent))}>Информация об аренде</button>
                    <ul>
                        <li>ID дома: {rent.id_home}</li>
                        <li>Владелец: {rent.owner}</li>
                        <li>Рентер: {rent.renter}</li>
                        <li>Цена: {rent.count}</li>
                        <li>Срок аренды: {rent.time}</li>
                    </ul> 
                </div>                    
                <div className = "grid2">
                     <h3>Создание аренды</h3>
                     <input placeholder="ID дома" value={rent_id_home} onChange={(e)=>setRent_id_home(e.target.value)}/><br/>
                    <input placeholder="Стоимость аренды" value={rent_count} onChange={(e)=>setRent_count(e.target.value)}/><br/>
                    <input placeholder="Срок аренды" value={rent_time} onChange={(e)=>setRent_time(e.target.value)}/><br/>     <br/>                   
                    <button className = "button-send" onClick = {()=> get.create_rent(rent_id_home, rent_count, rent_time)}>Создать аренду</button>
                   </div>
                <div className = "grid3">
                    <h3>Подтверждение ( получатель ) </h3>
                    <input placeholder="ID аренды" value={rent_renter_id_rent} onChange={(e)=>setRent_renter_id_rent(e.target.value)}/><br/>
                    <input placeholder="Перевести:" value={rent_renter_count} onChange={(e)=>setRent_renter_count(e.target.value)}/><br/><br/>
                    <button className = "button-value" onClick = {()=> get.rent_renter(rent_renter_id_rent, rent_renter_count)}>Подтвердить</button>
                </div>
                </div>

                <div className = "grid-down">
                    <div className = "grid4">
                        <h3>Подтверждение ( владелец ) </h3>
                        <input placeholder="ID аренды" value={rent_owner_id_rent} onChange={(e)=>setRent_owner_id_rent(e.target.value)}/><br/><br/>
                        <button className = "button-value" onClick = {()=> get.rent_owner(rent_owner_id_rent)}>Подтвердить</button>
                    </div>
                    
                    <div className = "grid5">
                        <h3>Отменить аренду ( владелец )</h3>
                        <input placeholder="ID аренды" value={rent_cancel_owner} onChange={(e)=>setRent_cancel_owner(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.rent_cancel_owner(rent_cancel_owner)}>Отменить</button>
                    </div>
                    <div className = "grid6">
                        <h3>Отменить аренду ( получатель )</h3>
                        <input placeholder="ID аренды" value={rent_cancel_renter} onChange={(e)=>setRent_cancel_renter(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.rent_cancel_renter(rent_cancel_renter)}>Отменить</button>
                    </div>
                    
                    <div className = "grid7">
                        <h3>Закончить аренду</h3>
                        <input placeholder="ID аренды" value={rent_out} onChange={(e)=>setRent_out(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.rent_out(rent_out)}>Закончить</button>
                    </div>
                
            </div>

        </div>

    );
}

export default RentFun