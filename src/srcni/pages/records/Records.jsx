import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import ChartG from "../../components/chart_g/ChartG"
import Table from "../../components/table/Table"
import "./record.scss"

import Banner from '../../../srcnl/partials/Banner';
const Record = ({homeMode, setHomeMode, setLandMode }) => {
  return (
    <div className="record">
      {/* <Sidebar/> */}
      <div className="homeContainer">
      <Navbar homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}
          setLandMode={(obj) => setLandMode(obj)}/>
      {/* <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div> */}
      <div className="charts">
        <Featured/>
        <Chart title="Model's Efficiency over multiple cycles" aspect={2/1}/>
      </div>
      <div className="charts">
        <ChartG title="Last 6 Attempts (Clients Satisfaction)" aspect={2/1}/>
      </div>
      {/* <div className="listContainer">
        <div className="listTitle">Latest Attempts</div>
        <Table/>
      </div> */}
      </div>
      <Banner/>
    </div>
  )
}

export default Record