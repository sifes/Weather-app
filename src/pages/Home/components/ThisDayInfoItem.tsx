import React from 'react'

export interface dayInfo {
  label: string, info: string, img: string
}

const ThisDayInfoItem = ({label, info, img}: dayInfo) => {
  return (
    <li>
          <div className="icon"><img src={img} alt={label} /></div>
          <div className="label">{label}</div>
          <div className="info">{info}</div>
    </li>
  )
}

export default ThisDayInfoItem
