import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import EarningCard from './EarningCard';
import {  getMachines } from "../../../backservice"
import { gridSpacing } from 'store/constant';

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [machineData, setMachineData] = useState([])

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
   getMachines("PAC-DB-001").then((data)=>{
    
    setMachineData(data)
   })
  }, [])
  return (

    <Grid container spacing={gridSpacing}>
      <Grid size={12}>
        <Grid container spacing={gridSpacing}>
          {machineData.map((data) => {
            return (
              <Grid size={{ lg: 3, md: 6, sm: 6, xs: 12 }}>
                <EarningCard isLoading={isLoading} data={data} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>

    </Grid>
  );
}
