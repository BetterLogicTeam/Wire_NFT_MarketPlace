
import React from "react";

import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import Auction from "./Auction/Auction";
import Seller from "./Seller/Seller";
import Explore from "./Explore/Explore";
import Collection from "./Collection/Collection";
import Nft from "./Nft/Nft";
import Footer from "./Footer/Footer";




export default function Index_main() {
    return (
      <div>
       
      <Landing />
      <Auction />
      <Seller />
      <Explore />
      <Collection />
      <Nft />
    
    
      </div>
    );
  }