// featch api
// const url = 'https://641549af5be9d76da4f0d1fc.mockapi.io/users';
// function getAPI(url){
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
// getAPI(url);

function AddUser(datas){
    fetch('https://641549af5be9d76da4f0d1fc.mockapi.io/users',{
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(datas),
    }).then((response)=>response.json()
    .then((data)=>{
        console.log(data)
    })
    .catch((error) => {
        console.error("Error:", error);
      }));
}
var data = {
    "name": "Pat AAA",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/812.jpg",
   };
// AddUser(data);
function editProfile(id,datas){
    fetch('https://641549af5be9d76da4f0d1fc.mockapi.io/users/'+id,{
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(datas),
    }).then((response)=>response.json()
    .then((data)=>{
        console.log(data)
    })
    .catch((error) => {
        console.error("Error:", error);
    }));
}
var datas = {
    "name": "Pat AAA id 2",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/812.jpg",
}
// editProfile(1,datas);

function DeleteUser(userid){
    fetch('https://641549af5be9d76da4f0d1fc.mockapi.io/users/'+userid,{
        method: "DELETE",
    }).then((response)=>response.json()
    .then((data)=>{
        console.log(data)
    })
    .catch((error) => {
        console.error("Error:", error);
    })); 
}
// DeleteUser(1);