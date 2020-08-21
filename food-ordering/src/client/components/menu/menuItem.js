import React from 'react'
import IconPlus from '../../../assets/plus.svg'
import { Link } from 'react-router-dom'

const MenuItem = ({ item }) => {
  return (
    <div className='menu-item'>
      <div className='image'>
        <img className='img-dish' src={item.img} alt={item.name} />
        <a href='http://localhost:3000/google'>
          <img className='icon-add' src={IconPlus} alt='' />
        </a>
      </div>
      <div className='info'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
    </div>
  )
}

export default MenuItem
