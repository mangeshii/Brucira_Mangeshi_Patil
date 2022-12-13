import "./style.css"
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import img12 from '../images/img12.png';
import img13 from '../images/img13.png';
import img14 from '../images/img14.png';
import img15 from '../images/img15.png';


const FifthPage = () => {
    return (
        <>
            <div className="fifth-page-wrapper">
                <h4>Turnkey Integrations with <br />your sales tech stack </h4>
                <p>Get up and running in months weeks!</p>
                <div class="containerr">
                    <div class="row justify-content-start">
                        <div class="col-1 cl">
                            <div className="cardd">

                            </div>
                        </div>
                        <div class="col-3 cl">
                            <div className="cardd">
                                <img src={img9} />
                                <p className="text-header">Office 365</p>
                                <p className="text-content">Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites</p>
                            </div>
                        </div>
                        <div class="col-3 cl">
                            <div className="cardd">
                                <img src={img10} />
                                <p className="text-header">Google Suite</p>
                                <p className="text-content">Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites</p>
                            </div>
                        </div>
                        <div class="col-3 cl">
                            <div className="cardd">
                                <img src={img11} />
                                <p className="text-header">Salesforce</p>
                                <p className="text-content">Vymo integrates with leading global CRM solutions to drive better performance and make its data more impactful.</p>
                            </div>
                        </div>
                        <div class="col-2 cl">
                            <div className="cardd">
                                <img src={img12} />
                                <p className="text-header">CRMNext</p>
                                <p className="text-content">Vymo integrates with leading global CRM solutions to drive better performance and make its data more impactful.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-start">
                        <div class="col-2 cl">
                            <div className="cardd">
                                <img />
                                <p className="text-header">Paperflite</p>
                                <p className="text-content">Vymo provides a unified calendaring and communication experience by integrating with these major enterprise suites</p>
                            </div>
                        </div>
                        <div class="col-3 cl">
                            <div className="cardd">
                                <img src={img13} />
                                <p className="text-header">Azure Active Directory</p>
                                <p className="text-content">The following enterprise single sign-on (SSO) services come integrated with Vymo out-of-the-box.</p>
                            </div>
                        </div>
                        <div class="col-3 cl">
                            <div className="cardd">
                                <img src={img14} />
                                <p className="text-header">MS Teams</p>
                                <p className="text-content">Vymo improves your team’s efficiency by auto-detecting and auto-logging all your team’s sales communication</p>
                            </div>
                        </div>
                        <div class="col-3 cl">
                            <div className="cardd">
                                <img src={img15} />
                                <p className="text-header">WebEx</p>
                                <p className="text-content">Vymo improves your team’s efficiency by auto-detecting and auto-logging all your team’s sales communication</p>
                            </div>
                        </div>
                        <div class="col-1 cl">
                            <div className="cardd">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="helpp-btn">
                   <button>See how Vymo can help</button>
                </div>
            </div>
        </>
    )
}

export default FifthPage