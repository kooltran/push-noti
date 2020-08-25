import React, { useState } from 'react'
import { useAppContext } from '../../AppContext'
import IconPlus from '../../../assets/plus.svg'
import { addCartItem } from '../../actions/cartAction'
import classnames from 'classnames'

const MenuItem = ({ item }) => {
  const [quantity, setQty] = useState(1)
  const [{ currentUser, cart }, dispatch] = useAppContext()
  const { user } = currentUser
  const { cartList } = cart

  const handleAddTocart = () => {
    const formattedCartItem = { id: item._id, dish_name: item.name, quantity }
    if (user.username) {
      if (cartList.length === 0) {
        cartList.push(formattedCartItem)
        dispatch(addCartItem(cartList))
      } else {
        const cartAdded = [...cartList, formattedCartItem]

        dispatch(addCartItem(cartAdded))
      }
    } else {
      window.open('http://localhost:3000/google', '_self')
    }
  }

  const handleChangeQuantity = ({ target: { value } }) => {
    setQty(value)
  }

  return (
    <div
      className={classnames('menu-item', {
        'is-disabled': cartList.some(cart => cart.id === item._id)
      })}
    >
      <div className='image'>
        <img className='img-dish' src={item.img} alt={item.name} />
        <div onClick={handleAddTocart}>
          <img className='icon-add' src={IconPlus} alt='' />
        </div>
      </div>

      <div className='desc'>
        <div className='info'>
          <span className='name'>{item.name}</span>
          <span className='price'>{item.price}</span>
        </div>
        <div className='quantity'>
          <input
            type='number'
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuItem
