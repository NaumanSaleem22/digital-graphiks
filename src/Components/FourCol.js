import React from 'react'
import './FourCol.css'
import four1 from '../Images/four1.png'
import four2 from '../Images/four2.png'
import four3 from '../Images/four3.png'
import four4 from '../Images/four4.png'
function FourCol() {
  return (
    <div className="FourCol-div">
      <div>
        <img src={four1} alt="image" />
      </div>
      <div>
        {' '}
        <img src={four2} alt="image" />
      </div>
      <div>
        {' '}
        <img src={four3} alt="image" />
      </div>
      <div>
        {' '}
        <img src={four4} alt="image" />
      </div>
    </div>
  )
}

export default FourCol
