import React from 'react';
import b1img from '../assets/img/core-img/b1.png';
import b2img from '../assets/img/core-img/b2.png';
import b3img from '../assets/img/core-img/b3.png';
import b4img from '../assets/img/core-img/b4.png';
import s1img from '../assets/img/core-img/s1.png';
import s2img from '../assets/img/core-img/s2.png';
import s3img from '../assets/img/core-img/s3.png';
import i23img from '../assets/img/bg-img/23.jpg';
import i13img from '../assets/img/bg-img/13.jpg';
import i14img from '../assets/img/bg-img/14.jpg';
import i15img from '../assets/img/bg-img/15.jpg';
import icf1img from '../assets/img/core-img/cf1.png';
import icf2img from '../assets/img/core-img/cf2.png';
import icf3img from '../assets/img/core-img/cf3.png';
import icf4img from '../assets/img/core-img/cf4.png';
import potimg  from '../assets/img/core-img/pot.png';
import team1img from '../assets/img/bg-img/team1.png';
import team2img from '../assets/img/bg-img/team2.png';
import team3img from '../assets/img/bg-img/team3.png';
import team4img from '../assets/img/bg-img/team4.png';



function About() {
  return (
    <>
      <section class="about-us-area mt-4">
          <div class="container">
              <div class="row justify-content-between">
                  <div class="col-12 col-lg-5">
                      <div class="section-heading">
                          <h2>ABOUT US</h2>
                          <p>We are leading in the plants service fields.</p>
                      </div>
                      <p>Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.</p>

                      <div class="alazea-progress-bar mb-50">
                          <div class="single_progress_bar">
                              <p>Office plants</p>
                              <div id="bar1" class="barfiller">
                                  <div class="tipWrap">
                                      <span class="tip"></span>
                                  </div>
                                  <span class="fill" data-percentage="80"></span>
                              </div>
                          </div>

                          <div class="single_progress_bar">
                              <p>Field manager</p>
                              <div id="bar2" class="barfiller">
                                  <div class="tipWrap">
                                      <span class="tip"></span>
                                  </div>
                                  <span class="fill" data-percentage="70"></span>
                              </div>
                          </div>

                          <div class="single_progress_bar">
                              <p>Landscape design</p>
                              <div id="bar3" class="barfiller">
                                  <div class="tipWrap">
                                      <span class="tip"></span>
                                  </div>
                                  <span class="fill" data-percentage="85"></span>
                              </div>
                          </div>

                          <div class="single_progress_bar">
                              <p>Garden Care</p>
                              <div id="bar4" class="barfiller">
                                  <div class="tipWrap">
                                      <span class="tip"></span>
                                  </div>
                                  <span class="fill" data-percentage="65"></span>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-12 col-lg-6">
                      <div class="alazea-benefits-area">
                          <div class="row">
                              <div class="col-12 col-sm-6">
                                  <div class="single-benefits-area">
                                      <img src={b1img} alt="" /> 
                                      <h5>Quality Products</h5>
                                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                  </div>
                              </div>

                              <div class="col-12 col-sm-6">
                                  <div class="single-benefits-area">
                                      <img src={b2img} alt="" />  
                                      <h5>Perfect Service</h5>
                                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                  </div>
                              </div>

                              <div class="col-12 col-sm-6">
                                  <div class="single-benefits-area">
                                      <img src={b3img} alt="" />
                                      <h5>100% Natural</h5>
                                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                  </div>
                              </div>

                              <div class="col-12 col-sm-6">
                                  <div class="single-benefits-area">
                                      <img src={b4img} alt="" />
                                      <h5>Environmentally friendly</h5>
                                      <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="border-line"></div>
                  </div>
              </div>
          </div>
      </section>

      <section class="our-services-area bg-gray section-padding-100-0">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="section-heading text-center">
                          <h2>OUR SERVICES</h2>
                          <p>We provide the perfect service for you.</p>
                      </div>
                  </div>
              </div>

              <div class="row align-items-center justify-content-between">
                  <div class="col-12 col-lg-5">
                      <div class="alazea-service-area mb-100">

                          <div class="single-service-area d-flex align-items-center">
                              <div class="service-icon mr-30">
                                  <img src={s1img} alt="" />
                              </div>
                              <div class="service-content">
                                  <h5>Plants Care</h5>
                                  <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                              </div>
                          </div>

                          <div class="single-service-area d-flex align-items-center">
                              <div class="service-icon mr-30">
                                  <img src={s2img} alt="" />
                              </div>
                              <div class="service-content">
                                  <h5>Pressure Washing</h5>
                                  <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                              </div>
                          </div>

                          <div class="single-service-area d-flex align-items-center">
                              <div class="service-icon mr-30">
                                  <img src={s3img} alt="" />
                              </div>
                              <div class="service-content">
                                  <h5>Tree Service &amp; Trimming</h5>
                                  <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                              </div>
                          </div>

                      </div>
                  </div>

                  <div class="col-12 col-lg-6">
                      <div class="alazea-video-area bg-overlay mb-100">
                          <img src={i23img} alt="" />
                          <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" class="video-icon">
                              <i class="fa fa-play" aria-hidden="true"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section class="team-area section-padding-100-0">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="section-heading text-center">
                          <h2>OUR TEAM</h2>
                          <p>A team of dedicated experienced professionals.</p>
                      </div>
                  </div>
              </div>

              <div class="row">

                  <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single-team-member text-center mb-100">
                          <div class="team-member-thumb">
                              <img src={team1img} alt="" />
                              <div class="team-member-social-info">
                                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <div class="team-member-info mt-30">
                              <h5>Joseph Corbin</h5>
                              <p>CEO &amp; Founder</p>
                          </div>
                      </div>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single-team-member text-center mb-100">
                          <div class="team-member-thumb">
                              <img src={team2img} alt="" />
                              <div class="team-member-social-info">
                                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <div class="team-member-info mt-30">
                              <h5>Tasha Deserio</h5>
                              <p>Garden Designer</p>
                          </div>
                      </div>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single-team-member text-center mb-100">
                          <div class="team-member-thumb">
                              <img src={team3img} alt="" />
                              <div class="team-member-social-info">
                                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <div class="team-member-info mt-30">
                              <h5>Cody Baker</h5>
                              <p>Plan Manager</p>
                          </div>
                      </div>
                  </div>

                  <div class="col-12 col-sm-6 col-lg-3">
                      <div class="single-team-member text-center mb-100">
                          <div class="team-member-thumb">
                              <img src={team4img} alt="" />
                              <div class="team-member-social-info">
                                  <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                                  <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                              </div>
                          </div>
                          <div class="team-member-info mt-30">
                              <h5>Pearl Kansas</h5>
                              <p>Marketer</p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>
    </>
  )
}

export default About