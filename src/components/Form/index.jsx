import { useState } from 'preact/hooks';
import emailjs from 'emailjs-com';

emailjs.init('CsPIUAk0EkBOtXamM');

const Form = ({isHome=false}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lName, setLName] = useState('');
    const [accept, setAccept] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    console.log(accept)

    const handleTerms = () => {
        setAccept(!accept);
      };

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

        //add this for auto-reply
        // const autoReply = {
        //     to_name: `${name}`,  // From name (you can replace this with dynamic user input)
        //     to_lName: `${lName}`,
        //     to_email: `${email}`,
        //     from_email: 'b2ucut@gmail.com',// Sender's email
        // };
        // emailjs.send(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID}`, autoReply)
        // .then(function(response) {
        //     console.log("Auto-reply sent successfully:", response);
        // }, function(error) {
        //     console.log("Error sending auto-reply:", error);
        // });

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
        <>
            {!success ? <form className={isHome ? 'hero-form' : null} onSubmit={handleSubmit}>
                <div className='flex'>
                    <input
                    className='form-input'
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="First Name"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                    required
                    />
                    <input
                    className='form-input'
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
                <label style={{display: "flex", alignItems:"center", fontSize: "10px", padding:"15px", cursor:"pointer"}}>
                    <input
                    className='checkbox-input'
                    type="checkbox"
                    id="term"
                    name="user_terms"
                    checked={accept}
                    onChange={handleTerms}
                    required
                    />
                    Aceita o nossos Termos de serviço?
                </label>
                <button className='subcrib-btn' type="submit" disabled={loading || success?.length}>
                {loading ? 'Sending...' : 'Subscribe'}
                </button>
            </form> : null}
            {success && <p>{success}</p>}
        </>
    )
}

export default Form