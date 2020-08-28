import React, { useEffect } from 'react'
import { useAppContext } from '../../AppContext'

import {
  getAllOrdersRequest,
  getAllOrdersSuccess,
  getAllOrdersFail,
} from '../../actions/orderAction'
import { getAllOrders } from '../../api/order'
import OrderItem from './OrderItem'
import { groupByNTotal } from '../../helpers'

import './Orders.scss'
import IconLoading from '../../../assets/loading.svg'

const Orders = () => {
  const [
    {
      allOrders: { orderList, isLoading },
    },
    dispatch,
  ] = useAppContext()

  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  useEffect(() => {
    const getOrderList = async orders => {
      dispatch(getAllOrdersRequest())
      try {
        const res = await getAllOrders()
        dispatch(getAllOrdersSuccess(res))
      } catch (error) {
        dispatch(getAllOrdersFail(error))
      }
    }
    getOrderList()
  }, [dispatch])

  const sortedList = orderList.sort((a, b) =>
    a.dish_name.localeCompare(b.dish_name)
  )

  const orderListGroupByDate = groupByNTotal(orderList, 'date')

  console.log(orderListGroupByDate)

  return (
    <div className="order-wrapper">
      <h1 className="order-title">All Orders List</h1>
      {/* {orderList.length !== 0 && (
        <div className="order-total">
          <h3 className="title">Total List</h3>
          {orderListTotalQty.map(order => (
            <div key={order.name} className="total-item">
              <span>{order.name}</span>
              <span>{order.qty}</span>
            </div>
          ))}
        </div>
      )} */}
      {isLoading && (
        <img className="icon-loading" src={IconLoading} alt="loading-spinner" />
      )}
      {sortedList.length !== 0 && (
        <div className="order-content">
          <div className="order-item__title">
            <span>Tên Món</span>
            <span>Số Lượng</span>
            <span>Ngày Order</span>
            <span>Người Order</span>
            {isAdmin && <span className="paid">Paid</span>}
          </div>
          {Object.keys(orderListGroupByDate).map(item => {
            console.log()
            return (
              <>
                <div className="order-item__date-title" key={item}>
                  {item}
                </div>
                {orderListGroupByDate[item].map(order => (
                  <OrderItem order={order} isAdmin />
                ))}
              </>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Orders
