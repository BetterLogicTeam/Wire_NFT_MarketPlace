import React, { useEffect, useState } from "react";
import "./Auction.css";
import { BsHandbagFill } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";
import axios from 'axios';
import women_drink from '../../assets/women_drink.jpg'
import Auction_Model from "../Auction_Model/Auction_Model";
import Biding_Model from "../Biding_Model/Biding_Model";





function Auction() {

  const [ApiData, setApiData] = useState()
  const [modelopen, setmodelopen] = useState(false)
  let [bidingModel, setbidingModel] = useState(false)
  const [idx, setidx] = useState("")


  const auction = async () => {

    let res = await axios.get(`https://whenftapi.herokuapp.com/OnAuction_marketplace_history?id=100`);
    console.log("ressssssss", res.data.data);
    res = res.data.data;

    setApiData(res)
  };


  const fatchindex=(index)=>{
    setbidingModel(true)
    console.log("check_id",index);
    setidx(index)
  }

  useEffect(() => {
    auction()
  }, [])
  return (
    <div>
                          <Biding_Model setbidingModel={setbidingModel} bidingModel={bidingModel} idx={idx} />


      <section class="tf-section live-auctions style1 pad-b-54 mobie-style bg_img_here_auction">
        <div class="themesflat-container">
          <div class="row">
            <div class="col-md-12">
              <div class="heading-live-auctions">
                <h2 class="tf-title pb-18">Live Auctions</h2>
                <a href="explore-3.html" class="exp style2">
                  EXPLORE MORE
                </a>
              </div>
            </div>
            <div class="col-md-12">
              <div class="swiper-container show-shadow carousel pad-t-17 auctions">
                <div class="row">


                  {
                    ApiData?.map((items, index) => {
                      return (
                        <>


                          <div class="col-md-3 swiper-slide"  >
                            <div class="slider-item">
                              <div class="sc-card-product">
                                <div class="card-media">
                                  <a>
                                    <img
                                      src={women_drink}
                                      alt="Image"
                                      style={{ width: "400px", height: "250px" }}
                                    />
                                  </a>
                                  <button class="wishlist-button heart">
                                    <span class="number-like"> 100</span>
                                  </button>
                                  <div class="featured-countdown" >
                                    <MdLocalFireDepartment />
                                    <span class=""></span>
                                    <span
                                      class="js-countdown"
                                      data-timer="516400"
                                      data-labels=" :  ,  : , : , "
                                    ></span>
                                  </div>
                                  <div class="button-place-bid" onClick={() => fatchindex(index)} >
                                    <a


                                      class="sc-button style-place-bid style fl-button pri-3"

                                    >
                                      <BsHandbagFill className="fs-2 mt-n5" />
                                      <span className="fs-3 mt-3" >Place Bid</span>
                                    </a>
                                  </div>
                                </div>
                                <div class="card-title">
                                  <h5>
                                    <a>
                                      {items?.name}
                                    </a>
                                  </h5>
                                  <div class="tags">bsc</div>
                                </div>
                                <div class="meta-info">
                                  <div class="author">
                                    <div class="avatar">
                                      <img src={women_drink} alt="Image" style={{ width: "50px", height: "50px" }} />
                                    </div>
                                    <div class="info">
                                      <span>Creator</span>
                                      <h6>
                                        {" "}
                                        <a >
                                          {items?.useraddress.substring(0, 4) + "..." + items?.useraddress.substring(items?.useraddress.length - 4)}
                                        </a>{" "}
                                      </h6>
                                    </div>
                                  </div>
                                  <div class="price">
                                    <span>Current Price</span>
                                    <h5> {items?.price} BNB</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </>
                      )
                    })
                  }


                  {/* <div class="col-md-3 swiper-slide">
                    <div class="slider-item">
                      <div class="sc-card-product">
                        <div class="card-media active">
                          <a href="item-details.html">
                            <img
                              src="images/box-item/image-box-10.jpg"
                              alt="Image"
                            />
                          </a>
                          <button class="wishlist-button heart">
                            <span class="number-like"> 220</span>
                          </button>
                          <div class="featured-countdown">
                          <MdLocalFireDepartment />
                            <span class=""></span>
                            <span
                              class="js-countdown"
                              data-timer="81640"
                              data-labels=" :  ,  : , : , "
                            ></span>
                          </div>
                          <div class="button-place-bid">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              class="sc-button style-place-bid style fl-button pri-3"
                            >
                              <BsHandbagFill />
                              <span>Place Bid</span>
                            </a>
                          </div>
                        </div>
                        <div class="card-title">
                          <h5 class="style2">
                            <a href="item-details.html">
                              "Triumphant Awakening Contemplates "
                            </a>
                          </h5>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src="images/avatar/avt-12.jpg" alt="Image" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                {" "}
                                <a href="author02.html">Trista Francis</a>{" "}
                              </h6>
                            </div>
                          </div>
                          <div class="price">
                            <span>Current Bid</span>
                            <h5> 4.89 ETH</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div class="col-md-3 swiper-slide">
                    <div class="slider-item">
                      <div class="sc-card-product">
                        <div class="card-media">
                          <a href="item-details.html">
                            <img
                              src="images/box-item/image-box-11.jpg"
                              alt="Image"
                            />
                          </a>
                          <button class="wishlist-button heart">
                            <span class="number-like"> 90</span>
                          </button>
                          <div class="featured-countdown">
                          <MdLocalFireDepartment />
                            <span class=""></span>
                            <span
                              class="js-countdown"
                              data-timer="316400"
                              data-labels=" :  ,  : , : , "
                            ></span>
                          </div>
                          <div class="button-place-bid">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              class="sc-button style-place-bid style fl-button pri-3"
                            >
                              <BsHandbagFill />
                              <span>Place Bid</span>
                            </a>
                          </div>
                        </div>
                        <div class="card-title">
                          <h5 class="style2">
                            <a href="item-details.html">
                              "Living Vase 01 by Lanza Contemplates "
                            </a>
                          </h5>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src="images/avatar/avt-13.jpg" alt="Image" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                {" "}
                                <a href="author02.html">
                                  Freddie Carpenter
                                </a>{" "}
                              </h6>
                            </div>
                          </div>
                          <div class="price">
                            <span>Current Bid</span>
                            <h5> 4.89 ETH</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 swiper-slide">
                    <div class="slider-item">
                      <div class="sc-card-product">
                        <div class="card-media">
                          <a href="item-details.html">
                            <img
                              src="images/box-item/image-box-21.jpg"
                              alt="Image"
                            />
                          </a>
                          <button class="wishlist-button heart">
                            <span class="number-like"> 145</span>
                          </button>
                          <div class="featured-countdown">
                          <MdLocalFireDepartment />
                            <span class=""></span>
                            <span
                              class="js-countdown"
                              data-timer="716400"
                              data-labels=" :  ,  : , : , "
                            ></span>
                          </div>
                          <div class="button-place-bid">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#popup_bid"
                              class="sc-button style-place-bid style fl-button pri-3"
                            >
                              <BsHandbagFill />
                              <span>Place Bid</span>
                            </a>
                          </div>
                        </div>
                        <div class="card-title">
                          <h5 class="style2">
                            <a href="item-details.html">
                              "Flame Dress' by Balmain Contemplates "
                            </a>
                          </h5>
                          <div class="tags">bsc</div>
                        </div>
                        <div class="meta-info">
                          <div class="author">
                            <div class="avatar">
                              <img src="images/avatar/avt-14.jpg" alt="" />
                            </div>
                            <div class="info">
                              <span>Creator</span>
                              <h6>
                                {" "}
                                <a href="author02.html">Tyler Covington</a>{" "}
                              </h6>
                            </div>
                          </div>
                          <div class="price">
                            <span>Current Bid</span>
                            <h5> 4.89 ETH</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Auction;
