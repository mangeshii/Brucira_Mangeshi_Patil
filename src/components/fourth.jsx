import "./style.css"
import img5 from "../images/img4.png";
import img6 from "../images/img6.png"

const Fourth = () => {
    return (
        <>
            <div className="fourthpage-wrapper">
                <div className="container footer">
                    <div class="row">
                        <div class="col">
                            <div className="footer-text">
                                <h4>Download Sales Insights from
                                    USA’s Top Insurance Leaders </h4>
                                <p>We reached out to USA’s top insurance leaders for a 360 degree view on the industry, what every leader’s top priorities should be, and opportunities for improvement.</p>
                                <button>Check it out here</button>
                            </div>
                        </div>
                        <div class="col">
                            <div className="footer-img">
                                <img src={img5} />
                                <div className="circle">
                                    <img src={img6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fourth