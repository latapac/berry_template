import { useEffect, useState } from 'react';  // Importing React hooks for state and side effects

// material-ui
import Grid from '@mui/material/Grid2';  // Importing Grid component from MUI for layout management

// project imports
import EarningCard from './EarningCard';  // Card showing earning statistics
import PopularCard from './PopularCard';  // Card showing popular items/data
import TotalOrderLineChartCard from './TotalOrderLineChartCard';  // Card with line chart for orders
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';  // Dark-themed income card
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';  // Light-themed income card
import TotalGrowthBarChart from './TotalGrowthBarChart';  // Bar chart showing growth metrics
import {getMachineData} from "../../../backservice";  // Function to fetch machine data from backend
import { gridSpacing } from 'store/constant';  // Constant for consistent grid spacing
import { useLocation } from 'react-router';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';  // Icon for store/warehouse

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Production() {
  const [isLoading, setLoading] = useState(true);  
  const [machineData, setMachineData] = useState({}); 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serialNumber = queryParams.get('serial_number');

 
  useEffect(() => {
    setLoading(false);
  }, []);
  
  
  useEffect(() => {
    getMachineData(serialNumber).then((data) => {  // Fetch data for specific machine ID
      setMachineData(data);  // Update state with fetched data
    });
  }, []);

  // Main render return with grid layout
  return (
    <Grid container spacing={gridSpacing}>  {/* Outer container for entire dashboard */}
      <Grid size={12}>  {/* First row taking full width */}
        <Grid container spacing={gridSpacing}>  {/* Inner container for top row cards */}
        <Grid size={{ lg: 2.65, md: 6, sm: 6, xs: 12 }}>  {/* First orders chart column */}
            <TotalOrderLineChartCard isLoading={isLoading} data={machineData?.d} />  {/* Orders line chart */}
          </Grid>
          <Grid size={{ lg: 2.65, md: 6, sm: 6, xs: 12 }}>  {/* First orders chart column */}
            <TotalOrderLineChartCard isLoading={isLoading} data={machineData?.d} />  {/* Orders line chart */}
          </Grid>
          <Grid size={{ lg: 2.65, md: 6, sm: 6, xs: 12 }}>  {/* Second orders chart column */}
            <TotalOrderLineChartCard isLoading={isLoading} data={machineData?.d} />  {/* Duplicate orders chart */}
          </Grid>
        
        </Grid>
      </Grid>
    
    </Grid>
  );
}