import React from 'react'
import './ListStyle.css'
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsX } from "react-icons/bs";


 const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick,handleEditFromSubmit }) => {
    return (
      
        <>
    
            <tr id='edit'>
            <td>  {editFormData.ind}  </td>
                <td> <input type="text" name="name" defaultValue={editFormData.title} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="email" defaultValue={editFormData.email} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="address" defaultValue={editFormData.address} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="phone" defaultValue={editFormData.pho} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="city" defaultValue={editFormData.city} onChange={handleEditFormChange} /></td>
                <td> <input type="text" name="gender" defaultValue={editFormData.gender} onChange={handleEditFormChange} /></td>
                <td> <input type="text" name="interset" defaultValue={editFormData.interset} onChange={handleEditFormChange} /></td>

                <td>
                  <BsFillBookmarkFill onClick={handleEditFromSubmit}/>  
                  <BsX onClick={handleCancelClick}/>  

                </td>
            </tr>
        </>
    )
}
export default EditableRow;