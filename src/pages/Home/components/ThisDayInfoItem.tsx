import React from 'react'
import { IdayInfo } from '../../../types'

const ThisDayInfoItem: React.FC<IdayInfo> = ({ label, info, img }) => {
  return (
    <li>
      <div className="icon"><img src={img} alt={label} /></div>
      <div className="label">{label}</div>
      <div className="info">{info}</div>
    </li>
  )
}

export default ThisDayInfoItem
