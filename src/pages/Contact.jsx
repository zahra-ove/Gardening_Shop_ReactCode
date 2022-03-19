import React from 'react';
import i25img from '../assets/img/bg-img/25.jpg';


function Contact() {
  return (
    <>
        <div class="contact-area-info section-padding-0-100 mt-4">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-12 col-md-6">
                        <div class="contact--thumbnail">
                            <img src={i25img} alt="" />
                        </div>
                    </div>

                    <div class="col-12 col-md-5">
                        <div class="section-heading">
                            <h2>CONTACT US</h2>
                            <p>We are improving our services to serve you better.</p>
                        </div>
                        <div class="contact-information">
                            <p><span>Address:</span> 505 Silk Rd, New York</p>
                            <p><span>Phone:</span> +1 234 122 122</p>
                            <p><span>Email:</span> info.deercreative@gmail.com</p>
                            <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                            <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="contact-area">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="col-12 col-lg-10 marg">
                        <div class="map-area mb-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact