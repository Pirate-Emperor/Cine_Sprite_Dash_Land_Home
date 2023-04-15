import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import "./home.scss"


const Home = ({homeMode, setHomeMode }) => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
      <Navbar homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
        <Featured/>
        <Chart title="Last 6 Attempts (Clients Satisfaction)" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Attempts</div>
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default Home