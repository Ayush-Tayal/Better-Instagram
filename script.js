const allImages = document.querySelectorAll(".image");
// console.log(allImages);
const parent = document.getElementById("parent");
// console.log(parent);

let cloneStart = "";
let cloneEnd = "";

const dragStart =(e)=> {
  e.dataTransfer.setData("start", e.target.id);
  console.log("drag starts");
}; 

const dragover = ((e) => {
  console.log("DragOver has been triggered");
  e.preventDefault();
});

function drop(e){
  console.log("drop end");
  
  let startID = e.dataTransfer.getData("start");
  console.log(startID); // id of where drag start
  
  cloneEnd = e.target.cloneNode(true);
  cloneStart = document.getElementById(startID).cloneNode(true);
  cloneStart.id = "tempID";
  
  // console.log(cloneStart)
  
  addingEventListener(cloneStart);
  addingEventListener(cloneEnd);
  
  parent.replaceChild(cloneStart, e.target);
  parent.replaceChild(cloneEnd, document.getElementById(startID));
  
  document.getElementById("tempID").id = startID;

}

function addingEventListener(image){
  image.ondragstart = dragStart;
  image.ondragover = dragover;
  image.ondrop = drop;
}

allImages.forEach((image)=>{
  addingEventListener(image);
});

