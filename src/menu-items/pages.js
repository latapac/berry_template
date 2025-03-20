import { IconAssembly } from '@tabler/icons-react';
import { getMachines } from '../backservice';

// Define icons
const icons = {
  IconAssembly
};

// Fetch machine list dynamically
export async function getPages() {
  const data = await getMachines('PAC-DB-001');

  const childrensItems = data.map((machine) => ({
    id: machine.serial_number,
    title: machine.serial_number,
    type: 'item',
    url: `/pages/audit_trail?machine=${machine.serial_number}`, // Redirect to audit_trail with machine ID
    target: true
  }));

  return {
    id: 'pages',
    title: 'Pages',
    icon: icons.IconAssembly,
    type: 'group',
    children: [
      {
        id: 'authentication',
        title: 'Machines',
        type: 'collapse',
        icon: icons.IconAssembly,
        children: childrensItems
      }
    ]
  };
}

// Static pages with MAC1234
const pages = {
  id: 'pages',
  title: 'Pages',
  icon: icons.IconAssembly,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Machines',
      type: 'collapse',
      icon: icons.IconAssembly,
      children: [
        {
          id: 'MAC1234',
          title: 'MAC1234',
          type: 'item',
          url: '/audit?serial_number=PAC24250045', // Redirects to audit trail page
          target: true
        }
      ]
    }
  ]
};


export default pages;
