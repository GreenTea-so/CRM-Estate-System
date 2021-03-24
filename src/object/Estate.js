import React, {useState} from 'react'
import * as get from "../helper"
import "./form.css"

const EstateFun = ()=>{

    const [value, setValue] = useState()
    const [home, setHome] = useState({})
  

    return(
        <div>
            <h1 align = "center">Имущество</h1>
            
                <div className = "grid-estate" align = "center">
                    <h3>Информация о доме</h3> 
                
                    <input className = "input-get" placeholder="ID Дома" value={value} onChange={(e)=>setValue(e.target.value)}/><br/>
                    <button className = "button-get" onClick = {()=> {get.get_home(value).then(home=>setHome(home))}}>Получить информацию о доме</button>
                    <ul>
                        <li>Владелец: {home.owner}</li>
                        <li>Тип дома: {home.types}</li>
                        <li>Заложен ли объект: {home.zalog ? "Да": home.zalog===undefined ? "": 'NO'}</li>
                        {home.zalog && <li>Адрес renter: {home.renter}</li>}
                        <li>Площадь дома: {home.S}</li>
                    </ul>
                </div>
            
        </div>

    );
}

export default EstateFun