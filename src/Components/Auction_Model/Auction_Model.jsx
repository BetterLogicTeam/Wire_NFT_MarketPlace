import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { useMoralisWeb3Api } from 'react-moralis';
import { toast } from 'react-toastify';
import { loadWeb3 } from '../Api/api';
import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketToken_Abi } from '../Utils/Contract';
import './Auction_Style_Model.css'
import { GiTireIronCross } from 'react-icons/gi'

export default function Auction_Model({ showModalAuction, id, setShowModalAuction }) {
    const Web3Api = useMoralisWeb3Api();
    const [inputdatahere, setinputdatahere] = useState("")
    let [tokenid, settoken_id] = useState();
    let [ownadd, setownadd] = useState();
    let [NftName, setNftName] = useState()
    let [isSpinner, setIsSpinner] = useState(false)
    const [nftdata, setnftdata] = useState([]);
    const selectoption = useRef();



    let token_address;
    let token_id;
    const fetchNFTs = async () => {
        let acc = await loadWeb3();
        // let polyg = new web3.eth.Contract(
        //   nftMarketContractAddress_Abi,
        //   nftMarketContractAddress
        // );

        // const polygRes = await polyg.methods.idToMarketItem(id).call();

        // console.log("id", polygRes);
        let myDummyArray = [];
        let imageArray = [];

        // Moralis.start()
        const options = {
            chain: "Bsc Testnet",
            address: acc,
        };
        const polygonNFTs = await Web3Api.account.getNFTs(options);

        let res = polygonNFTs.result[id];
        //  res = res[id];
        const web3 = window.web3;
        // let nftContractOf = new web3.eth.Contract(
        //   wireNftContractAbi,
        //   wireNftContractAddress
        // );
        // let walletOfOwner = await nftContractOf.methods.walletOfOwner(acc).call();
        // console.log("polygon", polygonNFTs);
        // let res_here = await axios.get(
        //   `https://gateway.pinata.cloud/ipfs/QmXQc7AEmCqrtShVv3k5PdRbhfwgMoHL1HKXMZU4seCe9S/${walletOfOwner[id]}.jpg`
        // );

        // console.log("lengthtayya", res);
        let loopLength = res.length;
        // console.log("Bahir", loopLength);
        let jsonUsrl = res.token_uri;
        let name = res.name;
        let owner_of = res.owner_of;
        token_address = res.token_address;
        let amount = res.amount;
        let symbol = res.symbol;
        token_id = res.token_id;
        // let img_url = res_here.config.url;
        setNftName(name)
        settoken_id(token_id);
        setownadd(token_address);
        // console.log("token_id", token_address);

        // if (jsonUsrl.startsWith("ipfs")) {
        //     jsonUsrl = "https://ipfs.moralis.io:2053/ipfs/" + jsonUsrl.split("ipfs://ipfs").slice(-1)[0];
        // } else {
        //     jsonUsrl = jsonUsrl
        // }

        let finalUrl;
        //  = await axios.get(jsonUsrl);
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
                // img_url, img_url
            },
        ];
        // console.log("Finally Url is ", finalUrl);
        // console.log("count", imageArray);

        setnftdata(imageArray);


    };

    const addOrder = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        setIsSpinner(true)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected");
            setIsSpinner(false)

        } else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net");
            setIsSpinner(false)

        } else {
            try {
                setIsSpinner(true)

                const web3 = window.web3;
                let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c";
                let value_price = inputdatahere;
                let selecthere = selectoption.current.value;


                console.log("ownaddress", value_price);
                if (value_price == " ") {
                    toast.error("Please enter the value")
                    setIsSpinner(false)

                } else {
                    // if (current_time_and_days > curreny_time) {
                    // }

                    setIsSpinner(true)


                    if (selecthere <= 0) {
                        toast.error("Please Select the Days")
                        setIsSpinner(false)

                    } else {
                        setIsSpinner(true)



                        value_price = web3.utils.toWei(value_price);
                        let curreny_time = Math.floor(new Date().getTime() / 1000.0);
                        let current_time_and_days = 60 * selecthere;
                        current_time_and_days = current_time_and_days + curreny_time;

                        // console.log("selecthere", current_time_and_days);
                        // console.log("current_time_and_days", current_time_and_days);
                        // console.log("curreny_time", curreny_time);
                        let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, ownadd);
                        let nftContractInstance = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
                        // const getItemId = await nftContractInstance.methods.tokenIdToItemId(ownadd, tokenid).call();

                        // console.log("tokenIdToItemId", getItemId);

                        let getListingPrice = await nftContractInstance.methods.getListingPrice().call();

                        await nftContractOftoken.methods.setApprovalForAll(nftMarketContractAddress, true).send({
                            from: acc,
                        })

                        toast.success("Approve SuccessFul")

                        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

                        let hash = await nftContractOf.methods.createMarketItem(tokenid, value_price, 1, true, current_time_and_days, ownadd).send({
                            from: acc,
                            value: getListingPrice,
                        });
                        hash = hash.transactionHash
                        // console.log("hash", hash);
                        // setIsSpinner(false)
                        let getItemId = await nftContractOf.methods.tokenIdToItemId(ownadd, tokenid).call();
                        let MarketItemId = await nftContractOf.methods.idToMarketItem(getItemId).call();
                        // console.log("MarketItemId", MarketItemId)
                        let bidEndTime = MarketItemId.bidEndTime;
                        let isOnAuction = MarketItemId.isOnAuction;
                        let itemId = MarketItemId.itemId;
                        let nftContract = MarketItemId.nftContract;
                        let owner = MarketItemId.owner;
                        let price = MarketItemId.price;
                        let seller = MarketItemId.seller;
                        let sold = MarketItemId.sold;
                        let tokenId = MarketItemId.tokenId;

                        price = web3.utils.fromWei(price)
                        let postapiPushdata = await axios.post('https://whenftapi.herokuapp.com/open_marketplace', {
                            "useraddress": acc,
                            "itemId": itemId,
                            "nftContract": nftContract,
                            "tokenId": tokenId,
                            "owner": owner,
                            "price": price,
                            "sold": sold,
                            "isOnAuction": isOnAuction,
                            "bidEndTime": bidEndTime,
                            "name": NftName,
                            "url": "Image_url",
                            "txn": hash
                        })

                        // console.log("postapiPushdata", postapiPushdata);
                        toast.success("Transion Compelete")

                        setIsSpinner(false)

                        // const getAll = await nftContractOf.methods.idToMarketItem(getItemId).call();
                        // console.log("getAll", getAll);
                        // await axios.post(`https://wire-nft.herokuapp.com/save_auction`, {
                        //   itemId: getAll.itemId.toString(),
                        //   tokenId: getAll.tokenId.toString(),
                        //   bidEndTime: getAll.bidEndTime,
                        //   isOnAuction: getAll.isOnAuction,
                        //   sold: getAll.sold,
                        //   nftContract: getAll.nftContract.toString(),
                        //   owner: getAll.owner.toString(),
                        //   price: getAll.price.toString(),
                        // })
                        //   .then((response) => {
                        //     console.log(response, "...ssssss");
                        //     toast.success("Approved Successfuly");
                        //   })
                        //   .catch((error) => {
                        //     console.log(error, "..eeeeee");
                        //   });
                    }
                }
                // toast.success("Transion Compelete");
            } catch (e) {
                console.log("Error while addOrder ", e);
                setIsSpinner(false)

            }
        }
    };

    useEffect(() => {

        fetchNFTs();


    }, []);


    return (
        <div>
          

            <Modal
                show={showModalAuction}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >


                <Modal.Body closeButton className='model_bg' variant="dark" >
                    <GiTireIronCross className='iconmodel' onClick={() => setShowModalAuction(false)} />
                    <h3 className='text-left pb-5 pt-3 fs-1'>Auction</h3>

                    <input type="text" onChange={(e) => setinputdatahere(e.target.value)} value={inputdatahere} className="form-control" placeholder='Enter Auction Value in ETH' />
                    <select class="form-select p-4 mt-3" aria-label="Default select example" ref={selectoption} style={{fontSize:'18px'}}>

                        <option value="" selected disabled hidden  >Select Days</option>
                        <option value="1" class="dropdown__select" style={{fontSize:'18px'}}> 1 Munites </option>
                        <option value="2" style={{fontSize:'18px'}}> 2 Munites</option>
                        <option value="5" style={{fontSize:'18px'}}> 5 Munites</option>
                        <option value="10" style={{fontSize:'18px'}}> 10 Munites</option>
                        <option value="15" style={{fontSize:'18px'}}> 15 Munites</option>
                    </select>
                    {/* <select
                        name="days"
                        class="dropdown__filter form-control"
                        id=""
                        style={{ backgroundColor: "rgba(0, 0, 0, .12)" }}
                        ref={selectoption}
                    >
                        <option value="" selected disabled hidden>
                            Select Days
                        </option>
                        <option value="1" class="dropdown__select">

                            1 Munites
                        </option>
                        <option value="2"> 2 Munites</option>
                        <option value="5"> 5 Munites</option>
                        <option value="10"> 10 Munites</option>
                        <option value="15"> 15 Munites</option>
                    </select> */}
                    <button className=" btn btn_all form-control mt-4 pt-4 pb-4 fs-2" onClick={() => addOrder()} >Compelet Listing</button>


                </Modal.Body>

            </Modal>


        </div>
    )
}
