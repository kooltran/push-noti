import React, { useEffect } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getOrdersRequest,
  getOrdersSuccess,
  getOrdersFail
} from '../../actions/orderAction'
import { deleteCart } from '../../actions/cartAction'
import { getOrders } from '../../api/order'

import { convertToLongDate } from '../../helpers'

import './Orders.scss'
import IconLoading from '../../../assets/loading.svg'

const Orders = () => {
  const [
    {
      orders: { orderList, isLoading }
    },
    dispatch
  ] = useAppContext()

  useEffect(() => {
    const getOrderList = async orders => {
      dispatch(getOrdersRequest())
      try {
        const res = await getOrders()
        dispatch(getOrdersSuccess(res))
        dispatch(deleteCart())
      } catch (error) {
        dispatch(getOrdersFail(error))
      }
    }
    getOrderList()
  }, [dispatch])

  return (
    <div className='order-wrapper'>
      <h1 className='order-title'>Orders List</h1>
      {isLoading && (
        <img className='icon-loading' src={IconLoading} alt='loading-spinner' />
      )}
      {orderList.length !== 0 && (
        <div className='order-content'>
          <div className='order-item__title'>
            <span>Tên Món</span>
            <span>Số Lượng</span>
            <span>Ngày Order</span>
            <span>Người Order</span>
            <span>Paid</span>
          </div>
          {orderList.map(order => (
            <div key={order._id} className='order-item'>
              <span className='dish-name'>{order.dish_name}</span>
              <span className='quantity'>{order.quantity}</span>
              <span className='date'>{convertToLongDate(order.date)}</span>
              <span className='name'>{order.name}</span>
              <span className='paid'>
                <input type='checkbox' />
                <span className='check-mask'></span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
