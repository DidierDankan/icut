import { h } from 'preact';
import { useState } from 'preact/hooks';
import emailjs from 'emailjs-com';
import Foot from '../../components/Foot';
import Form from '../../components/Form';

emailjs.init('CsPIUAk0EkBOtXamM');

const GetEmailsForm = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", height:"100%"}}>
      <div className='flex flex-column p-side'>
        <div className='main-section' style={{display:"flex", justifyContent:"center"}}>
          <div className='newsletter-form'>
            <h2>Be part of something great.</h2>
            <p style={{marginBottom:"20px"}}>
              Why Join?
              Think of <strong>iCut</strong> like Uber—but for barbers! Whether you’re looking to grow your client base, manage bookings more efficiently, or simply work on your own terms,
              &nbsp;<strong>iCut</strong> is your mobile platform for success.
              It's time to move your business forward. Don’t wait for clients to find you—<strong>iCut</strong> brings the clients to you!
              Join the revolution. The barber shop experience just went mobile, and so can your career.
            </p>
            <Form />
          </div>
        </div>
        <Foot hasBtn={false} />
      </div>
    </div>
  );
};

export default GetEmailsForm;