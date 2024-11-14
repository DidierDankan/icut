import { useState } from 'preact/hooks';
import emailjs from 'emailjs-com';

const Form = ({isHome=false}) => {
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
        setSuccess('Thank you, we will remember this!');
        } catch (error) {
        console.error('Error sending email:', error);
        setSuccess('Error sending email. Please try again later.');
        } finally {
        setLoading(false);
        }
    };
    return (
        <form className={isHome ? 'hero-form' : null} onSubmit={handleSubmit}>
            <label htmlFor="email">{isHome ? "Get ahead and pre-signup:" :"Email Address:"}</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter your email..."
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              required
            />
            <button className='subcrib-btn' type="submit" disabled={loading || success?.length}>
              {loading ? 'Sending...' : 'Subscribe'}
            </button>
            {success && <p>{success}</p>}
        </form>
    )
}

export default Form