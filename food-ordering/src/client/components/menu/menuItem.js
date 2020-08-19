import React from 'react'
import IconPlus from '../../../assets/plus.svg'

const MenuItem = ({ item }) => {
  return (
    <div className='menu-item'>
      <div className='image'>
        <img className='img-dish' src={item.img} alt={item.name} />
        <img className='icon-add' src={IconPlus} alt='' />
      </div>
      <div className='info'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
    </div>
  )
}

export default MenuItem
