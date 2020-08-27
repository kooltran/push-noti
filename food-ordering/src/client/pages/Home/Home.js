import React, { useEffect } from 'react'
import MenuList from '../../components/Menu/Menu'
import OrderCart from '../../components/Order/OrderCart'

import TimerCountDown from '../../components/TimerCountDown/TimerCountDown'
import { useAppContext } from '../../AppContext'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const curDate = new Date()
  const year = curDate.getFullYear()
  const month = curDate.getMonth()
  const day = curDate.getDate()
  const [{ submitOrder }] = useAppContext()
  const { createOrderSuccess } = submitOrder
  const startTime = new Date(year, month, day, 9, 30, 0, 0).getTime()
  const currentTime = new Date().getTime()

  useEffect(() => {
    if (createOrderSuccess) {
      toast.success('Your order was submit successfully, Enjoy you meal!!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [createOrderSuccess])

  return (
    <div className="page">
      <h1 className="text-uppercase text-center">SP Team Luch Ordering</h1>
      <TimerCountDown />
      <OrderCart />
      <MenuList />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default Home
