import { Link } from 'preact-router/match'; 

const Foot = ({hasBtn=true}) => {
    return (
        <div className="foot">
            <p>
                Where convenience meets quality. 
                Pre-signup now to get a head start at launch and let <strong>OnYou</strong> help grow your business.
            </p>
            {hasBtn ? <Link class="cta-button" href="/pre-signup">Go to Pre-Signup</Link> : null}
            <section class="social-media">
                <div class="social-icons">
                    <a href="https://www.facebook.com" target="_blank" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" class="social-icon">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" class="social-icon">
                        <i class="fab fa-tiktok"></i>
                    </a>
                </div>
            </section>
            <p>&copy; 2024 OnYou. All Rights Reserved.</p>
        </div>
    )
}

export default Foot;