import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
        <footer id="footer" class="footer-light-style clearfix footer_bg_here">
             <div class="themesflat-container">
                <div class="row">
                    <div class="col-lg-3 col-md-12 col-12">
                        <div class="widget widget-logo">
                            <div class="logo-footer" id="logo-footer">
                                <a href="index.html">
                                    <img id="logo_footer" src="images/logo/logo_dark.png" alt="nft-gaming" width="135" height="56" data-retina="assets/images/logo/logo_dark@2x.png" data-width="135" data-height="56"/>
                                </a>
                            </div>
                            <p>Set up and connect Metamask wallet for purchasing NFTs. Other wallet connectivity coming soon.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-5 col-5">
                        <div class="widget widget-menu style-1">
                            <h5 class="title-widget">My Account</h5>
                            <ul>
                                <li><a href="index.html"><Link to="/">Home</Link></a></li>
                                <li><a href="Explore.html"><Link to="/Explore_main">Explore</Link></a></li>
                                <li><a href="Activity.html"><Link to="/Activity">Activity</Link></a></li>
                                <li><a href="Community.html"><Link to="/Community">Community</Link></a></li>
                            </ul>
                        </div>
                    </div>
                     <div class="col-lg-2 col-md-4 col-sm-5 col-5">
                        <div class="widget widget-menu style-1">
                            <h5 class="title-widget">My Account</h5>
                            <ul>
                                <li><a href="Authors.html"><Link to="/Authors_main">Authors</Link></a></li>
                                <li><a href="Create.html"><Link to="/Create"> Create</Link></a></li>
                                <li><a href="contact.html"><Link to="/Contact"> Contact</Link></a></li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-sm-7 col-12">
                        <div class="widget widget-subcribe">
                            <h5 class="title-widget">Search</h5>
                            <div class="form-subcribe">
                                <form id="subscribe-form" action="#" method="GET" accept-charset="utf-8" class="form-submit">
                                    <input name="email" value="" class="email" type="email" placeholder="Search...." required=""/>
                                    <button id="submit" name="submit" type="submit"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                            <div class="widget-social style-1 mg-t32">
                                <ul>
                                    <li><a href="https://twitter.com/wireswap"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/Wireswap-102238962331272"><i class="fab fa-facebook"></i></a></li>
                                    
                                    <li class="style-2"><a href="https://t.me/Wireswap"><i class="fab fa-telegram-plane"></i></a></li>
                                    <li><a href="https://www.reddit.com/user/Wireswap"><i class="fa fa-reddit"></i></a></li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </footer>
    </div>
  )
}

export default Footer