import './AddTableRow.css'
const AddTableRow = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
            <td>{props.phone}</td>
            <td>{props.type}</td>
        </tr>
    )
}
export default AddTableRow