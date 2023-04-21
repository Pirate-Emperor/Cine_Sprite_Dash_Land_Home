import "./widget.scss";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutLinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined"; 
import {Link, useLinkClickHandler, useNavigate} from "react-router-dom";

const Widget = ({ type }) => {
  let data;

// Temporary
const amount = 80;
const diff = 20;


switch (type) {
    case "user":
        data = {
            title: "TITLES",
            amount: 70,
            diff: 13,
            isMoney: false,
            link: "See all titles",
            path: "/title",
            icon: (
                <PersonOutlineOutlined 
                className="icon" 
                style={{
                    color: "crimson",
                    backgroundColor: " rgba(218,165,32,0.2)",
                }}
                 />
             ),
        };
        break;
        case "order":
            data = {
                title: "ATTEMPTS",
                amount: 8,
                diff: 3,
                isMoney: false,
                link: "View all attempts",
                path: "/attempt",
                icon: (
                    <ShoppingCartOutlinedIcon className="icon" 
                    style={{
                        color: "goldenrod",
                        backgroundColor: " rgba(218,165,32,0.2)",
                    }}
                        />
                ),
            };
            break;
            case "earning":
                data = {
                    title: "SLR RATE",
                    amount: 98,
                    diff: 92.7,
                    isMoney: true,
                    text: "NET",
                    link: "View net SLR Rate",
                    path: "/record",
                    icon: (
                        <MonetizationOnOutlined className="icon" 
                        style={{
                            color: "green",
                            backgroundColor: " rgba(0,128,0,0.2)",
                        }}
                            />
                    ),
                };
                break;
                case "balance":
                    data = {
                        title: "Relevance",
                        amount: 127,
                        diff: 1.4,
                        isMoney: true,
                        text: "CLI",
                        link: "See details",
                        path: "/record",
                        icon: (
                            <AccountBalanceWalletOutLinedIcon className="icon" 
                            style={{
                                color: "purple",
                                backgroundColor: " rgba(128,0,128,0.2)",
                            }}
                                />
                        ),
                    };
                    break;
               default:
                    break;
}
const navigate = useNavigate();
const ClickHandler = async (path) => {
    navigate(path);
};
  return (
    <div className="widget">
      <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter"> {data.amount} {data.isMoney && data.text}</span>
            <button className="link" onClick={()=>ClickHandler(data.path)}>{data.link}</button>
      </div>
      <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUp />
             {data.diff} %
            </div>
        {data.icon}
      </div>
      
    </div>
  );

}

export default Widget
