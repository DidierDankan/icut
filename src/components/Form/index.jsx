import { useState } from 'preact/hooks';
import emailjs from 'emailjs-com';

const Form = ({isHome=false}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lName, setLName] = useState('');
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

        setSuccess('Thank you for your trust!');
        setEmail('')
        setName('')
        setLName('')
        } catch (error) {
        console.error('Error sending email:', error);
        setSuccess('Error sending email. Please try again later.');
        } finally {
        setLoading(false);
        }
    };
    return (
        <form className={isHome ? 'hero-form' : null} onSubmit={handleSubmit}>
            <div className='flex'>
                <input
                style={{marginRight: "10px", width: "150px"}}
                type="text"
                id="name"
                name="user_name"
                placeholder="First Name"
                value={name}
                onInput={(e) => setName(e.target.value)}
                required
                />
                <input
                style={{marginRight: "10px", width: "150px"}}
                type="text"
                id="lname"
                name="user_lName"
                placeholder="Last Name"
                value={lName}
                onInput={(e) => setLName(e.target.value)}
                required
                />
            </div>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Email Address"
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