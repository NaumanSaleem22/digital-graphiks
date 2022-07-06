import LogoImg from "../Images/noon-logo-en.svg";
import Cart from "../Images/cart.svg";
import User from "../Images/user_thin.svg";
import Flag from "../Images/ae.svg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "./Header.css";
function Header() {
  return (
    <div className="header-topbar">
      <div>
        <img className="logo-topbar" src={LogoImg} />
      </div>
      <div className="d-flex align-items-center">
        <div  className="m-2">
          {" "}
          <i>
            <img src={Flag} alt="icon" />
          </i>
        </div>
        <div>
          <span className="text-muted fs-10">Deliver to</span>
          <br />{" "}
          <span>
            <strong>56WP+9X - Dubai</strong>
          </span>
        </div>
      </div>
      <div className="search-div">
        {" "}
        <Form.Control
          className="search-topbar"
          type="email"
          placeholder="What are you looking for"
        />
      </div>
      <div>لعربية</div>
      <div>
        <i>
          <img src={User} alt="icon" />
        </i>
        Signin
      </div>
      <div>
        <i>
          <img src={Cart} alt="icon" />
        </i>
        SCart
      </div>
    </div>
  );
}

export default Header;
