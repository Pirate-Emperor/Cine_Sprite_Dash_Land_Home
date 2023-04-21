import "./attempt.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AttemptData from "../../components/attempt_data/AttemptData"

const Attempt = ({homeMode, setHomeMode }) => {
  return (
    <div className="attempt">
      {/* <Sidebar/> */}
      <div className="listContainer">
        <Navbar homeMode={homeMode}
          setHomeMode={(obj) => setHomeMode(obj)}/>
        <AttemptData/>
      </div>
    </div>
)
}

export default Attempt
