import "./style.css"
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    return (
        <>
            <div className="main">

                <nav>
                    <div class="wrapper">
                        <div class="logo"><a href="#">Vymo</a></div>
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
                    {/* <div className="btn-wrapper">
                        <button className="book-demo-btn">Book Demo</button>
                    </div>
                    <img className="img2" src={img2} />
                    <img className="img1 img-fluid" src={img1} /> */}
                </div>

            </div>

        </>
    )
}
export default NavBar