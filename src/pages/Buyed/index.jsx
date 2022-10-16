import React from 'react'
import Logo from '../../components/common/Logo'
import Footer from '../../components/common/Footer'
import './styles.css'
import { useNavigate } from 'react-router-dom'


const Buyed = () => {
  const navigate = useNavigate();
  return (
    <div className='containerB'>
        <Logo />
        <div className="headline-thankyou">
            <h1>Thank you for your order</h1>
            <h4>Your order has been placed and is being processed. You will receive an email with the order details.</h4>
            <button className="backtohomepage" onClick={() => navigate('/')} >Back to Homepage</button>
        </div>
        <Footer />
    </div>
  )
}

export default Buyed