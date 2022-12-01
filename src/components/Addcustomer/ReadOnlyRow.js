
import { BsFillBackspaceFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";

const ReadOnlyRow = ({ customerData, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={customerData.ind}>
            <td> {customerData.ind}</td>
            <td>{customerData.title}</td>
            <td>{customerData.email}</td>
            <td>{customerData.address}</td>
            <td>{customerData.pho}</td>
            <td>{customerData.city}</td>
            <td>{customerData.gender}</td>
            <td>{customerData.interset}</td>
            <td>
                <BsFillPenFill onClick={(event) => handleEditClick(event, customerData)}  />
                <BsFillBackspaceFill onClick={() => handleDeleteClick(customerData.ind)} />
            </td>
        </tr>
    )
}
export default ReadOnlyRow;