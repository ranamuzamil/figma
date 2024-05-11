import Image from 'next/image'
import React from 'react'


function Card({cardImage,cardPrimaryHeading,cardSecondaryHeading}) {
  return (
    <div className='flex justify-center' style={{width:"300px",height:"300px"}}>
        <Image
          src={cardImage}
          style={{
            width: "300px",
            height: "300px",
            size: "cover",

            position: "absolute",
            zIndex: "-1",
          }}
        />    
        <div style={{width:"250px", textAlign:"left", padding:".8rem", height:"100px", marginTop:"30px", backgroundColor:"rgba(0,0,0,.3)"}}>
            <h2 style={{size:"38px",fontWeight:"500",lineHeight:"30px",color:"#E6E7E9" }}>{cardPrimaryHeading}</h2>
            <h3 style={{size:"16px",fontWeight:"300",lineHeight:"20px",color:"#D5D5D5" }}>{cardSecondaryHeading}</h3>

        </div>
    </div>
  )
}

export default Card
