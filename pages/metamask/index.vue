<template>
  <LazyHowToBuyTemplate image-alt='metamask' image-url='metamask.png' title4='Swap BNB for SafePets token' title3='Connect your Metamask wallet to Pancakeswap' title2='Send BNB to your wallet' title1='Create MetaMask wallet' >
    <template slot='section1'>
      Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow
      you to buy, sell, send, and receive Safe Pets token.
    </template>
    <template slot='section2'>
      The next step is to add the Binance smart chain to your wallet.
      By default, Metamask wallets link to the Ethereum Mainnet. Navigate to the top of your wallet where your
      thumbnail is located to find the settings button. Click “networks” and “add network”. <br>
      Next, you’ll need to input the correct values for the Binance Smart Chain, seen below: <br>
      <div class='text-brown-secondary text-lg font-semibold py-6'>
        Network name: Binance Smart Chain <br>
        New RPC URL: https://bsc-dataseed.binance.org <br>
        Chain ID: 56 <br>
        Symbol: BNB <br>
        Blockexplorer: https://bscscan.com <br>
      </div>

      You can buy BNB directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase,
      Binance, etc.
    </template>
    <template slot='section3'>
      Access your wallet to PancakeSwap by clicking ‘Connect to a wallet’ and selecting MetaMask.
    </template>
    <template slot='section4'>
      You can start swapping as soon as you have BNB available! Press ‘Select a token’ and enter the token address
      or search for it on the tokens list.
    </template>
  </LazyHowToBuyTemplate>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>