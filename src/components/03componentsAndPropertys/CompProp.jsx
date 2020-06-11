import React from 'react'

const CompProp = ({from, to, bangs}) => {
     return (
          <>
               <p>Dear {to},</p>
               <p>Lorem ipsum {"!".repeat(bangs)}</p>
               <p>Your sencierly, {from}</p>
          </>
     )
}

export default CompProp