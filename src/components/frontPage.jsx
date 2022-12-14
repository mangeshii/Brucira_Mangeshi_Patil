import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img16 from "../images/img16.png"

const FrontPage = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="header-content container">
                    <h1>Conventional CRMs<br /> are insufficient</h1>
                    <p>What you need is an intelligent sales frontend that helps you drive <br />interventions across the customer lifecycle to improve outcomes.</p>
                    <button className="help-btn">See how Vymo can help</button>
                </div>
                <div className="img-cont">
                    <img className="img1 img-fluid" src={img1} alt="img1"/>
                    <img className="img2" src={img2} alt="img2" />
                    <div className="small-cont">
                        <div className="main-column">
                            <div className="icn">
                                <img src={img16} alt="img16"/>
                            </div>
                            <div className="column">
                                <button>To drive sales productivity bottom up</button>
                                <h6>Free between 2 - 4 PM? Meet Acme Solutions
                                    (Gold Partner)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FrontPage