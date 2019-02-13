function searchFoods() {
    var input, filter, foodnames, a, i, foodGrid, categoryNames;
    input = document.getElementById("foodSearch");
    filter = input.value.toUpperCase();
    foodGrid = document.getElementsByClassName('gridElementRight');
    categoryNames = document.getElementsByClassName('Type');
    foodnames = document.getElementsByClassName('itemName');


    for (i = 0; i < foodnames.length; i++) {
        a = foodnames[i].innerText;
        b = categoryNames[i].innerText;
        if (a.toUpperCase().indexOf(filter) > -1 || b.toUpperCase().indexOf(filter) > -1) {
            foodGrid[i].style.display = "";
        } else {
            foodGrid[i].style.display = "none";
        }
    }
}


function searchTables() {
  var input, filter, tablenames, a, i, tableGrid, categoryNames;
  input = document.getElementById("tableSearch");
  filter = input.value.toUpperCase();
  tableGrid = document.getElementsByClassName('gridElementLeft');
  tablenames = document.getElementsByClassName('tableNo');


  for (i = 0; i < tablenames.length; i++) {
      a = tablenames[i].innerText;
      if (a.toUpperCase().indexOf(filter) > -1) {
          tableGrid[i].style.display = "";
      } else {
          tableGrid[i].style.display = "none";
      }
  }

}


var Tables = document.getElementsByClassName('gridElementLeft');
var overlays = document.getElementsByClassName('modelOverlay');
var itemVarieties = document.getElementsByClassName('itemTypes');
var itemNumbers = document.getElementsByClassName('itemNos');
var Prices = document.getElementsByClassName('itemPrices');




var temp = 0, temporary=0;
var glob = 0;
var i=0;
for(i=0; i<Tables.length; i++){
  Tables[i].onclick = (function(i) {return function() {
        glob = i;

        while (overlays[i].hasChildNodes()) {
            overlays[i].removeChild(overlays[i].lastChild);
        }

        var mod = document.createElement("div");

        var descriptors1 = document.createElement("div");
        var descriptors2 = document.createElement("div");
        var descriptors3 = document.createElement("div");
        var descriptors4 = document.createElement("div");
        var descriptors5 = document.createElement("div");
        var descriptors6 = document.createElement("div");
        var descriptors7 = document.createElement("div");

        descriptors1.innerText = "Sr No.";
        descriptors2.innerText = "Name";
        descriptors3.innerText = "Total Price";
        descriptors4.innerText = "";
        descriptors5.innerText = "No. of items";
        descriptors6.innerText = "";
        descriptors7.innerText = "";

        mod.appendChild(descriptors1);
        mod.appendChild(descriptors2);
        mod.appendChild(descriptors3);
        mod.appendChild(descriptors4);
        mod.appendChild(descriptors5);
        mod.appendChild(descriptors6);
        mod.appendChild(descriptors7);




        var limit = itemVarieties[i].childElementCount;



        for(j=0; j<limit; j++){
          var mod1 = document.createElement("div");
          var mod2 = document.createElement("div");
          var mod3 = document.createElement("div");
          var mod4 = document.createElement("BUTTON");
          var t = document.createTextNode("+");
          mod4.appendChild(t);
          mod4.classList.add("Increase"+i);
          var mod5 = document.createElement("div");
          var mod6 = document.createElement("BUTTON");
          var n = document.createTextNode("-");
          mod6.appendChild(n);
          mod6.classList.add("Decrease"+i);
          var mod7 = document.createElement("button");
          var m = document.createTextNode("Remove");
          mod7.appendChild(m);
          mod7.classList.add("Remove"+i);
          mod7.id = "Remove";
          mod1.innerText = j+1;
          mod2.innerText = itemVarieties[i].children[j].innerText;
          mod3.innerText = Prices[i].children[j].innerText*itemNumbers[i].children[j].innerText;
          mod5.innerText = itemNumbers[i].children[j].innerText;



          mod.appendChild(mod1);
          mod.appendChild(mod2);
          mod.appendChild(mod3);
          mod.appendChild(mod4);
          mod.appendChild(mod5);
          mod.appendChild(mod6);
          mod.appendChild(mod7);

        }

        var total = document.createElement("div");
        var sum=0;
        for(var tempcounter=0; tempcounter<limit; tempcounter++){
            sum+=Number(mod.children[(tempcounter*7)+9].innerText);
        }
        total.innerText = "Total cart value:   " + sum;
        total.id = "Total";
        mod.appendChild(total);


        mod.classList.add('model-content');
        overlays[i].appendChild(mod);


        overlays[i].style.display = "block";
        Tables[i].style.backgroundColor = "silver";
        temp = i;


        var rembutn = document.getElementsByClassName("Remove"+i);
        for(var num=0; num<rembutn.length; num++){
          rembutn[num].onclick = (function(num) {return function() {

            var temp7 = Number(Tables[i].children[2].innerText);
            temp7 -= Number(itemNumbers[i].children[num].innerText);
            Tables[i].children[2].innerText = temp7;

            var temp8 = Number(Tables[i].children[1].innerText);
            temp8 -= Number(Prices[i].children[num].innerText)*Number(itemNumbers[i].children[num].innerText);
            Tables[i].children[1].innerText = temp8;

            itemVarieties[i].childNodes[num+1].remove();
            itemNumbers[i].childNodes[num+1].remove();
            Prices[i].childNodes[num+1].remove();

            for(var tempcount=7*num; tempcount<(7*num)+14; tempcount++){
              overlays[i].childNodes[0].childNodes[tempcount].remove();

            }




        };})(num);
      }




        var addbtn = document.getElementsByClassName("Increase"+i);
        for(var num=0; num<addbtn.length; num++){
          addbtn[num].onclick = (function(num) {return function() {

          var changer = Number(overlays[i].children[0].children[11+(num*7)].innerText);
          changer+=1;
          overlays[i].children[0].children[11+(num*7)].innerText = changer;
          itemNumbers[i].children[num].innerText = changer;
          var temp5 = Number(Tables[i].children[2].innerText);
          temp5+=1;
          Tables[i].children[2].innerText = temp5;

          var temp6 = Number(Tables[i].children[1].innerText);
          temp6+=Number(Prices[i].children[num].innerText);
          Tables[i].children[1].innerText = temp6;


        };})(num);
      }


      var delbtn = document.getElementsByClassName("Decrease"+i);
      for(var num=0; num<delbtn.length; num++){
        delbtn[num].onclick = (function(num) {return function() {

          if(overlays[i].children[0].children[11+(num*7)].innerText>0 && Tables[i].children[2].innerText>0 && Tables[i].children[1].innerText>0){



        var changer = Number(overlays[i].children[0].children[11+(num*7)].innerText);
        changer-=1;
        overlays[i].children[0].children[11+(num*7)].innerText = changer;
        itemNumbers[i].children[num].innerText = changer;
        var temp5 = Number(Tables[i].children[2].innerText);
        temp5-=1;
        Tables[i].children[2].innerText = temp5;

        var temp6 = Number(Tables[i].children[1].innerText);
        temp6-=Number(Prices[i].children[num].innerText);
        Tables[i].children[1].innerText = temp6;
      }

      if(overlays[i].children[0].children[11+(num*7)].innerText==0){

        itemVarieties[i].childNodes[num+1].remove();
        itemNumbers[i].childNodes[num+1].remove();
        Prices[i].childNodes[num+1].remove();

        for(var tempcount=7*num; tempcount<(7*num)+14; tempcount++){
          overlays[i].childNodes[0].childNodes[tempcount].remove();

        }


      }


      };})(num);
    }






};})(i);
  }


window.onclick = function(event) {
  if (event.target == overlays[temp]) {
      overlays[temp].style.display = "none";
      Tables[glob].style.backgroundColor = "";
  }
}


var dragged;


document.addEventListener("drag", function( event ) {

}, false);

document.addEventListener("dragstart", function( event ) {

    dragged = event.target;

    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {

    event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", function( event ) {

    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {

    if ( event.target.className == "gridElementLeft"  ) {
        event.target.style.background = "#ced8e8";
    }

    else if(event.target.className == "tableNo" || event.target.className == "Bill" ||event.target.className == "totalItems"){
      event.target.parentElement.style.background = "#ced8e8";
    }

}, false);

document.addEventListener("dragleave", function( event ) {

    if ( event.target.className == "gridElementLeft" ) {

      event.target.style.background = "";

    }
}, false);


document.addEventListener("drop", function( event ) {

    event.preventDefault();

    if ( event.target.className == "gridElementLeft") {
        event.target.style.background = "";
        var counter=0;
        for(counter = 0; counter<Tables.length; counter++){
          if(Tables[counter]==event.target){
            break;
          }
        }

        var targetVar = event.target;
        var temp2 = Number(event.target.children[2].innerText);
        temp2+=1;
        event.target.children[2].innerText = temp2;

        var temp1 = Number(event.target.children[1].innerText);
        temp1+=Number(dragged.children[1].innerText);
        event.target.children[1].innerText = temp1;




        var counter2=0, flag=0;

        for(counter2=0; counter2<itemVarieties[counter].childElementCount; counter2++){
            if(itemVarieties[counter].children[counter2].innerText==dragged.children[0].innerText){
              var temp3 = Number(itemNumbers[counter].children[counter2].innerText);
              temp3+=1;
              itemNumbers[counter].children[counter2].innerText = temp3;
              flag=1;
              break;
            }
        }
        if(flag===0){
          var mod1 = document.createElement('div');
          var mod2 = document.createElement('div');
          var mod3 = document.createElement('div');
          mod1.innerText = dragged.children[0].innerText;
          mod2.innerText = 1;
          mod3.innerText = dragged.children[1].innerText;
          itemVarieties[counter].appendChild(mod1);
          itemNumbers[counter].appendChild(mod2);
          Prices[counter].appendChild(mod3);
        }

    }

    else if(event.target.className == "tableNo" || event.target.className == "Bill" ||event.target.className == "totalItems"){


      event.target.parentElement.style.background = "";
      var counter=0;
      for(counter = 0; counter<Tables.length; counter++){
        if(Tables[counter]==event.target.parentElement){
          break;
        }
      }

      var targetVar = event.target.parentElement;
      var temp2 = Number(event.target.parentElement.children[2].innerText);
      temp2+=1;
      event.target.parentElement.children[2].innerText = temp2;

      var temp1 = Number(event.target.parentElement.children[1].innerText);
      temp1+=Number(dragged.children[1].innerText);
      event.target.parentElement.children[1].innerText = temp1;




      var counter2=0, flag=0;

      for(counter2=0; counter2<itemVarieties[counter].childElementCount; counter2++){
          if(itemVarieties[counter].children[counter2].innerText==dragged.children[0].innerText){
            var temp3 = Number(itemNumbers[counter].children[counter2].innerText);
            temp3+=1;
            itemNumbers[counter].children[counter2].innerText = temp3;
            flag=1;
            break;
          }
      }
      if(flag===0){
        var mod1 = document.createElement('div');
        var mod2 = document.createElement('div');
        var mod3 = document.createElement('div');
        mod1.innerText = dragged.children[0].innerText;
        mod2.innerText = 1;
        mod3.innerText = dragged.children[1].innerText;
        itemVarieties[counter].appendChild(mod1);
        itemNumbers[counter].appendChild(mod2);
        Prices[counter].appendChild(mod3);
      }
    }

}, false);
