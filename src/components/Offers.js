import React from 'react'

const Offers = ({offers}) => {
  return (
    <div className='offers'>
        {offers.map((offer,index) =>
            <div className="offer" key={index}>
                <div className="icon" dangerouslySetInnerHTML={{ __html : offer?.offersIcon }}></div>
                <div className="content">
                    <h3>{offer?.offersTitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: offer?.offersContent }}></div>
                </div>
            </div>
        )

        }
    </div>
  )
}

export default Offers