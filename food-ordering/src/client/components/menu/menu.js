import React, { useEffect } from 'react'
import { useFetchMenu } from './useFetchMenu'

const MenuList = () => {
  const fetchMenuList = useFetchMenu()
  useEffect(() => {
    fetchMenuList()
  }, [])

  return <h1>menu list</h1>
}

export default MenuList
