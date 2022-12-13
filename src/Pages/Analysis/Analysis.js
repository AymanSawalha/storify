import AreaLineChartCard from '../../Components/Analysis/AreaLineChart';
import DoughnutChartCard from '../../Components/Analysis/DoughnutChart';
import RBsTable from '../../Components/Analysis/GridTables/GridTable';
import RadarChartCard from '../../Components/Analysis/RadarChart';
import './Analysis.css';

const Analysis = () => {
  return (
    <div className='Analysis'>
      <div className='row'>
        <DoughnutChartCard/>
        <AreaLineChartCard/>
        <RadarChartCard/>
        <div className='row'>
        <RBsTable/>
        </div>
      </div>
    </div>
)}
export default Analysis;