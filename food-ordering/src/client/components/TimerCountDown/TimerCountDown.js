import React, { useState, useEffect, useCallback } from 'react'

import Modal from 'react-bootstrap/Modal'

import ForbidenOrder from '../../../assets/fobiden-order.svg'

import './TimerCountDown.scss'

const TimerCountDown = () => {
  const curDate = new Date()
  const year = curDate.getFullYear()
  const month = curDate.getMonth()
  const day = curDate.getDate()
  const endTime = new Date(year, month, day, 22, 29, 0, 0).getTime()

  const startTime = new Date(year, month, day, 9, 30, 0, 0).getTime()
  const currentTime = new Date().getTime()

  const isOpenOrder = currentTime >= startTime

  const [state, setState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [countDownTime] = useState(endTime)

  const [isOrderTimeout, setOrderTimeout] = useState(false)

  const setNewTime = useCallback(() => {
    if (countDownTime) {
      const currentTime = new Date().getTime()

      const distanceToDate = countDownTime - currentTime

      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      )
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`
      }

      if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`
      }

      if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`
      }
      setState({ hours: hours, minutes, seconds })

      if (hours <= 0 && minutes <= 0 && seconds <= 0) {
        setOrderTimeout(true)
      } else {
        setOrderTimeout(false)
      }
    }
  }, [countDownTime])

  useEffect(() => {
    setInterval(() => setNewTime(), 1000)
    if (isOrderTimeout) {
      return () => clearInterval(setNewTime)
    }
  }, [isOrderTimeout, setNewTime])

  const { hours, minutes, seconds } = state

  return (
    <div className="countdown">
      {hours >= 0 && minutes >= 0 && seconds > 0 && (
        <div>
          <p className="countdown-message">Thời gian order của bạn còn lại</p>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </div>
      )}

      <Modal
        className="timeout-modal"
        show={isOrderTimeout || !isOpenOrder}
        onHide={() => {}}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="timeout-modal__body">
          <img
            className="timeout-icon"
            src={ForbidenOrder}
            alt="forbiden-order"
          />
          {isOrderTimeout && (
            <div className="timeout-message">
              Thời gian order cơm hôm nay đã hết, bạn vui lòng quay lại vào lúc{' '}
              <span className="note">9h30</span> ngày mai nhé!!!
            </div>
          )}
          {!isOpenOrder && (
            <div className="timeout-message">
              Thời gian order chưa tới, bạn vui lòng quay lại vào lúc{' '}
              <span className="note">9h30</span> nhé!!!
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default TimerCountDown
