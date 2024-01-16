let c = document.getElementById("canvas");
c.height = window.innerHeight;
c.width = window.innerWidth;

let ctx = c.getContext("2d");


c.addEventListener("mousemove", mosimosi);

function mosimosi(event){
  let x = event.offsetX;
  let y = event.offsetY;
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
      ctx.arc(x, y, 5, 0, 8 * Math.PI);
      let ranR = Math.floor(Math.random()*255);
      let ranG = Math.floor(Math.random()*255);
      let ranB = Math.floor(Math.random()*255);
      ctx.fillStyle = "black";
      ctx.fillStyle = `rgb(${ranR},${ranG},${ranB})`;
      ctx.fill();

}
                                              






























// function mosimosi(event){
//   let x = event.offsetX;
//   let y = event.offsetY;
//   console.log(x,y);
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.beginPath();
//       ctx.arc(x, y, 100, 0, 2 * Math.PI);
//       // ctx.fillStyle = 'red';
//       let ranR = Math.floor(Math.random()*255);
//       let ranG = Math.floor(Math.random()*255);
//       let ranB = Math.floor(Math.random()*255);
//       ctx.fillStyle = "white";
//       ctx.fillStyle = `rgb(${ranR},${ranG},${ranB})`;
//       ctx.fill();
// }



// function blockMaker(){
//   for(let i = 0; i<= window.innerHeight - 10; i++){
//       if(i=i+10){
//           ctx.fillStyle = "black";
//       }
//       for(let j = 0; j<= window.innerWidth ; j++){
//         if(j=j+10){
//           ctx.fillRect(j,i,10, 10);
//         }
//       }
//     }
// }

// setInterval(blockMaker,100)
// // blockMaker();

//   for(let i = 0; i<= window.innerWidth; i++){
//       if(i+=10){}
//       for(let j = 0; j<= window.innerHeight; j++){
//         if(j+=10){}
//         ctx.fillStyle = "green";
//         ctx.fillRect(i,j,5,5);
//       }
//   }