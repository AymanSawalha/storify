//imports
import './Form.css';
import { useState } from 'react';

//function  
const Form=()=>{      
      const {title,settitle}=useState('');
      const {desc,setdesc}=useState('');
    return(
      <div className='body'> 
     <form className='form-style'>
       <label className='lab'> Product title:</label>
       <input value={settitle} onChange={(e)=>settitle(e.target.value)} name='title' type="text" id="title" placeholder='Add Title'/>
       
       <div className='flex'></div>
       <label className='labdesc'> Describtion:</label>
       <textarea value={setdesc} onChange={(e)=>setdesc(e.target.value)} name="desc" id="desc" placeholder='Type here'></textarea>
       
       <div className='flex'></div>
        <label className='lab'> Picture:</label>
        <input  type="file" name="pic" id="pic" accept="image/*"/>

       <div className='flex'></div>
        <label for="cat-select" className='lab'>Category:</label>
        <select name="categ" id="categ">
            <option value="">Select</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
            <option value="hime">Home</option>
            <option value="beauty">Beauty</option>
       </select>

       <div className='flex'></div>
        <label className='lab'> price:</label>
        <span>
        <input  type="number" name="price" id="price"/>
        <select name="currency" id="currency">
            <option value="usd">Usd</option>
            <option value="jds">Jds</option>
            <option value="nis">Nis</option>
       </select>
       </span>
        <div className='flex'></div>
        <label id='check'> 
        <input type="checkBox" />
        Puplish On Site </label>
        <div className='flex'></div>
     </form>        
     </div>
    )

}

//exports <button type='submit' id="subbtn"> Submit Item</button>
export default Form;