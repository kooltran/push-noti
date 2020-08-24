import React, { useEffect } from 'react'
import { useFetchMenu } from './useFetchMenu'
import { useAppContext } from '../../AppContext'
import { fetchCurrentUser } from '../../api/fetchCurrentUser'
import { getCurrentuserSuccess } from '../../actions/getCurrentUserAction'

import './menu.scss'

import MenuItem from './MenuItem'

const MenuList = () => {
  const [{ menu, curUser }, dispatch] = useAppContext()
  const fetchMenuList = useFetchMenu()
  const { isLoading, menuList, getMenuFail } = menu

  useEffect(() => {
    const getCurrentUser = async () => {
      const curUser = await fetchCurrentUser()
      dispatch(getCurrentuserSuccess(curUser))
    }
    fetchMenuList()
    getCurrentUser()
  }, [dispatch, fetchMenuList])

  return (
    <div className='menu-wrapper'>
      {menuList.map(item => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  )
}

export default MenuList
