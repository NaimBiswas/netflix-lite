import React from 'react'

const Footer = () => {
   return (
      <div>
         <hr style={{ background: 'red', marginTop: '30px' }} />
         <div className="footer pl-4 pr-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4 className='text-light mt-5 mb-5'>Powered By <span style={{ color: '#E50914' }}>Naim Biswas</span> </h4>
            <h4 className='text-light mt-5 mb-5'>Reference By: <span style={{ color: '#E50914' }}>Sonny Sangha</span>  </h4>
         </div>
      </div>
   )
}

export default Footer
