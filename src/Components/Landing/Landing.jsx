import React from "react";
import "./Landing.css";
import { IoIosRocket } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im";

function Landing() {
  return (
    <div>
      <section class="flat-title-page style2">
        <img
          class="bgr-gradient gradient1"
          src="images/backgroup-secsion/bg-gradient1.png"
          alt=""
        />
        <img
          class="bgr-gradient gradient2"
          src="images/backgroup-secsion/bg-gradient2.png"
          alt=""
        />
        <img
          class="bgr-gradient gradient3"
          src="images/backgroup-secsion/bg-gradient3.png"
          alt=""
        />
        <div class="shape item-w-16"></div>
        <div class="shape item-w-22"></div>
        <div class="shape item-w-32"></div>
        <div class="shape item-w-48"></div>
        <div class="shape style2 item-w-51"></div>
        <div class="shape style2 item-w-51 position2"></div>
        <div class="shape item-w-68"></div>

        <div class="overlay"></div>
        <div class="swiper-container mainslider home auctions">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slider-item">
                <div class="themesflat-container ">
                  <div class="wrap-heading flat-slider flex">
                    <div class="content ">
                      <h2 class="heading">Discover, find,</h2>
                      <h1 class="heading mb-style">
                        <span class="tf-text s1">Sell extraordinary NFTs</span>
                      </h1>
                      <h1 class="heading">ON WIRE NFT</h1>
                      <p class="sub-heading mg-t-29 mg-bt-44">
                        Marketplace for WIRE character cllections non fungible
                        token NFTs
                      </p>
                      <div class="flat-bt-slider flex style2">
                        <a
                          href="explore-1.html"
                          class="sc-button header-slider style_icon style style-1 fl-button "
                        >
                          <IoIosRocket />
                          <span>Explore</span>
                        </a>
                        <a
                          href="create-item.html"
                          class="sc-button header-slider style_icon style style-1 fl-button pri-1"
                        >
                          <ImFilesEmpty />
                          <span>Create</span>
                        </a>
                      </div>
                    </div>
                    <div class="image">
                      <img
                        class="img-bg"
                        src="images/backgroup-secsion/img-bg-sliderhome2.png"
                        alt="Image"
                      />
                      <img src="images/box-item/imgslider2.png" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slider-item">
                <div class="themesflat-container">
                  <div class="wrap-heading flat-slider text-center two">
                    <h2 class="heading">Discover, and collect</h2>
                    <h1 class="heading">
                      <span class="tf-text s1">extraordinary</span>
                      <span>WIRE NFTs</span>
                    </h1>
                    <p class="sub-heading mg-t-29 mg-bt-50">
                      Marketplace for WIRE character cllections non fungible
                      token NFTs
                    </p>
                    <div class="flat-bt-slider flex">
                      <a
                        href="explore-1.html"
                        class="sc-button header-slider style style-1 rocket fl-button pri-1"
                      >
                        <span>Explore</span>
                      </a>
                      <a
                        href="create-item.html"
                        class="sc-button header-slider style style-1 note fl-button pri-1"
                      >
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slider-item">
                <div class="themesflat-container flex">
                  <div class="image three">
                    <img src="images/box-item/imgslider-3.png" alt="Image" />
                    <img
                      class="img-bg"
                      src="images/backgroup-secsion/img-bg-sliderhome3.png"
                      alt="Image"
                    />
                  </div>
                  <div class="wrap-heading flat-slider h3 three">
                    <h2 class="heading">Discover, and collect</h2>
                    <h2 class="heading">extraordinary</h2>
                    <h2 class="heading h3">
                      <span class="fill">WIRE </span>NFTs
                    </h2>
                    <p class="sub-heading mt-29 mb-35">
                      Marketplace for WIRE character cllections non fungible
                      token NFTs
                    </p>
                    <div class="flat-bt-slider flex style2">
                      <a>
                        <IoIosRocket />
                        <span>Explore</span>
                      </a>
                      <a
                        href="Create.html"
                        class="sc-button header-slider style style-1 note fl-button pri-1"
                      >
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="swiper-button-next btn-slide-next active"></div>
        <div class="swiper-button-prev btn-slide-prev"></div>
      </section>
    </div>
  );
}

export default Landing;
