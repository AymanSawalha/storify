import React from 'react'
import {MdCancel} from "react-icons/md"
import {BsFillBookmarkCheckFill} from "react-icons/bs"
export const EditableRow = ({Data,editFormData,handleEditFormChange, handleCancelClick, handleEditFromSubmit }) => {
    return (
        <>
             <tr>
                <td> <input type="text" name="compname" defaultValue={editFormData.compname} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="email" value={editFormData.email} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="address" value={editFormData.address} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="phone" value={editFormData.phone} onChange={handleEditFormChange}/></td>
                <td> <input type="text" name="comptype" value={editFormData.comptype} onChange={handleEditFormChange}/></td>
                <td><BsFillBookmarkCheckFill onClick={handleEditFromSubmit}/></td>
               <td><MdCancel onClick={handleCancelClick}/></td>
            </tr>
        </>
    )
}
export default EditableRow;