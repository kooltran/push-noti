import React, { useState } from 'react'
import { useAppContext } from '../../AppContext'
import IconPlus from '../../../assets/plus.svg'
import { addOrderItem } from '../../actions/orderAction'
import _ from 'lodash'

const MenuItem = ({ item }) => {
  const [{ currentUser, order }, dispatch] = useAppContext()
  const { user } = currentUser
  const { orderList } = order

  const handleOrder = () => {
    if (user.username) {
      if (orderList.length === 0) {
        dispatch(addOrderItem(item))
        orderList.push(item)
      } else {
        console.log([...orderList, item])
      }
    } else {
      window.open('http://localhost:3000/google', '_self')
    }
  }

  return (
    <div className='menu-item'>
      <div className='image'>
        <img className='img-dish' src={item.img} alt={item.name} />
        <div onClick={handleOrder}>
          <img className='icon-add' src={IconPlus} alt='' />
        </div>
      </div>
      <div className='info'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
    </div>
  )
}

export default MenuItem
