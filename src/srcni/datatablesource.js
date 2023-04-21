export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
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
    username: "Oscar Wilder",
    img: "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
    status: "active",
    email: "oscar@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://media.istockphoto.com/id/688410346/vector/chinese-style-fantasy-scenes.jpg?s=612x612&w=0&k=20&c=r3skS5InspYQ7EqUCCzUzU3QHcwRwD6mNRbDpP8sIG4=",
    email: "jamie45@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Jamal Banda",
    img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    email: "retrydead@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark Roid",
    img: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    email: "roidramian@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Valtreyak Raiden",
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    email: "raiden86@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Spryzen Heather",
    img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg",
    email: "weathering@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Carnatasm Philey",
    img: "https://openaicom.imgix.net/ed21faee-ce44-4d91-a70f-26538ad66d5b/dall-e.jpg?fm=auto&auto=compress,format&fit=min&rect=0,0,4080,4080&w=1919&h=1919",
    email: "deathtoenemy@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "All Mighty Joe",
    img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
    email: "starnshine@gmail.com",
    status: "active",
    age: 36,
  },
];