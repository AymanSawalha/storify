import Table from 'react-bootstrap/Table';
import Add from './Popup';
import { useState } from 'react'
import './List.css';

function List() {
    const [inputarr,setInputarr] =useState([]);
    const [inputdata, SetInputdata] = useState({title: "", desc: "",cat: "",price: ""})
  return (
<>

<div id="protitle">
   <h id="t1"> Product List</h>
   <p id="t2"> Dashbourd --- Add Product</p>
</div>

<div className='list' >
    <Add/>
    <div className='space'></div>
    <Table striped bordered hover>
      <thead> 
        <tr>
          <th>#</th>
          <th>Product title</th>
          <th>Describtion</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>90</td>
          <td> <button> edit</button></td>
          <td> <button> delete</button></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  );
}

export default List;