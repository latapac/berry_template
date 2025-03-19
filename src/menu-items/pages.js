// assets
import { IconKey } from '@tabler/icons-react';
import {IconAssembly} from '@tabler/icons-react'

// constant
const icons = {
  IconAssembly
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Machines',
      type: 'collapse',
      icon: icons.IconAssembly,
      children: [
        {
          id: 'login',
          title: 'PAC1224',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'register',
          title: 'MAC1234',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }
  ]
};

export default pages;
