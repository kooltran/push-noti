import React, { useState } from 'react'
import classnames from 'classnames'
import { useAppContext } from '../../AppContext'
import OrderItem from './OrderItem'
import { convertToLongDate } from '../../helpers'
import { useSubmitOrder } from './useSubmitOrder'

import CartIcon from '../../../assets/cart.svg'
import IconLoading from '../../../assets/loading.svg'

import './Order.scss'

const OrderCart = () => {
  const [{ currentUser, cart, submitOrder }] = useAppContext()
  const { cartList } = cart
  const { isLoading } = submitOrder
  const [openCart, setOpenCart] = useState(false)
  const submitOrders = useSubmitOrder()

  const handleOpenCart = () => setOpenCart(!openCart)

  const handleSubmitOrder = () => {
    const orderListParams = cartList.map(order => ({
      dish_name: order.dish_name,
      quantity: order.quantity,
      name: currentUser.user.username,
      date: new Date(999999999999)
    }))
    submitOrders(orderListParams)
  }

  return (
    <div className='cart-wrapper'>
      <div className='cart-icon' onClick={handleOpenCart}>
        <img src={CartIcon} alt='cart-icon' />
        <span className='cart-qty'>{cartList.length}</span>
      </div>
      <div
        className={classnames('cart-content', {
          show: openCart && cartList.length
        })}
      >
        {isLoading && <img className='cart-loading' src={IconLoading} alt='' />}
        {cartList.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
        <button className='btn-order' onClick={handleSubmitOrder}>
          Order
        </button>
      </div>
    </div>
  )
}

export default OrderCart
