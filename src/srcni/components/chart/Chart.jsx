import { useState, useEffect } from "react";
import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {db} from "../../../../../Firebase.js"
import { collection, getDocs } from "firebase/firestore"; 

const Chart = ({aspect , title}) => {
  const [data,setData] = useState([
    { name: "1", Total: 1106},
    { name: "2", Total: 1208},
    { name: "3", Total: 1397},
    { name: "4", Total: 1322},
    { name: "5", Total: 1093},
    { name: "6", Total: 1457},
    { name: "7", Total: 1406},
    { name: "8", Total: 1308},
    { name: "9", Total: 1397},
    { name: "10", Total: 1222},
    { name: "11", Total: 1193},
    { name: "12", Total: 1157},
    { name: "13", Total: 1206},
    { name: "14", Total: 1318},
    { name: "15", Total: 1192},
    { name: "16", Total: 1342},
    { name: "17", Total: 1193},
    { name: "18", Total: 957},
    { name: "19", Total: 1206},
    { name: "20", Total: 1308},
    { name: "21", Total: 1357},
    { name: "22", Total: 1382},
    { name: "23", Total: 1099},
    { name: "24", Total: 1181},
    { name: "25", Total: 1176},
    { name: "26", Total: 1298},
    { name: "27", Total: 1397},
    { name: "28", Total: 1397},
    { name: "29", Total: 1393},
    { name: "30", Total: 1407},
    { name: "31", Total: 1406},
    { name: "32", Total: 1408},
    { name: "33", Total: 1497},
    { name: "34", Total: 1422},
    { name: "35", Total: 1493},
    { name: "36", Total: 1457},
  ]);
 
    // Start the fetch operation as soon as
    // the page loads
    // window.addEventListener('load', () => {
    //     Fetchdata();
    //   });
 
    // Fetch the required data using the get() method
    const Fetchdata = async ()=>{
        await getDocs(collection(db,"data2")).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc,i) => ({...doc.data(),name:i+1}));
          setData(newData);                
          console.log(data, newData);

            // querySnapshot.forEach(element => {
            //     var data = element.data();
            //     setData(arr => [...arr , data]);
                 
            // });
        })
        console.log(data);
    }
    useEffect(()=>{
      Fetchdata();
  }, [])
  
  const addRow=(nam,val)=>{
    let newData={name:nam,Total:val}
    setData([...data,newData])
  };
  // let total=50;
  // for (let i = 12; i <= total; i++) {
  //   addRow(`${i+1}`,Math.floor(Math.random()*total + 1));
  // }
  let i=12;
  // addRow(`${i+1}`,Math.floor(Math.random()*total + 1));
  return (
    <div className='chart' onClick={()=>Fetchdata()}>
      <div className="title">{title}</div>
       <ResponsiveContainer width="100%" aspect={aspect}>
            <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
      </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
