import {CiTrophy} from "react-icons/ci"
import { CiDatabase } from "react-icons/ci"
import { CiWavePulse1 } from "react-icons/ci"

const SecondPage = () => {
    return (
        <>
            <div class="container  second-page">
                <div class="row">
                    <div class="col">
                        <div className="wave-icon icns">
                            <CiWavePulse1 />
                        </div>
                        <div className="wave-text">
                            Turn systems of records into systems of insight
                        </div>
                    </div>
                    <div class="col">
                        <div className="trophy-icon icns">
                            <CiTrophy/>
                        </div>
                        <div className="trophy-text">
                            Drive targeted interventions, improve outcomes
                        </div>
                    </div>
                    <div class="col">
                        <div className="db-icon icns">
                            <CiDatabase />
                        </div>
                        <div className="db-text">
                            Leverage data across the customer lifecycle
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default SecondPage
