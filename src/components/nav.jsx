import "./style.css"
import { IoIosArrowDown } from "react-icons/io";
import img8 from "../images/img8.png"

const NavBar = () => {
    return (
        <>
            <div className="main">
                <nav>
                    <div class="wrapper">
                        <div class="logo">
                            <div className="logo-img">
                                <img src={img8} />
                            </div>
                            <a href="#"> Vymo</a>
                        </div>
                        <ul class="nav-links">
                            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                            <li><a href="#">Why Vymo</a></li>
                            <li><a href="#">Products<IoIosArrowDown className="arrow-icon" /></a></li>
                            <li><a href="#">Solutions<IoIosArrowDown className="arrow-icon" /></a></li>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="img-bg">
                    <div className="btn-wrapper">

                        <button className="book-demo-btn">Book Demo</button>
                    </div>
                </div>

            </div>

        </>
    )
}
export default NavBar