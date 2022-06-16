import React from "react";
import Seller from "./Seller/Seller";
import Collection from "./Collection/Collection";

export default function Authors_main() {
  return (
    <div>

<div class="breadcrumb-area" >
<section class="flat-title-page inner activepage_bg">
        <div class="overlay"></div>
        <div class="themesflat-container">
          <div class="row">
            <div class="col-md-12">
              <div class="page-title-heading mg-bt-12">
                <h1 class="heading text-center">Authors </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      <Seller />
      <Collection />
    </div>
  );
}
