import Web3 from "web3";
import { listAbi } from "./Contract/UserList";
const web3 = new Web3("http://127.0.0.1:8545");
const Contract = new web3.eth.Contract(listAbi, "0xeb20fc531c6201CB331B215730fcF72574Ba3A53");

var pass 

const pass_admin = "123"


export const get_user = async () => {
  try{
    const len = await Contract.methods.len_user().call({from: web3.eth.defaultAccount})
    
    const users = []
    for(let i=0; i<len; i++){
      console.log(1)
      let user= await Contract.methods.get_user(i).call({from: web3.eth.defaultAccount})
      //user[1] = 0
      console.log(user[1])
      users.push(user)
    }
    console.log(users)
    return users
  }
  catch(e){
    
    alert(e)
    
  }
};

export const add_admin = async(login)=>{
  try{
    await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
    await Contract.methods.add_admin(login).send({from: web3.eth.defaultAccount})
    alert("Новый администратор с логином:", login)
  }
  catch(e){
    alert(e)
  }
}

export const registr_user = async (name, login, password)=>{
  try{
    
    const accounts = await web3.eth.getAccounts((error,result) => {
      if (error) {
          alert(error);
      } else {
        return result;
      }       
    });
    //alert(accounts)
    
    const admin = await Contract.methods.return_admin().call({from: web3.eth.defaultAccount})
    console.log(admin)

    await web3.eth.personal.unlockAccount(admin, pass_admin)

    const user = await web3.eth.personal.newAccount(password)
    console.log(user)
    await web3.eth.sendTransaction({ from: admin , to: user, value: 10000000000000000000})
    web3.eth.defaultAccount = user
    await web3.eth.personal.unlockAccount(user, password)
    await Contract.methods.registr_user(login).send({from: web3.eth.defaultAccount})
    alert("Вы успешно зарегистрировались")
  }
  catch(e){
    alert(e)
  }
}

export const autorization = async(login, password)=>{
  try{
   
    const person = {     // объект
      adres: "",  // под ключом "name" хранится значение "John"
      adm: false       // под ключом "age" хранится значение 30
    };

    const address = await Contract.methods.autorization_user(login).call({from: web3.eth.defaultAccount})

    await web3.eth.personal.unlockAccount(address, password)
     
    web3.eth.defaultAccount = address
    const admin = await Contract.methods.admin_is().call({from: web3.eth.defaultAccount})
    console.log(admin)
    pass = password
    alert("Вы авторизовлись под адресом: " + address)
    
    
    
      person.adres = address  // под ключом "name" хранится значение "John"
      person.adm = admin       // под ключом "age" хранится значение 30
   

    return person
  }
  catch(e){
    const person = {     // объект
      adres: "",  // под ключом "name" хранится значение "John"
      adm: false       // под ключом "age" хранится значение 30
    };
    alert(e)
    return person
  }
}


export async function registr_home(_owner, _type, _S){
    try {
      //console.log("0x8FA328634ac265Cdb8Ab9106cfc888AfdEB33884")
      await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass).then(console.log)
      await Contract.methods.registr_home(_owner, _type, _S).send({from: web3.eth.defaultAccount})
      alert("Дом зарегистрирован")
      //  await Contract.methods.Pay(efe fie).send({fom: ,value: ,gas:})
   } catch (e) {
     alert(e);
    }
  }


    export const get_home= async(id_home) =>{
     // web3.eth.personal.unlockAccount("0x8FA328634ac265Cdb8Ab9106cfc888AfdEB33884", "123").then(console.log)
      //await Contract.methods.registr_home("0x8FA328634ac265Cdb8Ab9106cfc888AfdEB33884", "Js", 55).send({from: "0x8FA328634ac265Cdb8Ab9106cfc888AfdEB33884"})
      //alert(1)
      try{
        console.log(web3.eth.defaultAccount)
        if (id_home === undefined){
         
          throw "Поле пустое"
        }
        const home = await Contract.methods.get_home(id_home).call({from: web3.eth.defaultAccount})
        return home
      }
      catch(e){
        const home = {
          owner :"",
          types :"" ,          
          zalog: "",
          renter: "",
          S: 0
        }
        alert(e)
        return home
        
      }
    }

     export const get_rent= async(id_rent) =>{
       try{
        console.log(id_rent)
        if (id_rent === undefined){
         
          throw "Поле пустое"
        }
        const h = await Contract.methods.get_rent(id_rent).call({from: web3.eth.defaultAccount})
        return h;
       }
       catch(e){
         const rent = {
           id_home: "",
           owner: "",
           renter: "",
           count: "",
           time: ""
         }
         alert(e)
         return rent
       }
     }

     export const get_give = async(id_give) =>{
      try{

      
        if (id_give === undefined){
          
          throw "Поле пустое"
        }
        const give = await Contract.methods.get_give(id_give).call({from: web3.eth.defaultAccount})
        return give;
      }
      catch(e){
        const give = {
          id_home: "",
          owner: "",
          renter: "",
          time: ""
        }
        alert(e)
        return give
      }
     }

     export const give_renter = async(id_give) =>{
       try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        const give = await Contract.methods.Give_Renter(id_give).send({from: web3.eth.defaultAccount})
        if (give){
          alert("Дом успешно приобретен")
        }
        else{
          alert("Срок дарения истек")
        }
        
       }
       catch(e){
         alert(e)
       }
     }

     export const cancel_owner = async(id_give) =>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        alert(1)
        const give = await Contract.methods.cancel_owner(id_give).send({from: web3.eth.defaultAccount})
        alert("Дарение отменено")
        return give;
      }
      catch(e){
        alert(e)
      }
    }

    export const cancel_renter = async(id_give) =>{
      try{
       await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
       const give = await Contract.methods.cancel_renter(id_give).send({from: web3.eth.defaultAccount})
       alert("Дарение отменено")
       return give;
      }
      catch(e){
        alert(e)
      }
    }

    export const create_give = async(id_home, renter, time)=>{
      try{
       await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
       await Contract.methods.Create_Give(id_home, renter, time).send({from: web3.eth.defaultAccount})
       alert("Дарение успешно создано")
      }
      catch(e){
        alert(e)
      }
    }

    export const create_rent = async(id_home, count, time)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.Create_Rent(id_home, count, time).send({from: web3.eth.defaultAccount})
        alert("Аренда успешно создана")
      }
      catch(e){
        alert(e)
      }
    }

    export const rent_renter = async(id_rent, count)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.rent_renter(id_rent).send({from: web3.eth.defaultAccount, value: count})
        alert("Транзакция произведена")
      }
      catch(e){
        alert(e)
      }
    }

    export const rent_cancel_owner = async(id_rent)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.rent_cancel_owner(id_rent).send({from: web3.eth.defaultAccount})
        alert("Аренда успешно отменена")
      }
      catch(e){
        alert(e)
      }
    }

    export const rent_cancel_renter = async(id_rent)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.rent_cancel_renter(id_rent).send({from: web3.eth.defaultAccount})
        alert("Аренда успешно отменена")
      }
      catch(e){
        alert(e)
      }
    }

    export const rent_owner = async(id_rent)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.rent_owner(id_rent).send({from: web3.eth.defaultAccount})
        alert("Транзакция произведена")
      }
      catch(e){
        alert(e)
      }
    }

    export const rent_out = async(id_rent)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.rent_out(id_rent).send({from: web3.eth.defaultAccount})
        alert("Аренда успешно окончена")
      }
      catch(e){
        alert(e)
      }
    }


    export const get_deposit = async(id_deposit)=>{
      try{
        if (id_deposit === undefined){
         
          throw "Поле пустое"
        }
        const deposit = await Contract.methods.get_deposit(id_deposit).call({from: web3.eth.defaultAccount})
        return deposit
      }
      catch(e){
        const deposit = {
          id_home: "",
          owner: "",
          renter: "",
          count: "",
          time: ""
        }
        alert(e)
        return deposit
      }
    }

    export const create_deposit = async(id_home, count, time)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.Create_Deposit(id_home, count, time).send({from: web3.eth.defaultAccount})
        alert("Залог успешно создан")
      }
      catch(e){
        alert(e)
      }
    }

    export const deposit_renter = async(id_deposit, count)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.deposit_renter(id_deposit).send({from: web3.eth.defaultAccount, value:count})
        alert("Деньги успешно переведены")
      }
      catch(e){
        alert(e)
      }
    }
      export const deposit_owner = async(id_deposit)=>{
        try{
          await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
          await Contract.methods.deposit_owner(id_deposit).send({from: web3.eth.defaultAccount})
          alert("Деньги успешно получены")
        }
        catch(e){
          alert(e)
        }
    }

    export const deposit_cancel_renter = async(id_deposit)=>{
      try{
        await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
        await Contract.methods.deposit_cancel_renter(id_deposit).send({from: web3.eth.defaultAccount})
        alert("Залог успешно отменен")
      }
      catch(e){
        alert(e)
      }
  }

  export const deposit_cancel_owner = async(id_deposit)=>{
    try{
      await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
      await Contract.methods.deposit_cancel_owner(id_deposit).send({from: web3.eth.defaultAccount})
      alert("Залог успешно отменен")
    }
    catch(e){
      alert(e)
    }
}

export const deposit_return_owner = async(id_deposit, count)=>{
  try{
    await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
    await Contract.methods.deposit_return_owner(id_deposit).send({from: web3.eth.defaultAccount, value: count})
    alert("Залог окончен")
  }
  catch(e){
    alert(e)
  }
}


export const deposit_return_renter = async(id_deposit)=>{
  try{
    await web3.eth.personal.unlockAccount(web3.eth.defaultAccount, pass)
    await Contract.methods.deposit_return_renter(id_deposit).send({from: web3.eth.defaultAccount})
    alert("Залог окончен")
  }
  catch(e){
    alert(e)
  }
}

