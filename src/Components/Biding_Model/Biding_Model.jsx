import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { GiTireIronCross } from 'react-icons/gi'
import { loadWeb3 } from '../Api/api'
import { nftMarketContractAddress, nftMarketContractAddress_Abi } from '../Utils/Contract'
import { toast } from 'react-toastify'
import axios from 'axios'



export default function Biding_Model({ setbidingModel, bidingModel, idx }) {
  let [isSpinner, setIsSpinner] = useState(false)
  const [inputdatahere, setinputdatahere] = useState("")


  const [tokenId, settokenId] = useState()
  const [price, setprice] = useState()
  const [duration, setduration] = useState()
  const [nftcontactadd, setnftcontactadd] = useState()
  const [hightbid, sethightbid] = useState()
  const [base_price, setbase_price] = useState()
  const [bidEndTime, setbidEndTime] = useState()
  const [Seconds, setSeconds] = useState(0)
  const [Days_here, setDays_here] = useState(0)
  const [Hours_here, setHours_here] = useState(0)
  const [Munits_here, setMunits_here] = useState(0)
  const [img_url, setimg_url] = useState()
  const [setdisable, setsetdisable] = useState()
  const [getinputdata, setgetinputdata] = useState()
  const [boluher, setboluher] = useState(true)
  const [SendAddress, setSendAddress] = useState()
  const [HighestBideradd, setHighestBideradd] = useState()

  const [Token_Id, setToken_Id] = useState()

  let id = idx;

  console.log("indexxx", id);



  let alldata_here

  const auction = async () => {
    const web3 = window.web3;
    let acc = loadWeb3()



    let res = await axios.get(
      `https://whenftapi.herokuapp.com/OnAuction_marketplace_history?id=100`
    );


    // console.log("res", res);
    let sender_address = res?.data?.data[id]
   

    sender_address = sender_address?.useraddress
    setSendAddress(sender_address)
    let tokenId_here = res?.data?.data[id]
    tokenId_here = tokenId_here?.tokenId;
    setToken_Id(tokenId_here)

    // console.log("tokenId_herehhhhhhhhhhhhh", tokenId_here);


    alldata_here = res?.data?.data[id]
    alldata_here = alldata_here?.itemId;
    let base_price = res?.data?.data[id]
    base_price = base_price?.price
    let bidEndTime = res?.data?.data[id]
    bidEndTime = bidEndTime?.bidEndTime
    let nftContract = res?.data?.data[id]
    nftContract = nftContract?.nftContract

// console.log("nftContract",nftContract);
    setbase_price(base_price)
    settokenId(alldata_here)
    setnftcontactadd(nftContract)


    var currentDateTime = new Date();
    let resultInSeconds = currentDateTime.getTime() / 1000;
    let Time_here = bidEndTime - resultInSeconds
    let TimeFinal = parseInt(Time_here)



    if (TimeFinal <= 0) {


      setboluher(false)
    } else {
      let days = parseInt(TimeFinal / 86400)

      setDays_here(days)
      TimeFinal = TimeFinal % (86400)
      let hours = parseInt(TimeFinal / 3600)
      setHours_here(hours)
      TimeFinal %= 3600
      let munites = parseInt(TimeFinal / 60)
      setMunits_here(munites)
      TimeFinal %= 60
      let second_here = parseInt(TimeFinal)
      setSeconds(second_here)

    }

    // console.log("Days_here", alldata_here);
    try {
      let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
      // console.log("tokenId",alldata_here);
      let hightbid = await nftContractOf.methods.highestBidderMapping(alldata_here).call();
      // console.log("hightbid", hightbid.bidderAddr);
      let bidderAdd = hightbid.bidderAddr
      hightbid = hightbid.amount;
      hightbid = web3.utils.fromWei(hightbid)
      setHighestBideradd(bidderAdd)

      sethightbid(hightbid)

    } catch (e) {
      console.log("Error While HeightestBid", e);
    }



  };



  const heightestbid = async () => {
    const web3 = window.web3;


  }



  const createBidOnItem = async () => {
    let acc = await loadWeb3();
    setIsSpinner(true)

    try {
      const web3 = window.web3;
      // hightbid = web3.utils.toWei(hightbid)
      // console.log("getinputdata",getinputdata);
      if (SendAddress !== acc) {
        if (hightbid <= getinputdata) {
          if (base_price <= getinputdata) {
            // let getinputdata2 = web3.utils.toBN(getinputdata).toString()
            let getinputdata2 = web3.utils.toWei(getinputdata).toString()




            // getinputdata=getinputdata.parseInt()
            // console.log("getinputdata", getinputdata2);


            let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

            await nftContractOf.methods.createBidOnItem(tokenId, nftcontactadd).send({
              from: acc,
              value: getinputdata2

            })
            toast.success("Biding Successful")
            setgetinputdata(" ")
            setIsSpinner(false)

          } else {
            toast.error("Bid price must be greater than base price and highest bid")
            setIsSpinner(false)

          }


        } else {
          toast.error("Bid price must be greater than base price and highest bid")
          setIsSpinner(false)

        }
      } else {
        toast.error("Already owned")
        setIsSpinner(false)


      }


    }
    catch (e) {
      console.log("Create Bid Error", e);
      setIsSpinner(false)

    }
  }


  const claimBidItem = async () => {
    let acc = await loadWeb3();
    const web3 = window.web3;
    setIsSpinner(true)


    try {
      if (HighestBideradd == acc) {
        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);


        await nftContractOf.methods.claimBidItem(tokenId, nftcontactadd).send({
          from: acc,
        })

        let postapiPushdata = await axios.post('https://whenftapi.herokuapp.com/update_auction_status', {

          "tokenid": Token_Id,

        })
        console.log("postapiPushdata", postapiPushdata);

        setIsSpinner(false)
        toast.success("Transion Compelete")


      } else {
        toast.error("Only highest bidder can claim the NFT")
        setIsSpinner(false)

      }



    } catch (e) {
      console.log("Error While Call Function claimBidItem", e)
      setIsSpinner(false)

    }
  }





  useEffect(() => {
    setInterval(() => {
      auction()
      heightestbid()
    }, 1000)


  }, [])



  return (
    <div>
      <Modal
        show={bidingModel}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >


        <Modal.Body closeButton className='model_bg' variant="dark" >
          <GiTireIronCross className='iconmodel' onClick={() => setbidingModel(false)} />
          <h3 className='text-left pb-5 pt-3 fs-1'>Auction</h3>

          <div className='timer_here'>
            <p > Highest Bid:{hightbid}</p>
            {
              boluher ? (<>
                <p className='mt-n1'>CLAIM IN {Days_here} <small>d </small>{Hours_here} <small>h</small> {Munits_here} <small>m</small> {Seconds} <small>s</small></p>

              </>) :
                (
                  <>
                    <span>End Time</span>

                  </>
                )
            }


          </div>



          {
            boluher ? (

              <>
                <input type="text" onChange={(e) => setinputdatahere(e.target.value)} value={inputdatahere} className="form-control" placeholder='Enter Auction Value in ETH' />

                <button className=' btn btn_all form-control mt-4 pt-4 pb-4 fs-2' 
                  onClick={() => createBidOnItem()}
                >
                  Place Bid</button>

              </>
            ) : (<>
              <button className='btn btn_all form-control mt-4 pt-4 pb-4 fs-2' onClick={() => claimBidItem()} > Claim On Bid</button>

            </>)

          }



          {/* <button className=" btn btn_all form-control mt-4 pt-4 pb-4 fs-2"  >Compelet Listing</button> */}


        </Modal.Body>

      </Modal>

    </div>
  )
}
