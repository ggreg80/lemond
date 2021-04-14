// import { utils } from 'web3'
import {utils} from 'ethers'
import BigNumber from 'bignumber.js'
import numeral from 'numeral'


export function fromWeiNumber(number) {
  const bn = new BigNumber(String(number))
  return numeral(bn.div(new BigNumber(10).pow(18))).format('0,0.00')
}

export function from10WeiNumber(number) {
    const bn = new BigNumber(String(number))
    return numeral(bn.div(new BigNumber(10).pow(10))).format("0,0.00")
}

export function fromETHWeiNumber(number) {
  const bn = new BigNumber(String(number))
  return bn.div(new BigNumber(10).pow(18)).toString()
}

export function from10ETHWeiNumber(number) {
    const bn = new BigNumber(String(number))
    return bn.div(new BigNumber(10).pow(10)).toString()
}

export function fromUSDNumber(number) {
   const bn = new BigNumber(String(number))
  return numeral(bn.div(new BigNumber(10).pow(18))).format('$0,0.00')
}

export function fromUSD(number) {
  return numeral(number).format('$0,0.00')
}

export function formatUSDNumer(number) {
    if(number >= 1000 && number < 1000000){
      return numeral(new BigNumber(String(number)).div(1000)).format("$0,0.00") + "K"
    }else if (number >= 1000000) {
        return numeral(new BigNumber(String(number)).div(1000000)).format("$0,0.00") + "M"
    }
    return numeral(number).format("$0,0.00")
}

export function toWeiNumber(number) {
  const bn = new BigNumber(String(number))
  return bn.times(new BigNumber(10).pow(18)).toFixed()
}

export function to10WeiNumber(number) {
    const bn = new BigNumber(String(number))
    return bn.times(new BigNumber(10).pow(10)).toFixed()
}

export function fromAPY(number) {
    return numeral(number).format("0,0.00")
}

export function fromBigNumber(number) {
    const bn = new BigNumber(String(number))
    return bn.toString()
}


export const toastConfig = {
                      position: 'bottom-left',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      draggable: true,
                      progress: null,
                    }