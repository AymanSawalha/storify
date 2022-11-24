import ClientDetails from '../../Components/Invoices/ClientDetails';
//import Dates from '../../components/Dates';
import Footer from '../../Components/Invoices/Footer';
// import Navigation from '../../components/Navigation';
import InvocieTable from '../../Components/Invoices/InvoiceTable';
import './style.css'

const Invoice = () => {
  return (
    <div className='container'>
      <ClientDetails data={{Fname:"Client Name", email:"example@gmail.com", mobileNum:"+972-000-0000", address:"Nablus, Rafydia St", total:9999}}/>
      <InvocieTable />
      <Footer data={{total:"520" ,tax:"154"}} />
    </div>
  );
}

export default Invoice;
