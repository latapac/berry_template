import { useEffect, useState } from 'react';  // Importing React hooks for state and side effects

// material-ui
import Grid from '@mui/material/Grid2';  // Importing Grid component from MUI for layout management

// project imports
import PopularCard from './PopularCard';  
import TotalOrderLineChartCard from './TotalOrderLineChartCard';  
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';  

import TotalGrowthBarChart from './TotalGrowthBarChart';  // Bar chart showing growth metrics
import {getMachineData} from "../../../backservice";  // Function to fetch machine data from backend
import { gridSpacing } from 'store/constant';  // Constant for consistent grid spacing
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';


// assets


// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);  
  const [machineData, setMachineData] = useState({}); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serialNumber = queryParams.get('serial_number');
  const navigate = useNavigate()

 
  useEffect(() => {
    setLoading(false);
  }, []);
  
  
  useEffect(() => {
    getMachineData(serialNumber).then((data) => { 
      setMachineData(data); 
    });
  }, []);

  // Main render return with grid layout
  return (
    <Grid container spacing={gridSpacing}>  {/* Outer container for entire dashboard */}
      <Grid size={12}>  
        <div sx={{gap: '5vh'}}>{/* First row taking full width */}
        <button className='p-3 text-slate-100  cursor-pointer rounded-lg mb-1 mr-3 bg-blue-600' 
        onClick={()=>navigate("/oee?serial_number="+serialNumber)}
        >OEE</button>
          <button className='p-3 text-slate-100  cursor-pointer mb-1 mr-3 rounded-lg bg-green-600' 
        onClick={()=>navigate("/oee?serial_number="+serialNumber)}
        >Production Details</button>
          <button className='p-3 text-slate-100  cursor-pointer mb-1 mr-3 rounded-lg bg-yellow-600' 
        onClick={()=>navigate("/oee?serial_number="+serialNumber)}
        >Batch Details</button>
         <button className='p-3 text-slate-100  cursor-pointer mb-1 rounded-lg bg-orange-600' 
        onClick={()=>navigate("/oee?serial_number="+serialNumber)}
        >Report</button>
        </div>
        <Grid container spacing={gridSpacing}>  {/* Inner container for top row cards */}
        <Grid size={{ lg: 2.65, md: 6, sm: 6, xs: 12 }}>  {/* First orders chart column */}
            <TotalOrderLineChartCard isLoading={isLoading} Count={machineData?.d?.Good_Count[0]||'-'} 
             name="Good Production"  />  {/* Orders line chart */}
          </Grid>
          <Grid size={{ lg: 2.65, md: 6, sm: 6, xs: 12 }}>  {/* First orders chart column */}
            <TotalOrderLineChartCard isLoading={isLoading} Count={machineData?.d?.Reject_Counters[0]||'-'}
             name="Bad Production" />  {/* Orders line chart */}
          </Grid>
          <Grid size={{ lg: 2.65, md: 6, sm: 6, xs: 12 }}>  {/* Second orders chart column */}
            <TotalOrderLineChartCard isLoading={isLoading} Count={machineData?.d?.Total_Production[0]||'-'} name="Total Production"/>  {/* Duplicate orders chart */}
          </Grid>
          <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>  {/* Income cards column */}
            <Grid container spacing={gridSpacing}>  {/* Nested container for income cards */}
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>  {/* Dark income card */}
                <TotalIncomeDarkCard isLoading={isLoading} data={serialNumber} Speed={machineData?.d?.current_speed[0]} />  {/* Dark theme income */}
              </Grid>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>  {/* Light income card */}
              
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>  {/* Second row taking full width */}
        <Grid container spacing={gridSpacing}>  {/* Inner container for bottom row */}
          <Grid size={{ xs: 12, md: 8 }}>  {/* Growth chart column */}
            <TotalGrowthBarChart isLoading={isLoading} />  {/* Bar chart for growth */}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>  {/* Popular items column */}
            <PopularCard isLoading={isLoading} data={machineData?.d} />  {/* Popular items card */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}