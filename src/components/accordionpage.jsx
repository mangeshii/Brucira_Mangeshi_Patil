import "./style.css"
import { useState } from "react";
import {BsArrowRightShort} from "react-icons/bs"

const AccordionPage = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="middle-page-container container">
            <h3>The power of an intelligent <br />Assistant and a Coachs</h3>
            <div className="accordion ">
                <div className={isActive ? "item show " : "item"}>
                    <div className="title " onClick={() => setIsActive(!isActive)}>
                        <h4> 1. Personal Assistant</h4>
                   </div>
                    <div className={isActive ? "content showw " : "content "}>
                        <div className="col-md-6 cl">
                            <p>Vymo automatically captures all sales activities so your sellers don’t have to report them manually. Vymo also helps sellers plan their schedules so they can engage with customers or partners intelligently</p>
                            <button>See how it works<BsArrowRightShort/></button>
                        </div>
                        <div className="col-md-6">right</div>
                    </div>
                </div>



                <div className={!isActive ? "item show " : "item"}>
                    <div className="title" onClick={() => setIsActive(!isActive)}><h4>2. Personal Coach</h4></div>
                    <div className={!isActive ? "content showw " : "content"}>
                    <div className="col-md-6 cl">
                            <p>Vymo understands what makes your best sellers successful and nudges best behaviors proactively to the rest of your team. Vymo also suggests interventions based on insights to improve outcomes.</p>
                            <button>See how it works<BsArrowRightShort/></button>
                        </div>
                        <div className="col-md-6">right</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AccordionPage