import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import "./home.scss"
import {db} from "../../../../../Firebase"






import Banner from '../../../srcnl/partials/Banner';
const Home = ({landMode, setLandMode, homeMode, setHomeMode}) => {
  
  return (
    <div className="home">
      {/* <Sidebar/> */}
      <div className="homeContainer">
      <Navbar homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}
          setLandMode={(obj) => setLandMode(obj)}/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart title="Model's Efficiency over multiple cycles" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Attempts</div>
        <Table/>
      </div>
      </div>
      <Banner/>
    </div>
  )
}

export default Home