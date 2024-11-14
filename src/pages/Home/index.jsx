import { useState } from 'preact/hooks';
import emailjs from 'emailjs-com';

import barbercut from "../../assets/barbercut.webp"

import Foot from "../../components/Foot";
import Divider from "../../components/Divider";
import { Link } from 'preact-router/match'; 
import Form from '../../components/Form';

const Home = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
        // Send email using EmailJS sendForm function
        const result = await emailjs.sendForm(
            `${import.meta.env.VITE_SERVICE_ID}`,  // Replace with your service ID
            `${import.meta.env.VITE_TEMPLATE_ID}`,
            e.target    // Pass the form as the target
        );

        console.log(result.text);
        setSuccess('Subscription successful!');
        } catch (error) {
        console.error('Error sending email:', error);
        setSuccess('Error sending email. Please try again later.');
        } finally {
        setLoading(false);
        }
    };

    return (
    <div className="main-section">
        <section class="hero-container">
            <div class="image-container">
                <div className='layer'>
                    <Form isHome={true} />
                </div>
            </div>
            <div className="flex flex-column">
                <h2>iCut: For Barbers Like You!</h2>
            </div>
            <Divider />
    
            <div>                
                <div class="feature-container">
                    <div style={{display:"flex", gap: "10px"}}>
                        <div class="feature-block">
                            <h3>Sign Up & Set Your Availability</h3>
                            <p>After subscribing, create your profile and set your available hours. You’ll be visible to potential clients in your area who are looking for a professional barber.</p>
                        </div>
                    
                        <div class="feature-block">
                            <h3>Offer Services</h3>
                            <p>Head to the client’s location, whether it's their home, office, or another destination, and deliver your service.</p>
                        </div>
                    </div>
                    <div style={{display:"flex", gap: "10px"}}>
                        <div class="feature-block">
                            <h3>Sponsor Yourself for Greater Visibility</h3>
                            <p>Barbers can now sponsor their profile for extra exposure and connect with more clients in their area. It's the perfect way for professionals to grow their business and increase visibility.</p>
                        </div>
                        
                        <div class="feature-block">
                            <h3>Get Booked</h3>
                            <p>Clients will find you on the platform, see your availability, and book you for appointments. You’ll receive notifications for each new booking.</p>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <div class="feature-block">
                            <h3>Seamless Booking & Payments</h3>
                            <p>Easy-to-use interface for quick appointments, and secure payment options make the entire experience as simple as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div class="hero-text">
                <div className="flex align-start column-mob" style={{gap: "5px"}}>
                    <div>
                        <p>
                            As a barber, you know how important it is to connect with clients, build your reputation, and manage your time effectively,&nbsp;
                            <strong>iCut</strong> - the first-ever app that connects you, the barber, to the clients, <strong>whenever</strong> and <strong>wherever</strong> they need it!</p>
                        <p>
                            Whether they're at home, at the office, or anywhere in between, With <strong>iCut</strong> you can do all of that – and more! 
                            This first-ever app brings the power of mobility and real-time booking to barbers across national territory, enabling you to expand your reach and grow your business like never before.
                        </p>
                    </div>
                    <div >
                        <img src={barbercut} alt="Barbering at Home" class="image" />
                    </div>
                </div>
                <p>
                    No more relying on foot traffic or traditional marketing methods. With <strong>iCut</strong> your skills can reach clients wherever they are—whether at home, in the office, or on the go.
                    Simply sign up, set your availability, and let <strong>iCut</strong> connect you to clients in need of your services.
                </p>
            </div>
            <Divider />
            <Foot />
        </section>
    </div>
    
)};
  
  export default Home;