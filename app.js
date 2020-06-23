document.getElementById('button').addEventListener("click", getJson)
document.getElementById('forma').addEventListener("submit" , addPost)


function getJson() {
   fetch("users.json").then((res) => res.json()).then((data) => {
      let output = " ";
      data.forEach(element => {
         output += `<ul>
   <li> NAME : ${element.name} </li>
   </ul>
    `

         document.querySelector('p').innerHTML = output;
      });


   })

}



function addPost (e){
   e.preventDefault() ; 
   var title = document.getElementById("title").value ; 
   var body = document.getElementById("body").value ; 
   const myHeaders = new Headers();

   fetch('https://jsonplaceholder.typicode.com/posts', { 
      method  : "POST" , 
      headers :myHeaders ,
      body : JSON.stringify({title:title , body:body})

   }).then((res)=> res.json()).then((data)=> console.log(data))


}