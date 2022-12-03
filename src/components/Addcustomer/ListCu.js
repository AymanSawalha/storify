
import { useState ,Fragment} from 'react'
import './ListStyle.css'
import PopupCu from './PopupCu';
import jsonData from './data.json';
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import { Table } from 'react-bootstrap';

  const ListC = () => {
    const [editFormData, setEditFormData] = useState({
      
        name: "",
        email: "",
        address: "",
        pho: "",
        city: "",
        gender:"",
        password:""
      })
      const [customerData, setcustomerData] = useState(jsonData);
      const [EditcustomerDataId, setEditcustomerDataId] = useState(null);
      const [CustomerDataLength, setCustomerDataLength] = useState(customerData.length + 1);
      const [search, setSearch] = useState('');
   
      // sort......
      const onSorterDow =(e)=>{
    
        const sortedData=[...customerData]
          sortedData.sort((a,b)=>a.name < b.name ? 1 : -1)
        setcustomerData(sortedData);
       };
       const onSorterUp =(e)=>{
       
        const sortedData=[...customerData]
          sortedData.sort((a,b)=>a.name < b.name ? -1 : 1)
        setcustomerData(sortedData);
       };
       

       const handleDeleteClick = (customerDataId) => {
		const newCustomerData = [...customerData];

		const index = customerData.findIndex((customerData) => customerData.ind === customerDataId);

		newCustomerData.splice(index, 1);

		setcustomerData(newCustomerData);

	}
    const handleEditFromSubmit = (event) => {
        event.preventDefault();
        const editedcustomerData = {
          ind: EditcustomerDataId,
          name: editFormData.name,
          email: editFormData.email,
          address: editFormData.address,
          pho: editFormData.pho,
          city: editFormData.city,
          gender: editFormData.gender,
          password: editFormData.passwor,
        }
        const newCustomerData = [...customerData];
      const index = customerData.findIndex((customerData) => customerData.ind === EditcustomerDataId);
      newCustomerData[index] = editedcustomerData;
      setcustomerData(newCustomerData);
      setEditcustomerDataId(null);
    
    }

    const handleCancelClick = () => {
        setEditcustomerDataId(null);
      }

const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    }
    const handleEditClick = (event, customerData) => {
        event.preventDefault();
    
        setEditcustomerDataId(customerData.ind);
        const formValues = {
        ind:customerData.ind,
          name: customerData.name,
          email: customerData.email,
          address: customerData.address,
          pho: customerData.pho,
          city: customerData.city,
          gender: customerData.gender,
          password: customerData.password
        }
    
        setEditFormData(formValues)
      }

      const tableRows = customerData.filter((item)=>{
        return (search.toLowerCase() === '') || (search.toUpperCase() === '') ? item : (item.name.toLowerCase().includes(search)) || (item.name.toUpperCase().includes(search)) }).map((customerData) => {
        return (
<>
				<Fragment>
					{EditcustomerDataId === customerData.ind? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} handleEditFromSubmit={handleEditFromSubmit} />): (<ReadOnlyRow customerData={customerData} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
				</Fragment>
			</>
		);
	});
    const addRows = (data) => {
		setCustomerDataLength(CustomerDataLength + 1);
		data.ind = CustomerDataLength;
		const updatedcustomerData = [...customerData];
		updatedcustomerData.push(data);
		setcustomerData(updatedcustomerData);
	};
  
  return (
    <div className='all'>
        <h2 >Customer List</h2>
        <p id='parg'>Dashbourd-- Add Customer</p>
        
       <div className='Customer'> 
       
       <div className='bar'>
      
       <PopupCu func={addRows} />

      
          <InputGroup className='my-3'>
         
            <Form.Control  className='search'
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search  ...'
            />
          </InputGroup>
          </div>
          </div>
    
          <Table   >
           <thead >
            <tr >
              <th>Sr.NO</th>
              <th>
                Name<BiChevronUp onClick={()=>onSorterUp()}/>< BiChevronDown onClick={()=>onSorterDow()}/> </th>
              <th>E-mail</th>
              <th>password</th>
              <th>City</th>
              <th>Phone</th>
              <th>Addres</th>
              <th>Gender</th>
              <th>  </th>
              <th>  </th>
              
            </tr>
          </thead>
         <br/>
          <tbody>{tableRows}</tbody>
        </Table>
        </div>
    

  );
}

export default ListC
