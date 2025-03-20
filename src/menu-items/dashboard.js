// assets
import { IconDashboard } from '@tabler/icons-react';
import { IconNotebook } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };
const icon = { IconNotebook };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'default',
      title: 'Dash2',
      type: 'item',
      url: '/dash',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'default',
      title: 'OEE',
      type: 'item',
      url: '/OEE',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'default',
      title: 'Production',
      type: 'item',
      url: '/Production',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'audit',
      title: 'Audit Trail',
      type: 'item',
      url: '/audit?serial_number=PAC24250046',
      icon: icon.IconNotebook,
      breadcrumbs: false
    }

  ]
};

export default dashboard;
