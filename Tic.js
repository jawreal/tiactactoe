//this project is made on March 2024, I didn't have time to push it early in Github as a result of I was busy learning frameworks and couldn't have a chance to learn Github back then but now, I'm working on it
//the time that I made this was I'm at beginner phase. Practicing the js logic, and css styling. 
document.addEventListener('DOMContentLoaded', function (){
  let Buttons = document.querySelectorAll(".myButtons");
  let label = document.getElementById("lbl");
  let labelClass = document.querySelector (".lblClass");
  let Body = document.querySelector(".container");
  
  const object = {};
  object['Act'] = "X"; 
  let ArrayId = [];
  let IDchunk = 3;
  let IDgroup = [];
  let IDgroupCol = [];
  let column = [];
  let ColChunk = 3;
  let newButtons = Array.from(Buttons);
  for (let i = 0; i<newButtons.length; i++){
    ArrayId.push(newButtons[i].id);
  }
  for (let i = 0; i<ArrayId.length; i += IDchunk){
    let IDresult = ArrayId.slice(i, i+IDchunk);
    IDgroup.push(IDresult);
  }
  function LabelClassBlur(){
    labelClass.style.visibility = "visible";
    labelClass.style.float = "none"; 
    Body.style.filter = "blur(2px)";
  }
  function Cross(isTrue){
    let arraycross1 = ["btn1", "btn5", "btn9"];
    let arraycross2 = ["btn3", "btn5", "btn7"];
    if (isTrue){
      for (let i = 0; i<arraycross1.length; i++){
        let X = document.getElementById(`${arraycross1[i]}`);
        X.style.background = "Transparent";
        X.style.color = "skyblue";
        X.style.border = "1px solid skyblue";
      }
    }else{
        for (let i = 0; i<arraycross2.length; i++){
        let O = document.getElementById(`${arraycross2[i]}`);
        O.style.background = "Transparent";
        O.style.color = "skyblue";
        O.style.border = "1px solid skyblue";
      }
      
    }
  }
  function ColumnCheck(Facts){
    for (let i = 0; i<column.length; i++){
      let COLelement;
      COLelement = column[i];
      if (COLelement.every(value => value !== "undefined" && document.getElementById(`${value}`).textContent === "X")){
        COLelement.forEach(value => {
          let b = document.getElementById(`${value}`);
          b.style.background = "transparent";
          b.style.border = "1px solid skyblue";
          b.style.color = "skyblue";
        });
        LabelClassBlur();
        isNotNone = true;
        Disable(isNotNone);
        return;
      }else if (COLelement.every(value => value !== "undefined" && document.getElementById(`${value}`).textContent === "O")){
        COLelement.forEach(value => {
          let b = document.getElementById(`${value}`);
          b.style.background = "transparent";
          b.style.border = "1px solid skyblue";
          b.style.color = "skyblue";
        });
        LabelClassBlur();
        isNotNone = false;
        Disable(isNotNone);
        return;
      }
      }
    if(!Facts){
        for (let i = 0; i<column.length; i++){
      let COLelement;
      COLelement = column[i];
      if (COLelement.every(value => value !== "undefined" && document.getElementById(`${value}`).textContent === "X")){
        COLelement.forEach(value => {
          let b = document.getElementById(`${value}`);
          b.style.background = "transparent";
          b.style.border = "1px solid skyblue";
          b.style.color = "skyblue";
        });
        LabelClassBlur();
        isNotNone = true;
        Disable(isNotNone);
        Result(isNotNone);
        console.log("Ysy");
        return;
      }else if (COLelement.every(value => value !== "undefined" && document.getElementById(`${value}`).textContent === "O")){
        COLelement.forEach(value => {
          let b = document.getElementById(`${value}`);
          b.style.background = "transparent";
          b.style.border = "1px solid skyblue";
          b.style.color = "skyblue";
        });
        LabelClassBlur();
        console.log("Yayyy");
        isNotNone = false;
        Disable(isNotNone);
        tieActive = true;
        return;
      }else{
        LabelClassBlur();
        Result(Facts);
      }
      }
    }
  } 
  function ChunkThem(){
    for (let i = 0; i<IDgroupCol.length; i += ColChunk){
      let Column = IDgroupCol.slice(i, i+ColChunk);
      column.push(Column);
    }
  }
  function Push(){
    for (let i = 0; i<IDgroup.length; i++){
      IDgroupCol.push(IDgroup[0][i]);
      IDgroupCol.push(IDgroup[1][i]);
      IDgroupCol.push(IDgroup[2][i]);
    }
      ChunkThem(); 
  }
  function Remove(ID){
    let btnID = document.getElementById(`${ID}`);
    btnID.disabled = true;
    btnID.style.color = "black";
  }
  function Result(isTrue){
    if (!isTrue){
      Buttons.forEach(btn => {
      btn.style.color = "hsl(214.9,90.9%,80%)";
      btn.style.border = "1px solid hsl(214.9,90.9%,80%)";
      btn.style.background = "transparent ";
    }); 
      label.textContent = "IT'S A TIE";
    }else{
      Buttons.forEach(btn => {
      btn.disabled = true;
    });
    }
  }
  function Disable(isTrue){
    if (isTrue){
      Buttons.forEach(btn => {
        btn.disabled = true;
        label.textContent = "PLAYER X WIN"
      });
    }else{
      Buttons.forEach(btn => {
        btn.disabled = true;
        label.textContent = "PLAYER O WIN"
      });
    }
  }
  function Tie(isTie){
    if (isTie){
        let one = document.getElementById(`${ArrayId[0]}`);
        let five = document.getElementById(`${ArrayId[4]}`);
        let nine = document.getElementById(`${ArrayId[8]}`);
        let three = document.getElementById(`${ArrayId[2]}`);
        let seven = document.getElementById(`${ArrayId[6]}`);
        let isTrue; 
      if (one.textContent === "X" && five.textContent === "X" && nine.textContent=== "X"){
        label.textContent = "PLAYER X WIN";
        let x = true;
        isTrue = true;
        LabelClassBlur();
        Cross(x);
        Result(isTrue);
      }else if (one.textContent === "O" && five.textContent === "O" && nine.textContent === "O"){
        label.textContent = "PLAYER O WIN";
        LabelClassBlur();
        let o = true;
        isTrue = true;
        Cross(o);
        Result(isTrue);
      }else if (three.textContent === "X" && five.textContent === "X" && seven.textContent === "X"){
        label.textContent = "PLAYER X WIN";
        LabelClassBlur();
        let x = false;
        isTrue = true;
        Cross(x); 
        Result(isTrue);
      }else if (three.textContent === "O" && five.textContent === "O" && seven.textContent === "O"){
        label.textContent = "PLAYER O WIN";
        LabelClassBlur();
        let o = false;
        isTrue = true;
        Cross(o);
        Result(isTrue);
      }else if (ArrayId.every(value => document.getElementById(`${value}`).textContent !== "")){
        let row = false;
        //RowCheck(row);
        isTrue = false;
        ColumnCheck(isTrue);
        /*setTimeout(() => {
          Result(isTrue); 
        }, 1000); */
        } 
    }
  }
  
  /*let info = [];*/
  let array = [];
  let isNotNone;
  let arrayChunk = 3;
  let arrayGroup = [];
  
/*
  for (let i = 0; i<arrayGroup.length; i++){
  let pieces = arrayGroup[i];
  if (pieces.length > 2){
    console.log("Yes");
    if (pieces.every(value => value === "o")){
    console.log("You win");
    break;
    }else if (pieces.every(value => value === "x")){
    console.log("You win");
    break;
    }else{
    console.log("It's a tie");
    } 
  }
}
  
  */
  
  let restart = document.getElementById("Restart");
  
  if (restart){
    restart.addEventListener('click', event => {
    location.reload();
    labelClass.style.visibility = "hidden";
    Body.style.filter = "blur(5px)";
  });
  }
  
  
  Buttons.forEach(button => {
    button.addEventListener('click', event => {
      if (object['Act'] === "X"){
        button.textContent = "X";
        object['Act'] = "O";
        let ID = event.target.id;
        Remove(ID);
        /*info.push(ID);
        console.log(ID); */
      }else{
        button.textContent = "O";
        object['Act'] = "X"; 
        let ID = event.target.id;
        Remove(ID);
        /*console.log(ID);*/
      }
      Push();
      if (column.length > 3){
        column.splice(3);
      }
      let check = true;
      ColumnCheck(check);
      //RowCheck(check);
      for (let i = 0; i<IDgroup.length; i++){
      let IDelement;
      IDelement = IDgroup[i]
      if (IDelement.every(value => value !== "undefined" && document.getElementById(`${value}`).textContent === "X")){
        IDelement.forEach(value => {
          let b = document.getElementById(`${value}`);
          b.style.background = "transparent";
          b.style.border = "1px solid skyblue";
          b.style.color = "skyblue";
        });
        LabelClassBlur(); 
        isNotNone = true;
        Disable(isNotNone);
        console.log("Yayyy");
        break;
      }else if (IDelement.every(value => value !== "undefined" && document.getElementById(`${value}`).textContent === "O")){
        IDelement.forEach(value => {
          let b = document.getElementById(`${value}`);
          b.style.background = "transparent";
          b.style.border = "1px solid skyblue";
          b.style.color = "skyblue";
        }); 
        LabelClassBlur();
        isNotNone = false;
        Disable(isNotNone);
        break;
      }else{
          let isTie = true;
          Tie(isTie); 
      }
      /*let IDtxt = document.getElementById(`${IDelement[j]}`).textContent;
      if (IDtxt === ""){
        isNotNone = true;
      }else if (IDtxt.trim() !== "undefined"){
        console.log(IDtxt);
      }*/
      }
      

    });
  });
});