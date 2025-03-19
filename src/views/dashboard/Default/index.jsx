import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../../ui-component/cards/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../../ui-component/cards/TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import {getMachineData} from "../../../backservice"
import { gridSpacing } from 'store/constant';


// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [machineData,setMachineData] = useState({})
  
  
  useEffect(() => {
    setLoading(false);
  }, []);
  
  useEffect(()=>{
    getMachineData("PAC24250045").then((data)=>{
        setMachineData(data)
    })
  },[])
  return (
    <Grid container spacing={gridSpacing}>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
            <EarningCard isLoading={isLoading} data={machineData?.d}/>
          </Grid>
          <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
            <TotalOrderLineChartCard isLoading={isLoading} data={machineData?.d} />
          </Grid>
          <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
            <TotalOrderLineChartCard isLoading={isLoading} data={machineData?.d} />
          </Grid>
          <Grid size={{ lg: 4, md: 12, sm: 12, xs: 12 }}>
            <Grid container spacing={gridSpacing}>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeDarkCard isLoading={isLoading} data={machineData?.d} />
              </Grid>
              <Grid size={{ sm: 6, xs: 12, md: 6, lg: 12 }}>
                <TotalIncomeLightCard  data={machineData?.d}
                  {...{
                    isLoading: isLoading,
                    total: machineData?.d?.Reject_Counters[0],
                    label: 'Bad Production',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          <Grid size={{ xs: 12, md: 8 }}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <PopularCard isLoading={isLoading}  data={machineData?.d}  />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
