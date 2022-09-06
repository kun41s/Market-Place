import abi from "../utils/MarketPlace.json";
const ethers = require("ethers");

const ConnectWallet = async () => {

  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get Metamask Wallet!");
    }

    await ethereum.request({ method: "eth_accounts" });

    await ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    // console.log("signer", signer.getAddress());
    // const currentAccount = signer.getAddress();

    const contractABI = abi.abi;
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    // console.log("get signer ", wallet());
    // console.log("contract address ", contractAddress);

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // console.log(contract);

    return contract;
    // const userAddress = await signer.getAddress();
  } catch (error) {
    console.log(error);
  }
};

export default ConnectWallet;
