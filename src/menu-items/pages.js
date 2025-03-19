import { IconAssembly } from '@tabler/icons-react'
import { getMachines } from '../backservice'

// constant
const icons = {
  IconAssembly
};

export async function getPages() {
  const data = await getMachines('PAC-DB-001')
  const childrensItems = data.map((machine) => {
    return {
      id: 'login',
      title: machine.serial_number,
      type: 'item',
      url: '/pages/login',
      target: true
    }
  })

  let pages = {
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
        children: childrensItems
      }
    ]
  };

  return pages

}

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
