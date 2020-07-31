import React from 'react'
import './style.css'

const index = ({title}) => {
  return (
    <div className="radios">
      <span>
        {title}<input name="instrument" type="radio" value={title} checked />
      </span>
    </div>
  )
}

export default index
