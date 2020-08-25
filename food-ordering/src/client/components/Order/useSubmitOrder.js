import { useAppContext } from '../../AppContext'
import {
  submitOrderRequest,
  submitOrderSuccess,
  submitOrderFail
} from '../../actions/orderAction'
import { deleteCart } from '../../actions/cartAction'
import { createOrder } from '../../api/order'
import { useCallback } from 'react'

export const useSubmitOrder = () => {
  const [, dispatch] = useAppContext()

  const submitOrders = useCallback(
    async orders => {
      dispatch(submitOrderRequest())
      try {
        const res = await createOrder(orders)
        dispatch(submitOrderSuccess(res))
        dispatch(deleteCart())
      } catch (error) {
        dispatch(submitOrderFail(error))
      }
    },
    [dispatch]
  )

  return submitOrders
}
