import AllRights from "../Foot/AllRights"
import Form from "../Form";

const Newsletter = () => {
    return (
        <>
            <section className="hero-container">
                <div className='divide'>
                    <div className="image-container">
                    </div>
                    <div className='main-container flex-column justify-between'>
                        <div>
                            <h1 className='join'>Join Our <spam className="news">Newsletter</spam></h1>
                        </div>
                        <div className='middle-text'>
                            <h2>For Barbers Like You!</h2>
                            <p>This first-ever app brings the power of mobility and real-time booking to barbers across national territory, enabling you to expand your reach and grow your business like never before.</p>
                        </div>
                        <div className='form-container'>
                            <h3>Newsletter</h3>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
            <AllRights />
        </>
    )
}

export default Newsletter;