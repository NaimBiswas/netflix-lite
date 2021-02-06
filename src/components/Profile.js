

import React from 'react'
import { Button } from 'react-bootstrap'
import { auth } from '../firebase'
import Nav from './Nav'
import '../componentsCSS/Profile.css'


const Profile = () => {

   return (
      <div>
         <Nav></Nav>
         <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            width: '100%',
            height: '100vh',
            backgroundImage: `linear-gradient(0deg, rgb(197 25 25 / 30%), rgb(0 0 0)),url("https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/1b4054cd-e5f5-40a8-88d3-09428654d5ff/BD-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg")`,
            position: 'relative'
         }}>
         </div>
         <div style={{ position: "absolute", top: '18%', right: '0' }} className="container">
            <div className="row">
               <div className="col-lg-6 offset-lg-2">
                  <table className='table'>
                     <thead>
                        <tr>
                           <td colspan='2' className="text-white h4">Edit Profile</td>
                        </tr>
                     </thead>
                     <tbody>
                        <tr >
                           <td rowSpan='6' style={{ width: '16%' }} className='pt-0'>
                              <img className='img-fluid img-thumbnail w-100% ' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                           </td>
                           <td style={{ verticalAlign: 'middle' }} className='bg-info text-white h6'>
                              nayeembiswas3@gmail.com
                           </td>

                        </tr>
                        <tr>
                           <td className='h3 text-white'>Plans <small> {"Current Plant: Premium "} </small></td>
                        </tr>
                        <tr>
                           <td style={{ justifyContent: "space-between" }} className='text-white d-flex'>
                              <p>
                                 Neflix <strong> Strander</strong><br /><span style={{ color: 'rgb(255 255 255 / 82%)' }}>$.75/month</span>
                              </p>
                              <p><button className='btn btn-danger btn-md mt-3'>Subscribe</button></p>
                           </td>

                        </tr>
                        <tr>
                           <td style={{ justifyContent: "space-between" }} className='text-white d-flex'>
                              <p>
                                 Neflix <strong> Basic</strong><br /><span style={{ color: 'rgb(255 255 255 / 82%)' }}>$7.5/month</span>
                              </p>
                              <p><button className='btn btn-danger btn-md mt-3'>Subscribe</button></p>
                           </td>

                        </tr>
                        <tr>
                           <td style={{ justifyContent: "space-between" }} className='text-white d-flex'>
                              <p>
                                 Neflix <strong> Strander</strong><br /><span style={{ color: 'rgb(255 255 255 / 82%)' }}>$15/month</span>
                              </p>
                              <p><button className='btn btn-secondary btn-md mt-3'>Subscribe</button></p>
                           </td>

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
