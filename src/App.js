import NavBar from "./components/nav";
import FrontPage from "./components/frontPage";
import SecondPage from "./components/secondPage";
import ThirdPage from "./components/thirdPage";
import FourthPage from "./components/fourthPage";
import FifthPage from "./components/fifthPage";
import LastPage from "./components/lastPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/style.scss"

function App() {
  return (
    <>

    <NavBar/>
    <FrontPage/>
    <SecondPage/>
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>
    <LastPage/>
    </>
  );
}

export default App;
