import React, { useEffect, useState } from 'react'
import { BsHandbagFill } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { loadWeb3 } from '../Components/Api/api';
import { wireNftContractAbi, wireNftContractAddress } from '../Components/Utils/wireNft';
import { useMoralisWeb3Api, useMoralis } from "react-moralis";
import { Link, useHistory, useNavigate } from "react-router-dom";



export default function My_collection() {
    let myHistory = useNavigate();


    const Web3Api = useMoralisWeb3Api();
    const [nftdata, setnftdata] = useState([]);

    let imageArray = [];


    const fetch_Data = async () => {

        let acc = await loadWeb3();

        const options = {
            chain: "Bsc Testnet",
            address: acc,
        };

        const polygonNFTs = await Web3Api?.account?.getNFTs(options);

        console.log("polygonNFTs", polygonNFTs.result);
        let res = polygonNFTs.result;
        // console.log("length", res);
        let loopLength = res.length;
        // console.log("Bahir", loopLength);
        // for(let j=0;j<loopLength;j++){
        //   let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call();
        //       let res_here = await axios.get(
        //         `https://gateway.pinata.cloud/ipfs/QmXQc7AEmCqrtShVv3k5PdRbhfwgMoHL1HKXMZU4seCe9S/${walletOfOwner[j]}.jpg`
        //       );
        //       // let imageUrl = res.data.image;
        //       // let dna = res.data.dna
        //       // simplleArray = [...simplleArray, { imageUrl: res }];
        //       console.log("img_url",res_here);
        // }

        for (let i = 0; i < loopLength; i++) {
            console.log("count", i);
            // console.log("length", res[i]);
            // console.log("Images , ", res[i].token_uri);
            //   let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call();


            // let res_here = await axios.get(
            //   `https://gateway.pinata.cloud/ipfs/QmXQc7AEmCqrtShVv3k5PdRbhfwgMoHL1HKXMZU4seCe9S/${walletOfOwner[i]}.jpg`
            // );
            // let imageUrl = res.data.image;
            // let dna = res.data.dna
            // simplleArray = [...simplleArray, { imageUrl: res }];
            // console.log("img_url",imageUrl);
            // let img_url=res_here.config.url;
            let jsonUsrl = res[i].token_uri;
            let name = res[i].name;
            let owner_of = res[i].owner_of;
            let token_address = res[i].token_address;
            let amount = res[i].amount;
            let symbol = res[i].symbol;
            let token_id = res[i].token_id;
            // if (jsonUsrl.startsWith("ipfs")) {
            //   jsonUsrl= "https://ipfs.moralis.io:2053/ipfs/" + jsonUsrl.split("ipfs://ipfs").slice(-1)[0];
            // console.log("jsonUsrl",jsonUsrl);

            // } else {
            //   jsonUsrl= jsonUsrl
            // console.log("jsonUsrlghg",jsonUsrl);

            // }

            let finalUrl;
            // =await axios.get(jsonUsrl);
            // finalUrl = finalUrl.data.image;
            imageArray = [
                ...imageArray,
                {
                    url: finalUrl,
                    name: name,
                    owner_of: owner_of,
                    token_address: token_address,
                    amount: amount,
                    symbol: symbol,
                    token_id: token_id,
                    // img_url:img_url
                },
            ];

        }
        setnftdata(imageArray);

    }





    useEffect(() => {
        fetch_Data()

    }, []);
    return (
        <div>

            <section class="tf-section live-auctions pick_bg_here style3 pad-b-54 no-pt-mb mobie-pb-70">
                <div class="themesflat-container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="tf-title pad-l-7 text-center pb-5">
                                My Collection</h2>
                        </div>

                        {
                            nftdata.map((items, index) => {
                                return (
                                    <>
                                        <div class="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                            <Link to={(`/details/${index}`)}>
                                                <div class="sc-card-product coming_soon"
                                                //  onClick={() => myHistory.push(`/Details/${index}`)}
                                                >
                                                    <div class="card-media">
                                                        <img src="placeholder.webp" alt="Image" />
                                                        <button class="wishlist-button heart"><span class="number-like"> 100</span></button>
                                                        {/* <div class="coming-soon">coming soon</div> */}
                                                    </div>
                                                    <div class="card-title">
                                                        <h5 class="style2"><a href="item-details.html " className='text-dark'>{items?.name}</a></h5>
                                                        <div class="tags">bsc</div>
                                                    </div>
                                                    <div class="meta-info">
                                                        <div class="author">
                                                            <div class="avatar">
                                                                <img src="placeholder.webp" alt="Image" />
                                                            </div>
                                                            <div class="info">
                                                                <span>Owned By</span> <br />
                                                                <span>

                                                                    {items?.owner_of.substring(0, 8) + "..." + items?.owner_of.substring(items?.owner_of.length - 8)
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="price">
                                                            <span>Current Price</span>
                                                            <h5> {items?.amount} ETH</h5>
                                                        </div>
                                                    </div>
                                                    <div class="card-bottom">
                                                        <a href="#" data-toggle="modal" data-target="#popup_bid" class="sc-button style bag fl-button pri-3"><span>Place Bid</span></a>
                                                        <a href="activity1.html" class="view-history "><AiOutlineReload />View History</a>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                    </>
                                )
                            })
                        }


                        <div class="col-md-12 wrap-inner load-more text-center mg-t-4">
                            <a href="#" id="loadmore" class="sc-button loadmore fl-button pri-3"><span>Load More</span></a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
