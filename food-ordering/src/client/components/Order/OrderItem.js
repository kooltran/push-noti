import React from 'react'
import { useAppContext } from '../../AppContext'
import { deleteCartItem } from '../../actions/cartAction'
import RemoveIcon from '../../../assets/cross.svg'

const OrderItem = ({ order }) => {
  const [, dispatch] = useAppContext()

  const handleDeleteOrder = () => {
    dispatch(deleteCartItem(order))
  }

  return (
    <div className='cart-item'>
      <div className='name'>{order.dish_name}</div>
      <div className='desc'>
        <div className='qty'>{order.quantity}</div>
        <span className='remove' onClick={handleDeleteOrder}>
          <img src={RemoveIcon} alt='remove-order' />
        </span>
      </div>
    </div>
  )
}

export default OrderItem
