import React, { useEffect } from 'react'
import { useFetchMenu } from './useFetchMenu'
import { useAppContext } from '../../AppContext'
import { fetchCurrentUser } from '../../api/fetchCurrentUser'
import { getCurrentuserSuccess } from '../../actions/getCurrentUserAction'
import IconLoading from '../../../assets/loading.svg'
import './Menu.scss'

import MenuItem from './MenuItem'

const MenuList = () => {
  const [{ menu }, dispatch] = useAppContext()
  const fetchMenuList = useFetchMenu()
  const { isLoading, menuList } = menu

  useEffect(() => {
    const getCurrentUser = async () => {
      const curUser = await fetchCurrentUser()
      dispatch(getCurrentuserSuccess(curUser))
    }
    fetchMenuList()
    getCurrentUser()
  }, [dispatch, fetchMenuList])

  return (
    <div className="menu-wrapper">
      {isLoading && (
        <img className="icon-loading" src={IconLoading} alt="loading-spinner" />
      )}
      {menuList.map(item => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  )
}

export default MenuList
