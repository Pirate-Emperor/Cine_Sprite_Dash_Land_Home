import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({homeMode, setHomeMode }) => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
        <Datatable/>
      </div>
    </div>
)
}

export default List
