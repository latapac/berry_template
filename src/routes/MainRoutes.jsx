

// project imports
import MainLayout from 'layout/MainLayout';
import AuditTrail from './Audit_Trial';
import Dashboard from '../views/dashboard2/Default';
import OEE from '../views/OEE/Default';
import Production from '../views/Production/Default';
import AlarmReport from './Alarm';
import Protected from './AuthLayout';
import Audit2 from '../views/Audit2/Default';
import Active_alarm from '../views/Active_alarm/Default';
import Batch_details from '../views/batch_details';


// dashboard routing
import DashboardDefault from 'views/dashboard/Default'



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Protected><MainLayout /></Protected>,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'batch',
      element: <Batch_details />
    },
    {
      path: 'OEE',
      element: <OEE />
    },
    {
      path: 'Audit2',
      element: <Audit2 />
    },
    {
      path: 'Active_alarm',
      element: <Active_alarm />
    },
    {
      path: 'Production',
      element: <Production/>
    },
    {
      path: 'audit',
      element: <AuditTrail />
    },
    {
      path: 'dash',
      element: <Dashboard />
    },
    {
      path: '/alarm',
      element: <AlarmReport />
    }
  ]
};

export default MainRoutes;
