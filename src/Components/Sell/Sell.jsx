import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ModalHeader } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { useMoralisWeb3Api } from 'react-moralis';
import  {toast}  from 'react-toastify';
import { loadWeb3 } from '../Api/api';
import { nftMarketContractAddress, nftMarketContractAddress_Abi, nftMarketToken_Abi } from '../Utils/Contract';
import './Sell_style.css'
import {GiTireIronCross} from 'react-icons/gi'

export default function Sell({showModal,id,setShowModal}) {
    const [inputdatahere, setinputdatahere] = useState("")

    const Web3Api = useMoralisWeb3Api();


    const [nftdata, setnftdata] = useState([]);
    let [tokenid, settoken_id] = useState();
    let [ownadd, setownadd] = useState();
    let [isSpinner, setIsSpinner] = useState(false)
    let [btn, setbtn] = useState(true)
    let [NftName, setNftName] = useState()


    let idex =id;


    let imageArray = [];


    const fetch_Data = async () => {

        let acc = await loadWeb3();

        const options = {
            chain: "Bsc Testnet",
            address: acc,
        };

        const polygonNFTs = await Web3Api?.account?.getNFTs(options);
          console.log("idx",idex);
        console.log("polygonNFTs", polygonNFTs.result[idex]);
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

            settoken_id(token_id)
            setownadd(owner_of)
            setNftName(name)
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

    
  const addOrder = async () => {
    let acc = await loadWeb3();
    console.log("ACC=", acc)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
    } else {


      try {
        setIsSpinner(true)
        const web3 = window.web3;
        let address = "0x4113ccD05D440f9580d55B2B34C92d6cC82eAB3c"
        let value_price = inputdatahere;
        console.log("value_price",value_price);

        if (value_price == "") {
          toast.error("Please Enter the Price")
          setIsSpinner(false)
        }
        else {

          setIsSpinner(true)


          if (value_price <= 0) {
            toast.error("Please Enter Price Greater the 0")
            setIsSpinner(false)

          }
          else {
            setIsSpinner(true)

            value_price = web3.utils.toWei(value_price)
            let curreny_time = Math.floor(new Date().getTime() / 1000.0)

            console.log("tayyab", curreny_time)


            let nftContractOftoken = new web3.eth.Contract(nftMarketToken_Abi, ownadd);
            let getodernumberhere = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);




            // console.log("getorderhere", getItemId)
            console.log("Own_token_Address", tokenid)
            console.log("ownadd", ownadd)
            console.log("curreny_time", curreny_time)
            console.log("value_price", value_price)




            let getListingPrice = await getodernumberhere.methods.getListingPrice().call();

            console.log("getListingPrice", getListingPrice);

            await nftContractOftoken.methods.setApprovalForAll(nftMarketContractAddress, true).send({
              from: acc,
            })
            setIsSpinner(false)

            toast.success("Approved Successfuly")
            setIsSpinner(true)

            let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
            let hash = await nftContractOf.methods.createMarketItem(tokenid, value_price, 1, false, curreny_time, ownadd).send({
              from: acc,
              value: getListingPrice,
              feelimit: 10000000000
            })
            hash = hash.transactionHash
            console.log("hash", hash);
            let getItemId = await getodernumberhere.methods.tokenIdToItemId(ownadd, tokenid).call();
            let MarketItemId = await getodernumberhere.methods.idToMarketItem(getItemId).call();
            console.log("MarketItemId", MarketItemId)
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
              "sold":sold ,
              "isOnAuction": isOnAuction,
              "bidEndTime": bidEndTime,
              "name": NftName,
              "url": "Image_url",
              "txn": hash
            })

            console.log("postapiPushdata", postapiPushdata);
            // toast.success("Success")
            setIsSpinner(false)
            toast.success("Transion Compelete")




          }
        }
      }
      catch (e) {
        console.log("Error while addOrder ", e)
        setIsSpinner(false)


      }
    }
  }



  return (
    <div>

        <Modal
                show={showModal}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >


                <Modal.Body closeButton className='model_bg'   variant="dark" >
                <GiTireIronCross className='iconmodel'   onClick={()=> setShowModal(false)} />
                    <h3 className='text-left pb-5 pt-3 fs-1'>Sell NFT</h3>
                   
                    <input type="text" onChange={(e) => setinputdatahere(e.target.value)} value={inputdatahere} className="form-control" placeholder='Enter Sell Value in ETH' />
                    <button  className=" btn btn_all form-control mt-4 pt-4 pb-4 fs-2" onClick={()=>addOrder()} >Compelet Listing</button>


                </Modal.Body>

            </Modal>
    </div>
  )
}
