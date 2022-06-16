import React, { useEffect, useRef, useState } from 'react'
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { useNavigate, useParams } from 'react-router-dom';
import { loadWeb3 } from '../Api/api';
import { wireNftContractAbi, wireNftContractAddress } from '../Utils/wireNft';
import { MdSell } from 'react-icons/md'
import { RiAuctionFill } from 'react-icons/ri'
import women_drink from '../../assets/women_drink.jpg'
import './Deatils.css'
import Modal from 'react-bootstrap/Modal'
import Sell from '../Sell/Sell';
import Auction_Model from '../Auction_Model/Auction_Model';



export default function Details() {
    let sellnft = useNavigate();
    const Web3Api = useMoralisWeb3Api();
    const { isInitialized, authenticate, isAuthenticated, user, initialize } =
        useMoralis();
    const [nftdata, setnftdata] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [showModalAuction, setShowModalAuction] = useState(false)

    // const [idx, setidx] = useState()

    

    // const values = useSelector((state) => state.counter.value)
    // const dispatch = useDispatch();

    let simplleArray = [];

    // console.log("time", nftMarketContractAddress);

    let { id } = useParams();
   
    console.log("You Clicked and recieved", id);
    const modalRef = useRef(null);
    const closeModalSearch = () => {
        modalRef.current.click();
    };

    const fetchNFTs = async () => {
        let acc = await loadWeb3();

        let myDummyArray = [];
        let imageArray = [];
        initialize();
        // Moralis.start()
        const options = {
            chain: "Bsc Testnet",
            address: acc,
        };
        const polygonNFTs = await Web3Api.account.getNFTs(options);

        let res = polygonNFTs.result[id];
        //  res = res[id];
        const web3 = window.web3;
        let nftContractOf = new web3.eth.Contract(
            wireNftContractAbi,
            wireNftContractAddress
        );
        // let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call();
        // console.log("polygon", polygonNFTs);
        // let res_here = await axios.get(
        //   `https://gateway.pinata.cloud/ipfs/QmXQc7AEmCqrtShVv3k5PdRbhfwgMoHL1HKXMZU4seCe9S/${walletOfOwner[id]}.jpg`
        // );
        // console.log("lengthtayya", res_here.config.url);

        let loopLength = res.length;
        console.log("Bahir", loopLength);
        let jsonUsrl = res.token_uri;
        // let img_url=res_here.config.url;

        let name = res.name;
        let owner_of = res.owner_of;
        let token_address = res.token_address;
        let amount = res.amount;
        let symbol = res.symbol;
        let token_id = res.token_id;
        console.log("token_id", token_id);


        owner_of = owner_of.substring(0, 6) + "..." + owner_of.substring(owner_of.length - 6)
        // if (jsonUsrl.startsWith("ipfs")) {
        //   jsonUsrl = "https://ipfs.moralis.io:2053/ipfs/" + jsonUsrl.split("ipfs://ipfs").slice(-1)[0];
        // } else {
        //   jsonUsrl = jsonUsrl
        // }

        let finalUrl;
        // = await axios.get(jsonUsrl);
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
        console.log("Finally Url is ", finalUrl);
        console.log("count", imageArray);

        setnftdata(imageArray);

        //   dispatch(incrementByAmount(imageArray));
    };

    useEffect(() => {
        if (isInitialized) {
            console.log("isInitialized", isInitialized);
            fetchNFTs();
        }
    }, [isInitialized]);
    useEffect(() => {
        console.log("isInitialized", isInitialized);
        fetchNFTs();
    }, []);
    return (
        <div>


          <Sell showModal={showModal} id={id} setShowModal={setShowModal}/>
          <Auction_Model showModalAuction={showModalAuction} id={id} setShowModalAuction={setShowModalAuction}  />

            <section className="mt-4 item-details-area pb-5">
                <div className="container">
                    {nftdata.map((items, index) => {
                        return (
                            <div className="row justify-content-between">
                                <div className="col-12 col-lg-5">
                                    <div className="item-info">
                                        <div className=" p-4 item-thumb text-center">
                                            <img
                                                style={{ width: "400px", height: "400px" }}
                                                src={women_drink}

                                                alt=""
                                            />

                                        </div>
                                    </div>
                                </div>


                                <div className="col-12 col-lg-6 mt-5">
                                    <div class="fl-item ">
                                        <div class="sc-card-product coming_soon">

                                            <div class="card-title">
                                                <h5 class="style2"><a href="item-details.html " className='text-dark'>{items?.name}</a></h5>
                                                <p>{items.symbol}</p>

                                            </div>
                                            <div class="meta-info">
                                                <div class="author">
                                                    <div class="avatar" >
                                                        <img src={women_drink} alt="Image" style={{ width: "50px", height: "50px" }} />
                                                    </div>
                                                    <div class="info">
                                                        <span className='fs-4'>Owned By</span> <br />
                                                        <span className='fs-4'>

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


                                        </div>
                                    </div>
                                    <div className="content mt-5 mt-lg-0">
                                        <div className="row items">
                                            <div className="col-12 item px-lg-2 fl-item ">
                                                <div className="sc-card-product coming_soon ">

                                                    <div className=" row py-4">
                                                        <div className="col-lg-6">
                                                            <button
                                                                className="btn btn_all form-control " style={{ paddingBottom: "10px" }}
                                                            onClick={() => setShowModal(true)}

                                                            >
                                                                <MdSell className="fs-2" />
                                                                <span className="ms-2 fs-2 ">Sell</span>
                                                            </button>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <button
                                                                className="btn btn_all form-control " style={{ paddingBottom: "10px" }} onClick={()=>setShowModalAuction(true)}>

                                                                <RiAuctionFill className="fs-1" />
                                                                <span className="ms-1 fs-2">Auctions</span>

                                                            </button>
                                                        </div>
                                                        <span>


                                                        </span>



                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    )
}
