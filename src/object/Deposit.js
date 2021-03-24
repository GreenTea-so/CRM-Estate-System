import React, {useState} from 'react'
import * as get from "../helper"
import "./Deposit.css"


const DepositFun = ()=>{

  

  const [deposit, setDeposit] = useState({})
  const[get_deposit_id_deposit, setGet_deposit_id_deposit] = useState()

  const[create_deposit_id_home, setCreate_deposit_id_home] = useState("")
  const[create_deposit_count, setCreate_deposit_count] = useState("")
  const[create_deposit_time, setCreate_deposit_time] = useState("")

  const [deposit_renter_id_deposit, setDeposit_renter_id_deposit] = useState("")
  const [deposit_renter_count, setDeposit_renter_count] = useState("")

  const [deposit_owner_id_deposit, setDeposit_owner_id_deposit] = useState("")

  const [deposit_cancel_owner, setDeposit_cancel_owner] = useState("")
  const [deposit_cancel_renter, setDeposit_cancel_renter] = useState("")

  const [deposit_return_owner, setDeposit_return_owner] = useState("")
  const [deposit_return_owner_count, setDeposit_return_owner_count] = useState("")

  const [deposit_return_renter, setDeposit_return_renter] = useState("")
  


    return(
        <div>
            <h1 align = "center">Залог</h1>
                <div className = "grid-deposit-up">
                    <div className = "grid1-deposit">
                    <h3>Информация о залоге</h3>
                        <input placeholder="ID залога" value={get_deposit_id_deposit} onChange={(e)=>setGet_deposit_id_deposit(e.target.value)}/><br/><br/>
                        <button className ="button-get" onClick = {()=> get.get_deposit(get_deposit_id_deposit).then(deposit=>setDeposit(deposit))}>Информация о залоге</button>
                        <ul>
                            <li>ID дома: {deposit.id_home}</li>
                            <li>Владелец: {deposit.owner}</li>
                            <li>Рентер: {deposit.renter}</li>
                            <li>Цена: {deposit.count}</li>
                            <li>Срок аренды: {deposit.time}</li>
                        </ul> 
                    </div>
                    <div className = "grid2-deposit">
                   
                        <h3>Создание залога</h3>
                        <input placeholder="ID дома" value={create_deposit_id_home} onChange={(e)=>setCreate_deposit_id_home(e.target.value)}/><br/>
                        <input placeholder="Стоимость залога" value={create_deposit_count} onChange={(e)=>setCreate_deposit_count(e.target.value)}/><br/>
                        <input placeholder="Срок залога" value={create_deposit_time} onChange={(e)=>setCreate_deposit_time(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.create_deposit(create_deposit_id_home, create_deposit_count, create_deposit_time)}>Создать залог</button>
                    </div>
                </div>


                <div className = "grid-deposit-down">
                    <div className = "grid3-deposit">
                        <h3>Подтверждение ( получатель ) </h3>
                        <input placeholder="ID залога" value={deposit_renter_id_deposit} onChange={(e)=>setDeposit_renter_id_deposit(e.target.value)}/><br/>
                        <input placeholder="Перевести:" value={deposit_renter_count} onChange={(e)=>setDeposit_renter_count(e.target.value)}/><br/><br/>
                        <button className = "button-value" onClick = {()=> get.deposit_renter(deposit_renter_id_deposit, deposit_renter_count)}>Подтвердить</button>
                    </div>
                    <div className = "grid4-deposit">
                        <h3>Подтверждение ( владелец ) </h3>
                        <input placeholder="ID залога" value={deposit_owner_id_deposit} onChange={(e)=>setDeposit_owner_id_deposit(e.target.value)}/><br/><br/>
                        <button className = "button-value" onClick = {()=> get.deposit_owner(deposit_owner_id_deposit)}>Подтвердить</button>
                    </div>
                    <div className = "grid5-deposit">
                        <h3>Отменить залог ( владелец )</h3>
                        <input placeholder="ID залога" value={deposit_cancel_owner} onChange={(e)=>setDeposit_cancel_owner(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.deposit_cancel_owner(deposit_cancel_owner)}>Отменить</button>
                    </div>
                    <div className = "grid6-deposit">
                        <h3>Отменить залог ( получатель )</h3>
                        <input placeholder="ID залога" value={deposit_cancel_renter} onChange={(e)=>setDeposit_cancel_renter(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.deposit_cancel_renter(deposit_cancel_renter)}>Отменить</button>
                    </div>
                    <div className = "grid7-deposit">
                        <h3>Закончить залог ( владелец )</h3>
                        <input placeholder="ID залога" value={deposit_return_owner} onChange={(e)=>setDeposit_return_owner(e.target.value)}/><br/>
                        <input placeholder="Перевести:" value={deposit_return_owner_count} onChange={(e)=>setDeposit_return_owner_count(e.target.value)}/><br/><br/>
                        <button  className = "button-value" onClick = {()=> get.deposit_return_owner(deposit_return_owner, deposit_return_owner_count)}>Закончить</button>
                    </div>
                    <div className = "grid8-deposit">
                        <h3>Закончить залог ( залогодатель )</h3>
                        <input placeholder="ID залога" value={deposit_return_renter} onChange={(e)=>setDeposit_return_renter(e.target.value)}/><br/><br/>
                        <button className = "button-send" onClick = {()=> get.deposit_return_renter(deposit_return_renter)}>Закончить</button>
                    </div>
                </div>
            </div>
        
            

    );
}

export default DepositFun