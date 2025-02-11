import React from 'react';

const Contact = () => {
    return(
        <div className='contact-container'>
            <div style={{marginTop:'2vw', color: 'darkslategray'}}>
                <h1>CONTACT US ----</h1>
            </div>

            <div className='contact-img-info'>
                <img src='https://foreverbuy.in/assets/contact_img-CyOum2vk.png' width='400px' height='400px'/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p><strong>OUR STORE</strong></p>
                    <p>54709 Willms Station
                        Suite 350, Washington, USA

                        Tel: (415) 555-0132
                        Email: admin@forever.com
                    </p>
                    <p><strong>Careers at Forever</strong></p>
                    <p>Learn more about our teams and job openings.</p>
                    <button>Explore</button>
                </div>
            </div>
        </div>
    )
};

export default Contact;