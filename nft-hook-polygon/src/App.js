import { ethers } from "ethers"
import { NftProvider, useNft } from "use-nft"
import './App.css';

const NODE_URL = "https://polygon-mainnet.infura.io/v3/16d61f60c62c4eb299702b36db84e499";
const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

function App() {

  function Nft() {
    const { loading, error, nft } = useNft(
      "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",
      "10368"
    )
  
    // nft.loading is true during load.
    if (loading) return <>Loading…</>
  
    // nft.error is an Error instance in case of error.
    if (error || !nft) return <>Error.</>
  
    // You can now display the NFT metadata.
    return (
      <section>
        <h1>{nft.name}</h1>
        <img src={nft.image} alt=""
          style={{
            width: 150,
            height: 150,
        }}/>
        <p>{nft.description}</p>
        <p>Owner: {nft.owner}</p>
        <p>Metadata URL: {nft.metadataUrl}</p>
      </section>
    )
  }

  return (
    <NftProvider fetcher={["ethers", { provider }]}>
      <div className="App">
        <header className="App-header">
          <Nft />
        </header>
      </div>
    </NftProvider>
  );
}

export default App;
