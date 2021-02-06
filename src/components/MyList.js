import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const MyList = () => {
   return (
      <div>
         <Nav></Nav>
         <div className="">
            <h2 className='text-danger' style={{ textAlign: 'center', position: 'absolute', width: '100%', top: '50%', }}>This Page Will Come Soon</h2>
         </div>
         <div style={{ paddingTop: '75vh' }} className="">
            <Footer></Footer>
         </div>
      </div>
   )

}

export default MyList
