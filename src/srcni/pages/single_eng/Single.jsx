import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart" ;
import ChartG from "../../components/chart_g/ChartG" ;
import Table from "../../components/table/Table";

const SingleEngine = ({homeMode, setHomeMode }) => {
  return (
    <div className="single">
      {/* <Sidebar/> */}
      <div className="singleContainer">
        <Navbar homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://e1.pxfuel.com/desktop-wallpaper/686/814/desktop-wallpaper-kratos-god-of-war-ps4-kratos.jpg" 
              alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">Fighter</h1>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemKey">+91 999 999 999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemKey">Faye's Residence, Esgilod, Sparta</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemKey">Greece</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <ChartG aspect={3 /1} title="User Records ( Last 6 Attempts)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title"> Last Attempts</h1>
          <Table/>
        </div>
      </div>
    </div>
)
}

export default SingleEngine
