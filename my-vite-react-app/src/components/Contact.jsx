import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <>
        <div className='ContactContainer'>
            <div className='ContactBox'>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095046!2d144.9537353153133!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e9b1%3A0x5045675218ceed0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1615982304955!5m2!1sen!2sau"
                        width="700"
                        height="700"
                        border= '0'
                        loading="lazy">
                    </iframe>
                </div>
                <div>
                    
                    <div className='ContactForm'>
                        <div className='ContactText'>Contact</div>
                        <div>Name</div>
                        <input className='ContactInput' type="text" placeholder='Fullname'/>
                        <div>Email</div>
                        <input className='ContactInput'  type="text" placeholder='email@gmail.com'/>
                        <div>Phone</div>
                        <input className='ContactInput'  type="text" placeholder='000-000-000'/>
                        <div>Comment</div>
                        <input className=' ContactComment' type="text" placeholder='Leave a message here'/>
                    </div>
                    <button className='ContactSendBtn'>Send</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
