import React, { useState } from 'react'
import { useAppContext } from '../../AppContext'
import IconPlus from '../../../assets/plus.svg'
import { addCartItem, removeCartAddedFlag } from '../../actions/cartAction'
import classnames from 'classnames'

const MenuItem = ({ item }) => {
  const [quantity, setQty] = useState(1)
  const [{ currentUser, cart, orderTimeout }, dispatch] = useAppContext()
  const { user } = currentUser
  const { cartList } = cart

  const handleAddTocart = () => {
    const formattedCartItem = { id: item._id, dish_name: item.name, quantity }
    if (user.username) {
      if (cartList.length === 0) {
        dispatch(addCartItem(cartList))
        setTimeout(() => dispatch(removeCartAddedFlag()), 500)
        cartList.push(formattedCartItem)
      } else {
        const cartAdded = [...cartList, formattedCartItem]
        dispatch(addCartItem(cartAdded))
        setTimeout(() => dispatch(removeCartAddedFlag()), 500)
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
        'is-disabled':
          cartList.some(cart => cart.id === item._id) ||
          orderTimeout.isOrderTimeout,
      })}
    >
      <div className="image">
        <img className="img-dish" src={item.img} alt={item.name} />
        <div onClick={handleAddTocart}>
          <img className="icon-add" src={IconPlus} alt="" />
        </div>
      </div>

      <div className="desc">
        <div className="info">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}</span>
        </div>
        <div className="quantity">
          <input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuItem
