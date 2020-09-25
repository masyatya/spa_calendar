import React, { useState, useEffect } from 'react';
import { Calendar } from './Calendar/Calendar';
import { Popup } from './Popup';

export const Home = () => {
  useEffect(() => {
    document.title = 'Home - Rdevs'
  }, [])

  return (
    <main className='main container'>
      <Popup />
      <section className='home'>
        <section className='home__left'>
          <h1 className='home__heading'>Choose the day<br/>for the meeting</h1>
          <p className='home__text'>We encourage you to book your<br/>appointment online.<br/>This will save you time.</p>
        </section>
        <Calendar />
      </section>
    </main>
  )
}