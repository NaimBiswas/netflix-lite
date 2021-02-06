

import React from 'react'
import { Button } from 'react-bootstrap'
import { auth } from '../firebase'
import Nav from './Nav'


const Profile = () => {
   return (
      <div>
         <Nav></Nav>
         <div style={{ paddingTop: '150px' }} className="container">
            <div className="row">
               <div className="col-lg-6 offset-lg-2">
                  <table className='table table-bordered'>
                     <thead>
                        <tr>
                           <td colspan='2' className="text-white h4">Edit Profile</td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr >
                           <td rowSpan='3' style={{ width: '16%' }} className='pt-0'>
                              <img className='img-fluid img-thumbnail w-100% ' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                           </td>
                           <td style={{ verticalAlign: 'middle' }} className='bg-info'>
                              nayeembiswas3@gmail.com
                           </td>

                        </tr>
                        <tr>
                           <td className='h3 text-white'>Plans  {"Current Plant: Premium "} </td>
                        </tr>

                        <tr>
                           <td><Button style={{ border: 'none' }} className='bg-danger w-100 d-block pt-2 pb-2'>Sing Out</Button></td>
                        </tr>

                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Profile
