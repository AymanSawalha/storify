import React from 'react'
import savephoto from './savephoto.png'
import cancelphoto from './cancelphoto.png'
import Image from 'react-bootstrap/Image'

export const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick,handleEditFromSubmit }) => {
    return (
        <>
            <tr>
                <td> <input type="text" name="compname" defaultValue={editFormData.compname} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="email" defaultValue={editFormData.email} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="address" defaultValue={editFormData.address} onChange={handleEditFormChange} /></td>


                <td> <input type="text" name="phone" defaultValue={editFormData.phone} onChange={handleEditFormChange} /></td>

                <td> <input type="text" name="comptype" defaultValue={editFormData.comptype} onChange={handleEditFormChange} /></td>

                <td>
                  <Image src={savephoto} onClick={handleEditFromSubmit}/>  
                  <Image src={cancelphoto} onClick={handleCancelClick}/>  

                </td>
            </tr>
        </>
    )
}
export default EditableRow;