import img3 from "../images/img3.png"

const FourthPage = () => {
    return (
        <div className='container third-page'>
            <h1>Recognized for driving innovation in <br />Sales Engagement</h1>
            <div className="card-container">
                <div className="card1">
                    <div className="gartner">
                        Gartner
                    </div>
                    <div className="card1-content">
                        <h3>Vymo is a Representative Vendor in Gartner’s Sales Engagement Market Guide</h3>
                        <p>Vymo should be of interest to application leaders supporting CRM Technologies and sales organizations (such as field sales and telesales) that need to make a step change in sales productivity</p>
                        <button>Download Report</button>
                    </div>
                </div>
                <div className="card2">
                    <div className="user-img">
                        <img src={img3} />
                        <h6>Deepika Sharma</h6>
                        <p>Director, Gartner</p>
                    </div>
                    <div className="card2-content">
                        <p>“We selected Vymo because of its unique application of automation and AI technology that allows for seamless data capture and contextual recommendations. In 8 weeks we have got complete visibility into every individual’s productivity and capability.”</p>
                    </div>
                </div>
            </div>
        </div>


    );
}


export default FourthPage