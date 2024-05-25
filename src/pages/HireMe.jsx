import React from 'react'
import "./Hire.css";
import { Button } from '../components/Button';

const HireMe = () => {
  return (
    <section className='hire-page-root'>
      <h1>HireMe</h1>
      <input type="text" placeholder='email@email.com' />
      <textarea placeholder='A brief...' />
      <Button text="SUBMIT" />
    </section>
  )
}

export default HireMe;