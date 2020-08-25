import React, { useEffect } from 'react'
import MenuList from '../../components/Menu/Menu'
import OrderCart from '../../components/Order/OrderCart'
import { useAppContext } from '../../AppContext'

import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  const [{ order }] = useAppContext()
  const { createOrderSuccess } = order

  useEffect(() => {
    if (createOrderSuccess) {
      toast.success('Your order was submit successfully, Enjoy you meal!!!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }, [createOrderSuccess])

  return (
    <>
      <h1>Food Ordering</h1>
      <OrderCart />
      <MenuList />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default Home
