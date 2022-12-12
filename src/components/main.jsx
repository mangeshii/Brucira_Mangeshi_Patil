import "./style.css"
import img1 from "../images/img1.png";
import img2 from "../images/img2.png"

const Main=()=>{
    return(
        <>
        <div className="main-wrapper">
            <img className="img1" src={img1}/>
            <img className="img2" src={img2}/>
        </div>
        </>
    )
}
export default Main