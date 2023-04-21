import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Avatar,
  Box,
} from '@mui/material';

const List = () => {

 const rows = [
    {
        id: 11,
        product: "Avengers: Endgame",
        img: "./assets/images/avenger.jpg",
        customer: "Carnatasm Philey",
        date: "1 March 2023",
        amount: 87,
        method: "Destruction and Renewal",
        status: "Approved",
        enter: "Generated",
    },
    {
        id: 2,
        product: "Batman: Arkham Knight",
        img: "./assets/images/batman_ark.jpg",
        customer: "Jamal Banda",
        date: "1 April 2023",
        amount: 196,
        method: "Posion Betrayal and Vigilantism",
        status: "Pending",
        enter: "Processing",
    },
    {
        id: 5,
        product: "Batman",
        img: "./assets/images/batman.jpg",
        customer: " Vatreyak Raiden",
        date: "2 April 2023",
        amount: 56,
        method: "Seed of Doubt",
        status: "Approved",
        enter: "Generated",
    },
    {
        id: 23,
        product: "Joker",
        img: "./assets/images/joker.jpg",
        customer: "Spryzen Heather",
        date: "18 March 2023",
        amount: 87,
        method: "Maniac's Garden",
        status: "Approved",
        enter: "Generated",
    },
    {
        id: 6,
        product: "Titanic",
        img: "./assets/images/titanic.jpg",
        customer: "Oscar Wilder",
        date: "27 March 2023",
        amount: 77,
        method: "Lover's Bet",
        status: "Approved",
        enter: "Generated",
    },
 ];


  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Title ID</TableCell>
          <TableCell className="tableCell">Ttile</TableCell>
          <TableCell className="tableCell">Collaborators</TableCell>
          <TableCell className="tableCell">Date of Attempt</TableCell>
          <TableCell className="tableCell">SLR-MSE Ratio</TableCell>
          <TableCell className="tableCell">Insight</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id} >
            <TableCell className="tableCell" align="right">{row.id}</TableCell>
            <TableCell className="tableCell" align="right">
              <Box display="flex" alignItems="center">
                <Avatar src={process.env.PUBLIC_URL + row.img} />
                <div style={{paddingLeft:8}}> {row.product} </div>
              </Box>
              {/* <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div> */}
            </TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.enter}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List
