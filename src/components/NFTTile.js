import axie from "../tile.jpeg";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function NFTTile(data) {

    const newTo = {
        pathname: "/nftPage/" + data.data.tokenId
    }
    return (

        <Link to={newTo}>

            <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
                <img src={data.data.image} alt="" className="w-72 h-80 rounded-lg object-cover" />
                <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
                    <strong className="text-xl">{data.data.thana}</strong>
                    <p className="display-inline">
                        {data.data.status=="1"? "("+(data.data.tokenId)+")  SELL - "+(data.data.price)+" ETH"
                        :data.data.status=="2"? "("+(data.data.tokenId)+")  RENT - "+(data.data.price)+" ETH"
                        :data.data.status=="3"? "("+(data.data.tokenId)+")  PURCHED - "+(data.data.price)+" ETH"
                        :data.data.status=="4"? "("+(data.data.tokenId)+")  RENTING - "+(data.data.price)+" ETH"

                        :""
                        }
                    </p>
                </div>
            </div>
        </Link>

    )
}

export default NFTTile;
