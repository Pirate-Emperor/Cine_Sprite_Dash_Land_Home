export const userColumns = [
  { field: "id", headerName: "EID", width: 70 },
  {
    field: "eng",
    headerName: "Engine",
    width: 150,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "alpha",
    headerName: "alpha",
    width: 100,
  },

  {
    field: "beta",
    headerName: "beta",
    width: 100,
  },
  {
    field: "gamma",
    headerName: "gamma",
    width: 100,
  },
  {
    field: "terra",
    headerName: "terra",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    eng: "CineEngine#1",
    img: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
    status: "generated",
    alpha: 172,
    beta: 35,
    gamma: 12,
    terra: 45,
  },
  {
    id: 2,
    eng: "CineEngine#2",
    img: "https://media.istockphoto.com/id/688410346/vector/chinese-style-fantasy-scenes.jpg?s=612x612&w=0&k=20&c=r3skS5InspYQ7EqUCCzUzU3QHcwRwD6mNRbDpP8sIG4=",
    status: "generated",
    alpha: 193,
    beta: 32,
    gamma: 9,
    terra: 89,
  },
  {
    id: 3,
    eng: "CineEngine#3",
    img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    status: "halted",
    alpha: 100,
    beta: 50,
    gamma: 10,
    terra: 50,
  },
  {
    id: 4,
    eng: "CineEngine#4",
    img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    status: "generated",
    alpha: 72,
    beta: 5,
    gamma: 1,
    terra: 4,
  },
  {
    id: 5,
    eng: "CineEngine#5",
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    status: "pending",
    alpha: 200,
    beta: 80,
    gamma: 20,
    terra: 100,
  },
];