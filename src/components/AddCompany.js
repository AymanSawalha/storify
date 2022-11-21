import { useState, Fragment } from "react";
import { nanoid } from 'nanoid';
import data from "../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow"
import EditableRow from "./EditableRow";
const AddCompany = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setaddFormData] = useState({
        ComName: '',
        email: '',
        address: '',
        phone: '',
        Comtype: ''
    });

    const handleAddFormChange = (event) => {

        event.preventDefult();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setaddFormData(newFormData);
    }
    const handleAddFormSubmit = (event) => {
        event.preventDefult();
        const newContact = {
            id: nanoid(),
            ComName: addFormData.ComName,
            email: addFormData.email,
            address: addFormData.address,
            phone: addFormData.phone,
            Comtype: addFormData.Comtype
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }
    return (
        <>

            <table>
                <thead>
                <tr>

                    <th> name</th>
                    <th> email</th>
                    <th> address</th>
                    <th> phone</th>
                    <th> type</th>


                </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr>
                            <td>{contact.ComName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.address}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.Comtype}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleAddFormSubmit}>
                <label for="ComName"> name : </label><br />
                <input required="required" type="text" id="ComName" name="ComName" value={ComName} onChange={handleAddFormChange}></input><br />
                <label for="email"> email : </label><br />
                <input type="text" id="email" name="email" onChange={handleAddFormChange}></input><br />
                <label for="address"> address : </label><br />
                <input type="text" id="address" name="address" onChange={handleAddFormChange}></input><br />
                <label for="phone"> phone : </label><br />
                <input type="text" id="phone" name="phone" onChange={handleAddFormChange}></input><br />
                <label for="Comtype"> type : </label><br />
                <input type="text" id="Comtype" name="Comtype" onChange={handleAddFormChange}></input><br />
                <button type="submit" class="btn btn-primary" onSubmit={handleAddFormSubmit}>Add </button>
            </form >
        </>



    )
}
export default AddCompany