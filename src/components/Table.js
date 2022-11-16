import { useState } from 'react'
import Add from './Popup';


const Table =()=>{
  const [inputarr,setInputarr] =useState([])
 const [inputdata, SetInputdata] = useState({name: "", phone: "",addres: ""})
 let[ Index ,setIndex ]=useState([])
 const[bolin,setBolin]=useState(false)

 function changehandle(e) {

    SetInputdata({
        ...inputdata,
        [e.target.name]: e.target.value
    })

 }

 let {name, phone,addres} = inputdata;
 function changhandle() {
    setInputarr([
        ...inputarr, {
            name,
            phone,
            addres
        }
    ])//popup instead
    

    SetInputdata({name: "", phone: "",addres: ""})

 }
 let delethandle =(i)=>{
    let newdataArr=[...inputarr]
    newdataArr.splice(i,1)
    setInputarr(newdataArr)
 }
 let updatehandle =(i)=>{
    let {name,phone,addres} = inputarr[i]
    SetInputdata({name,phone,addres})
     setBolin(true)
     setIndex(i)
 }

 let Updateinfo =(i)=>{
    let newdataArr=[...inputarr]
    newdataArr.splice(Index,1,{name,phone,addres})
    setBolin(false)
    setInputarr(newdataArr)
    SetInputdata({name: "", phone: "",addres: ""})

 } 
 
 return(
  <div clasame='input'>
<div className='name '>
<label for="name">Enter Name</label>
     <input
       type="text"
       id='name'
       autoComplete='off'
       name='name'
       value={inputdata.name}
       onChange={changehandle}
       />
   </div>
   <div className='number '>
   <label for="phone">Enter phone</label>
       <input
       id='phone'
         type="text"
         autoComplete='off'
         name='phone'
         value={inputdata.phone}
         onChange={changehandle}
          />
     </div>
     <div className='addres '>
<label for="name">Enter addres</label>
     <input
       type="text"
       id='addres'
       autoComplete='off'
       name='addres'
       value={inputdata.addres}
       onChange={changehandle}
       />
   </div>
     <button onClick={!bolin?changhandle:Updateinfo}>{!bolin?`Add Customer`:`Update data`}</button><br/>
     <Add/>
            <table border={1} width="50%" cellPadding={8}>
                <tbody>
                    <tr>
                        <td>Sr.No</td>
                        <th>Name </th>
                        <th>phone</th>
                        <th>addres</th>
                        
                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={4}>NO data Enter yet !</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{info.name}</td>
                                <td>{info.phone}</td>
                                <td>{info.addres}</td>
                            </tr>
                        )
                    })
}

                </tbody>
            </table>




     </div>

  
 
 )
 
 }
 export default Table