import React from "react";
const EditableRow=()=>{
    
return(
    <form>
    <label for="ComName"> name : </label><br />
    <input required="required" type="text" id="name" name="ComName" onChange={handleAddFormChange}></input><br />
    <label for="email"> email : </label><br />
    <input type="text" required="required" id="email" name="email" onChange={handleAddFormChange}></input><br />
    <label for="address"> address : </label><br />
    <input type="text" required="required" id="address" name="address" onChange={handleAddFormChange}></input><br />
    <label for="phone"> phone : </label><br />
    <input type="text" required="required" id="phone" name="phone" onChange={handleAddFormChange}></input><br />
    <label for="type"> type : </label><br />
    <input type="text" required="required" id="type" name="type" onChange={handleAddFormChange}></input><br />
</form>
)}
export default EditableRow