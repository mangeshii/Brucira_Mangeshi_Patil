import "./style.css"
import img1 from "../images/img1.png";
import img2 from "../images/img2.png"

const Main = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="header-content container">
                    <h1>Conventional CRMs<br/> are insufficient</h1>
                    <p>What you need is an intelligent sales frontend that helps you drive <br/>interventions across the customer lifecycle to improve outcomes.</p>
                <button className="help-btn">See how Vymo can help</button>
                </div>
                <div className="img-cont">
                <img className="img1" src={img1} />
                <img className="img2" src={img2} />

                </div>
            </div>
        </>
    )
}
export default Main