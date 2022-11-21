const ReadOnlyRow = ({ contact }) => {
    return (      
        <tr>          
    <td>{contact.ComName}</td>
    <td>{contact.email}</td>
    <td>{contact.address}</td>
    <td>{contact.phone}</td>
    <td>{contact.type}</td>
    </tr>
    );
};
export default ReadOnlyRow