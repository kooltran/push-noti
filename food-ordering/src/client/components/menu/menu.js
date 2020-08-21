import React, { useEffect } from 'react'
import { useFetchMenu } from './useFetchMenu'
import { useAppContext } from '../../AppContext'
import './menu.scss'

import MenuItem from './MenuItem'

const MenuList = () => {
  const [{ menu }] = useAppContext()
  const fetchMenuList = useFetchMenu()
  const { isLoading, menuList, getMenuFail } = menu

  useEffect(() => {
    fetchMenuList()
  }, [fetchMenuList])

  return (
    <div className='menu-wrapper'>
      {menuList.map(item => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  )
}

export default MenuList
