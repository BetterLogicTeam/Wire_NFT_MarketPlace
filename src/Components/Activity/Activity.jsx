import React from "react";
import './Activity.css'

function Activity() {
  return (
    <div>
      <section class="flat-title-page inner activepage_bg">
        <div class="overlay"></div>
        <div class="themesflat-container">
          <div class="row">
            <div class="col-md-12">
              <div class="page-title-heading mg-bt-12">
                <h1 class="heading text-center">Activity </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tf-activity s1 tf-section">
        <div class="themesflat-container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-12">
              <div class="sc-card-activity style1">
                <div class="content">
                  <div class="media">
                    <img src="images/box-item/card-item-10.jpg" alt="" />
                  </div>
                  <div class="infor">
                    <h3>
                      {" "}
                      <a href="item-details.html">Monica Lucas</a>
                    </h3>
                    <div class="status">
                      started following <span class="author">Gayle Hicks</span>
                    </div>
                    <div class="time">At 2:30 PM on 19th June, 2021</div>
                  </div>
                </div>
                <div class="button-active icon icon-1"></div>
              </div>
              <div class="sc-card-activity style1">
                <div class="content">
                  <div class="media">
                    <img src="images/box-item/image-box-10.jpg" alt="" />
                  </div>
                  <div class="infor">
                    <h3>
                      {" "}
                      <a href="item-details.html">
                        Wow! That Brain is Floating
                      </a>{" "}
                    </h3>
                    <div class="status">
                      {" "}
                      <span class="quote">10 editions listed </span> by
                      <span class="author"> Meowbids </span> for{" "}
                      <span class="quote"> 2.50 ETH</span>each
                    </div>
                    <div class="time">At 2:30 PM on 19th June, 2021</div>
                  </div>
                </div>
                <div class="button-active icon icon-2"></div>
              </div>
              <div class="sc-card-activity style1">
                <div class="content">
                  <div class="media">
                    <img src="images/box-item/image-box-11.jpg" alt="" />
                  </div>
                  <div class="infor">
                    <h3>
                      {" "}
                      <a href="item-details.html">
                        Erotic 35mm and polaroid photography
                      </a>{" "}
                    </h3>
                    <div class="status">
                      started following <span class="author">Gayle Hicks</span>
                    </div>
                    <div class="time">At 2:30 PM on 19th June, 2021</div>
                  </div>
                </div>
                <div class="button-active icon icon-3"></div>
              </div>
              <div class="sc-card-activity style1">
                <div class="content">
                  <div class="media">
                    <img src="images/box-item/image-box-21.jpg" alt="" />
                  </div>
                  <div class="infor">
                    <h3>
                      {" "}
                      <a href="item-details.html">Our Journey Start</a>{" "}
                    </h3>
                    <div class="status">
                      started following <span class="author">Gayle Hicks</span>
                    </div>
                    <div class="time">At 2:30 PM on 19th June, 2021</div>
                  </div>
                </div>
                <div class="button-active icon icon-4"></div>
              </div>
              <div class="sc-card-activity style1">
                <div class="content">
                  <div class="media">
                    <img src="images/box-item/image-box-6.jpg" alt="" />
                  </div>
                  <div class="infor">
                    <h3>
                      {" "}
                      <a href="item-details.html">Skrrt Cobain Official</a>{" "}
                    </h3>
                    <div class="status">
                      started following <span class="author">Gayle Hicks</span>
                    </div>
                    <div class="time">At 2:30 PM on 19th June, 2021</div>
                  </div>
                </div>
                <div class="button-active icon icon-5"></div>
              </div>

              <div class="btn-activity mg-t-40 center">
                <a href="#" class="sc-button loadmore fl-button pri-3">
                  <span>Load More</span>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-12">
              <div id="side-bar" class="side-bar style-2">
                <div class="widget widget-search mgbt-24">
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Enter your word art"
                      required=""
                    />
                    <button>
                      <i class="icon-fl-search-filled"></i>
                    </button>
                  </form>
                </div>

                <div class="widget widget-filter style-2 mgbt-0">
                  <h3 class="title-widget">Filter</h3>
                  <ul class="box-check">
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-sort-filled"></i>Listings
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-heart-filled"></i>Like
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-buy"></i>Purchases
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-discount"></i>Sales
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-logout"></i>Transfer
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-star"></i>Burns
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-credit-card"></i>Bids
                      </a>
                    </li>
                    <li>
                      <a href="#" class="box-widget-filter">
                        <i class="icon-fl-users-filled"></i>Followings
                      </a>
                    </li>
                  </ul>
                  <a href="#" class="clear-check btn-filter style-2">
                    Clear All Filters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Activity;
