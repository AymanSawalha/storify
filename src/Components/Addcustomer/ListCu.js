import { useState ,Fragment} from 'react'
import './ListStyle.css'
import PopupCu from './PopupCu';
import jsonData from './data.json';
import Form from 'react-bootstrap/Form';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import { Table ,Card} from 'react-bootstrap';
import { BsSortAlphaUp } from "react-icons/bs";
import { BsSortAlphaDown } from "react-icons/bs";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

  const ListC = () => {
    const [editFormData, setEditFormData] = useState({
      
        name: "",
        email: "",
        address: "",
        phon: "",
        city: "",
        gender:"",
        password:""
      })
      const [customerData, setcustomerData] = useState(jsonData);
      const [EditcustomerDataId, setEditcustomerDataId] = useState(null);
      const [CustomerDataLength, setCustomerDataLength] = useState(customerData.length + 1);
      const [search, setSearch] = useState('');
      const [isActive, setIsActive] = useState(true);


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
       
//delete row:
       const handleDeleteClick = (customerDataId) => {
		const newCustomerData = [...customerData];

		const index = customerData.findIndex((customerData) => customerData.ind === customerDataId);

		newCustomerData.splice(index, 1);

		setcustomerData(newCustomerData);

	}
  //save info after edit:
    const handleEditFromSubmit = (event) => {
        event.preventDefault();
        const editedcustomerData = {
          ind: EditcustomerDataId,
          name: editFormData.name,
          email: editFormData.email,
          address: editFormData.address,
          phon: editFormData.phon,
          city: editFormData.city,
          gender: editFormData.gender,
          password: editFormData.password
        }

        const newCustomerData = [...customerData];
      const index = customerData.findIndex((customerData) => customerData.ind === EditcustomerDataId);
      newCustomerData[index] = editedcustomerData;
      setcustomerData(newCustomerData);
      setEditcustomerDataId(null);
    
    }
// cancel the edit operation:
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
    //edit row:
    const handleEditClick = (event, customerData) => {
        event.preventDefault();
    
        setEditcustomerDataId(customerData.ind);
        const formValues = {
        ind:customerData.ind,
          name: customerData.name,
          email: customerData.email,
          password: customerData.password,
          address: customerData.address,
          phon: customerData.phon,
          city: customerData.city,
          gender: customerData.gender
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
  //addRows
    const addRows = (data) => {
		setCustomerDataLength(CustomerDataLength + 1);
		data.ind = CustomerDataLength;
		const updatedcustomerData = [...customerData];
		updatedcustomerData.push(data);
		setcustomerData(updatedcustomerData);
	};
  
  return ( 
    <>
<div className='listC'>
     <Card id='tableCard'>
		  <Card.Header>
        <h2 id='h2'>Customer List</h2>
        <Breadcrumb>
				<Breadcrumb.Item ><Link to ="/Home">Dashboard</Link></Breadcrumb.Item>
				<Breadcrumb.Item active>Add Customer</Breadcrumb.Item>
			</Breadcrumb>

            <section className='bar'>
              <div className='container-fluid'>
                <div className='row'>
                 <div className='col lg-3 md-4  sm-4 addCus'>
                   <PopupCu func={addRows} />
       
                   </div>
      
                   <div className='col lg-9 md-8 sm-8 searchIf'>
                    <Form className="search ">
                   <Form.Control
                     type="search"
                     placeholder="Search....."
                     className="me-2"
                     onChange={(e) => setSearch(e.target.value)}  />       
                     </Form>
               </div>
            </div>
          </div>
          </section>
          </Card.Header>
    <Card.Body>
          <Table striped hover>
           <thead >
            <tr >
              <th>#</th>
              <th >  Name <div id='sort'  onClick={() => setIsActive(!isActive)}>
               {isActive ? <BsSortAlphaUp onClick={()=>onSorterDow()}/> :<BsSortAlphaDown onClick={()=>onSorterUp()}/>}</div> </th>
              <th>E-mail</th>
              <th>password</th>
              <th>City</th>
              <th>phone</th>
              <th>Addres</th>
              <th>Gender</th>
              <th>  </th>
              <th> </th>
               
            </tr>
           </thead>
           <br/>
           <tbody>{tableRows}</tbody>
          </Table>
        </Card.Body>
        </Card>
        </div>
        
        </>
  );
}

export default ListC;


