import React from 'react'
import './Style.css'

export default function Home() {
  return (
    <>
        <div className='main-container'>
            <nav id="main-navbar" className='navbar'>
            <div className='nab'>
            <div className='div-container'>
            <a className='navbar-a-img' style={{width:"240px"}}>
                <img className="nav-img" src='assets/specscart.png' />
            </a>
            </div>
            <div className='top-menu'>
            <div className='left-side'>
                <a className='free'>Free Returns</a>
                <a className='try'>Try At Home</a>
                <a className='hr24'>24 Hr Dispatch</a>
            </div>
            <div className='right-side'>
                <a className='num'>+4444(xxxxx)</a>
                <a className='help'>Help</a>
                <a className='login'>Login</a>
                <a className='register'>Register</a>
            </div>
            </div>
            <div className='bottom-menu'>
            <div className='b-left-side'>
            <ul>
            <a><li className='glass'>Glasses</li></a>
            <a><li className='sunglass'>Sunglasses</li></a>
            <a><li className='eyetest'>Eye-Test</li></a>
            <a><li className='blog'>Blogs</li></a>
            </ul>
            </div>
            <div className='b-right-side'>
                <a className='icon-search'><img className='icon' src='assets/Group 2964.png'/></a>
                <a className='icon-account'><img className='icon' src='assets/Group 2966.png'/></a>
                <a className='icon-heart'><img className='icon' src='assets/Group 2965.png'/></a>
                <a className='icon-lens'><img className='icon' src='assets/Group 2967.png'/></a>
                <a className='icon-cart'><img className='icon' src='assets/Cart.png'/></a>
            </div>
            </div>
            </div>
            </nav>
        </div>
        <div className='second-main-container'>
            <div className='main-first'>
                <p className='p-home'>Home Trial Card 2.0</p>
                <h4 className='heading-it'>It's An Experience</h4>
                <h4 className='heading-four'>Four Frames. Three Lens. 1Laser</h4>
                <div className='btn-grp'>
                <button className='btn-try'>Try Now</button>
                <button className='btn-play'><i className="fa-solid fa-play icon-play"></i></button><span className='text-watch'>Watch Whats New</span>
                </div>
            </div>
            <div className='second-first'>
                <img className="img-pen" src="assets/Image 35.png"/>
                <img className="img-book" src="assets/Image 39.png"/>
                <img className="img-scrap" src="assets/Group 6248.png"/>
            </div>
        </div>
        <div className='third-main-container'>
        <h2 className='text-first'>4 frames, 3 lenses, 7 days - direct to your home.</h2>
        <p className='text-second'>We get it - sometimes you need to hold the glasses in your hand (or take a selfie wearing them) to know if they're made for you or not. With our Free Home Trial, get 4 frames of your choice at your home, along with 3 cool lenses</p>
        <div className='third-main-img-container'>
        <div className='third-main-image'>
        <img className="third-main-image-img" src='assets/7.jpg'/>
        <div className='third-main'>
        <h5 className='text-anti'>Anti Reflective Glasses</h5>
        <div className='btn-men-women'>
        <button className='btn-men'>Shop Men</button>
        <button className='btn-women'>Shop Women</button>
        </div>
        </div>
        </div>
        <div className='third-main-img-container-second'>
        <div className='text-second-container'>
            <h3 className='text-coating'>Free Coatings</h3>
        </div>
        <div className='text-second-container2'>
        <p className='text-at'>At Specscart - it's Free and will always be.</p>
        <ul>
            <li><img className='icon-2' src='assets/Group 5636.png'/> Anti-UV</li>
            <li><img className='icon-2' src='assets/Group 5544.png'/> Anti-Glare</li>
            <li><img className='icon-2' src='assets/Group 5556.png'/> Impact Resistance</li>
            <li><img className='icon-2' src='assets/Group 5547.png'/> Anti-Scratch</li>
        </ul>
        <img className="image-glass" src='assets/Image 30.png'/>
        </div>
        <div className='left-side-arrow2'>
        <i className="fa-solid fa-angle-left"></i>
        </div>
        </div>
        <div className='third-main-img-container-third'>
        <div className='text-third-container'>
        <h3 className='text-dispatch'>24H Dispatch</h3>
        <p className='text-across'>Free Shipping Across the Globel</p>
        </div>
        <div className='img-aero'>
            <img src='assets/Group 6249.png'/>
        </div>
            <i className="fa-solid fa-angle-left left-side-arrow"></i>
        </div>
        </div>
        </div>
        <div className='four-main-container'>
            <h2 className='four-text-first'>Your eyes are splendid. Let people see them clearly.</h2>
            <p className='four-text-second'>We know how to frustrating glasses glare can be. Anti-reflective or anti-glare coating prevents glare on your lenses - letting almost all light through. Not only do anti-reflective glasses help in computer use and driving at night, they also allow other people to see you clearly. You don't need to tilt your head at awkward angles while getting photographed, either! Since more light reaches your eyes, you'll also notice an improvement in your vision. And the best part? Anti-glare, anti-scratch, and anti-UV coastings are all free of cost at Specscart!</p>
            <div className='traffic'>
            <img className='traffic-img' src='assets/1501707394942.jpg'/>
            <div className='img-outer'>
            <div className='img-outer-inner'>
            <div className='left-right'>
            <i className="fa-solid fa-play left-play" style={{transform:"rotate(180deg)"}}></i>
            <i className="fa-solid fa-play right-play"></i>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='fifth-main-container'>
            <h2 className='text-google'>Google & Fb Reviews</h2>
            <div className='img-review'>
            <button className='left-icon'><i className="fa-solid fa-chevron-left "></i></button>
            <div className='main-google'>
            <div className='bundle-image'>
            <img className="img-google1" src='assets/808675.png'/>
            <img className="img-google2" src='assets/5cb30b93b42e95ee807cc073b66ea1a2.png'/>
            <img className="img-google3" src='assets/freepressjournal_import_2017_10_Tom-Cruise.png'/>
            <img className="img-google4" src='assets/808675.png'/>
            <img className="img-google5" src='assets/5cb30b93b42e95ee807cc073b66ea1a2.png'/>
            </div>
            <h3 className='bundle-image-name'>Joshua Segar</h3>
            <div className='icon-start'>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </div>
            <p className='bundle-image-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum error perspiciatis, totam fugit aliquam possimus magni distinctio neque non. Blanditiis rem ducimus magnam eveniet, maxime, mollitia nihil dolor deleniti. Nostrum nesciunt maiores voluptate, quo cumque deleniti. Perspiciatis quasi ex provident est doloremque! Sit saepe quidem temporibus ipsam et, vel, voluptate!</p>
            </div>
            <button className='right-icon'><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
        <div className='sixth-main-container'>
            <img src='assets/Parallax Background.jpg'/>
            <div className='sixth-main-container-g1'>
           
            <img src='assets/G1.jpg'/>
            </div>
            <div className='sixth-main-container-desk'>
            <img src='assets/Desk4.jpg'/>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum pariatur totam suscipit, quia nulla quis magni tempora asperiores dolorem consequatur.</p> */}
            </div>
        </div>
        <div className='seven-main-container'>
            <div className='container1'>
            <div className='top-icon'>
                <img src='assets/Group 2965.png'/>
            </div>
            <div className='main-icon'>
                <img src='assets/Glass1.jpg'/>
            </div>
            <div className='color-code'>
                <div className='color1'></div>
                <div className='color2'></div>
                <div className='color3'></div>
                <div className='color4'></div>
            </div>
            <div className='text-item'>
                <p className='text-tom'>Tom Archer</p>
                <h2 className='text-darwen'>DARWEN 1</h2>
                <p className='text-strike'><strike>$49.99</strike></p>
                <p className='text-price'>$39.99</p>
            </div>
            </div>
            <div className='container1'>
            <div className='top-icon'>
                <img src='assets/Group 2965.png'/>
            </div>
            <div className='main-icon'>
                <img src='assets/Glass2.jpg'/>
            </div>
            <div className='color-code'>
                <div className='color1'></div>
                <div className='color2'></div>
                <div className='color3'></div>
                <div className='color4'></div>
            </div>
            <div className='text-item'>
                <p className='text-tom'>Tom Archer</p>
                <h2 className='text-darwen'>DARWEN 1</h2>
                <p className='text-strike'><strike>$49.99</strike></p>
                <p className='text-price'>$39.99</p>
            </div>
            </div>
        </div>
            <div className='glass-btn-grp'>
                <button className='btn-glass-view'>View</button>
                <button className='btn-glass-home'>Try At Home</button>
            </div>
            {/* <hr/> */}
            <div className='footer-container'>
                <div className='footer-first'>
                <img  className='image-svg' src='assets/logo_symbol.svg'/>
                <hr style={{marginTop:"20px",marginBottom:"0px"}}/>
                </div>
                <div className='footer-second'>
                    <div className='footer-glasses'>
                    <h4 className='text-footer-glasses'>Glasses</h4>
                        <ul>
                            <li>Round Glasses</li>
                            <li>Wayfarer Glasses</li>
                            <li>Cat Eye Glasses</li>
                            <li>Rectangular Glasses</li>
                            <li>Rimless Glasses</li>
                            <li>Verifocal Glasses</li>
                            <li>Transitions Glasses</li>
                        </ul>
                    </div>

                    <div className='footer-sunglasses'>
                    <h4 className='text-footer-sunglasses'>SunGlasses</h4>
                        <ul>
                            <li>Aviator Sunglasses</li>
                            <li>Round Sunglasses</li>
                            <li>Cat Eye Sunglasses</li>
                            <li>Wayfare Sunglasses</li>
                            <li>Designer Sunglasses</li>
                            <li>Polarised Sunglasses</li>
                            <li>Prescription Sunglasses</li>
                        </ul>
                    </div>

                    <div className='footer-help'>
                    <h4 className='text-footer-help'>Help & faq</h4>
                        <ul>
                            <li>Your Prescription</li>
                            <li>Digital Blue Glasses</li>
                            <li>Lenses & Coatings</li>
                            <li>Anti Reflective Lenses</li>
                            <li>How to order</li>
                            <li>Delivery Information</li>
                            <li>Free Returns</li>
                        </ul>
                    </div>

                    <div className='footer-about'>
                    <h4 className='text-footer-about'>About us</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Contact Us</li>
                            <li>Our Blog</li>
                            <li>Privacy Policy</li>
                            <li>Franschise</li>
                        </ul>
                    </div>
                    <div className='subscribe'>
                        <div className='first-sub'>
                        <h2 className='subs'>subscribe</h2>
                        <h2 className='cons'>Contact Us</h2>
                        </div>
                        <div className='input-box'>
                            <input type='text' className='input-text' placeholder='Search For Newlatter'/><button className='input-btn'><i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                        <div className='social-icon'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>

                </div>
                <div className='develop'>
                    <div className='footer-left-side'>
                        <h4>Develop By Nishtha Prakash</h4>
                    </div>
                    <div className='footer-right-side'>
                        <ul>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}
