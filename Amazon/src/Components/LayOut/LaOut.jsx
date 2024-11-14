import React from 'react'
import Header from '../Header/Header'

const LaOut = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default LaOut