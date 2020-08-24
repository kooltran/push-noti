import React, { useState } from 'react'
import { useAppContext } from '../../AppContext'
import IconPlus from '../../../assets/plus.svg'
import _ from 'lodash'

const MenuItem = ({ item }) => {
  const [{ currentUser }] = useAppContext()
  const { user } = currentUser
  const [orderList, setOrderList] = useState([])

  const handleOrder = () => {
    if (user.username) {
      let orderList = []
      const res = _.concat(orderList, item)
      console.log(res)
      res.map(ele => {
        console.log(ele)
      })
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
