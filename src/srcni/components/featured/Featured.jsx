import "./featured.scss"
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { KeyboardArrowUpOutlined, MoreVertOutlined } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";


const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title"> Model's Efficiency</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={93} text={"93%"} strokeWidth="5"/>
         </div>
         <p className="title">SLR Rate for today</p>
         <p className="amount">87 NET</p>
         <p className="desc">Previous generation processing. Last insight may not be included.</p>
         <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">ZMK12.7</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Attempt</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">ZMK10.7k</div>
            </div>
          </div>  
             <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">ZMK52.2k</div>
            </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Featured
