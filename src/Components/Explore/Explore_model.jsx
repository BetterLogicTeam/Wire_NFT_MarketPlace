import React, { Component, useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal'
import { GiTireIronCross } from 'react-icons/gi'



import { toast } from 'react-toastify';
import { loadWeb3 } from '../Api/api';
import { nftMarketContractAddress_Abi, nftMarketContractAddress, nftmarketTokenAddress_Abi, nftmarketTokenAddress } from '../Utils/Contract'
import Footer from "../Footer/Footer";

import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { MdLocalOffer, MdAccountBalanceWallet } from 'react-icons/md'
// import Loading from "../Loading/Loading";
// import women_drink from '../../'

import Web3 from "web3";

export default function Explore_model({setExplore_Open,Explore_Open,indexnumber}) {
    let [orderdata, setorderdata] = useState()
    const [nftprice, setnftprice] = useState()
    // const { id } = useParams();
    const [apiData, setapiData] = useState()
    const [tokenId, settokenId] = useState()
    const [owneradd, setowneradd] = useState()
    const [nftcontractadd, setnftcontractadd] = useState()
    let [isSpinner, setIsSpinner] = useState(false)
    let [seller_add, setseller_add] = useState()
    const [tokenid_here, settokenid_here] = useState()
    const [price_fromwei, setprice_fromwei] = useState()

    

    // console.log("index_number_here",id);
  const Fatch_Api_data = async () => {
    const web3 = window.web3;
    let id = indexnumber;


    try {

      let res = await axios.get("https://whenftapi.herokuapp.com/sell_marketplace_history?id=100")
      console.log("id", id);
      console.log("res_Tayyab", res.data.data[id]);
      res = res.data.data[id]

      let seller_add = res.useraddress
      setseller_add(seller_add)
      setapiData(res)
      setowneradd(res.owner)
      setnftcontractadd(res.nftContract)
      let type = res.price
      // type=parseInt(type)


 


      let type2 = res.itemId
      console.log("itemid", type2);
      setnftprice(type)
      settokenId(res.itemId)
      settokenid_here(res.tokenId)
      let price =res.price;

       setprice_fromwei(price)
    

    } catch (e) {
      console.log("Error while fatching API ", e);
    }
  }

  const purchaseOrder = async () => {
    let acc = await loadWeb3();
    setIsSpinner(true)
    if (acc == "No Wallet") {
      toast.error("No Wallet Connected")
      setIsSpinner(false)

    }
    else if (acc == "Wrong Network") {
      toast.error("Wrong Newtwork please connect to test net")
      setIsSpinner(false)

    } else {
      try {
        setIsSpinner(true)

        if (seller_add === acc) {
          toast.error("Already owned")
      setIsSpinner(false)

        }
        else {
          setIsSpinner(true)

          const web3 = window.web3;
          let nftContractOftoken = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
          console.log("nft_price", nftprice);
          let inputdata = web3?.utils?.toWei((nftprice).toString())
          console.log("inputdata", inputdata);
  
          await nftContractOftoken.methods.createMarketSale(tokenId, nftcontractadd).send({
            from: acc,
            value: (inputdata).toString()
            // value:(web3.utils.toWei(nftprice)).tostring()
            // value:(1).toString()
  
          }
          );
  
          let postapiPushdata = await axios.post('https://whenftapi.herokuapp.com/update_sell_status', {
  
            "tokenid": tokenid_here,
            
  
          })

        
  
          console.log("postapiPushdata", postapiPushdata);
          toast.success("Transion Compelete")
          setIsSpinner(false)
        }
       

      }
      catch (e) {
        console.log("Error while addOrder ", e)
        setIsSpinner(false)

      }
    }

  }



  useEffect(() => {
    // pendingOrder() 
    Fatch_Api_data()
    setInterval(() => {

      }, 1000)
  }, []);
    return (
        <div>

            <Modal
                show={Explore_Open}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >


                <Modal.Body closeButton className='model_bg' variant="dark" >
                    <GiTireIronCross className='iconmodel' onClick={() => setExplore_Open(false)} />
                    <h3 className='text-left pb-5 pt-3 fs-1'>Auction Tayyab</h3>

                   
        
                    <button className=" btn btn_all form-control mt-4 pt-4 pb-4 fs-2" 
                    onClick={() => purchaseOrder()} 
                    >Compelet Listing</button>


                </Modal.Body>

            </Modal>



        </div>
    )
}
