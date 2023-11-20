import { InnerTorchContainer } from "../../styles/fire-starter/fire-starter.css"
import torch from "../../assets/images/fire-starter/torch.png"

export default function Torch({torchEquipped}) {
    return !torchEquipped && <InnerTorchContainer>
            <img src={torch}/>
            <div className="torch-flame vibrate-less">🔥
            </div>
        </InnerTorchContainer>  
}