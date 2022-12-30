import './station.css'

import React from 'react'

const Station = ({station}) => {
  return (
    <><tr className='station-row'>
      <td></td>
      <td>{station.FID}</td>
      <td>{station.name}</td>

    </tr>
    </>
  )
}

export default Station