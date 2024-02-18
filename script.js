


// innerText Chenge function


function changeInnerText(idName, value) {
    
    let idInnerText = document.getElementById(idName);
    idInnerText.innerText = value
 
 
 }


//  append Element function and remove
function appendElement(idName,Element){
    document.getElementById(idName).appendChild(Element)

}
function removeElement(idName,Element){
    document.getElementById(idName).appendChild(Element)

}







 
 
 let ticketButtonList = document.getElementsByClassName('t-btn');
 let totalSeatsLeft = parseInt(document.getElementById('seatLeft').innerText);
 let totalPrice = parseInt(document.getElementById('total_Price').innerText)
 console.log(totalPrice)
 let seatCount = 0;
 let ticketSelectCount = 1;
 for (let ticketButton of ticketButtonList) {
    let ticketButtonInnerText = ticketButton.innerText;
    ticketButton.addEventListener('click', function () {
        

 
       if (ticketSelectCount <= 4 && !ticketButton.classList.contains('bg-[#1AD100]')) {
        //   add total price and show on page
        totalPrice = totalPrice + 550 ;
        changeInnerText('total_Price', totalPrice) ;
        
        changeInnerText('total_Price', totalPrice) ;
        //   add total price and show on page
          
        
          ticketButton.classList.add("bg-[#1AD100]");
        //   add and append child classlist 

          if(ticketSelectCount ==1){

            let createElement1 = document.createElement('h6');
            createElement1.innerText = ticketButtonInnerText;
            createElement1.className =ticketButtonInnerText + " " + "addListText-1";
            
            appendElement('addList1',createElement1)
            let a = "hallo";


            let createElement2 = document.createElement('h6');
            createElement2.innerText = "Economoy";
            createElement2.className =ticketButtonInnerText + " " + "addListText-2";
            
            appendElement('addList1',createElement2);


            
            let createElement3 = document.createElement('h6');
            createElement3.innerText = "550";
            createElement3.className =ticketButtonInnerText + " " + "addListText-3";
            
            appendElement('addList1',createElement3);
            



          }else if(ticketSelectCount ==2){
            

            let createElement1 = document.createElement('h6');
            createElement1.innerText = ticketButtonInnerText;
            createElement1.className =ticketButtonInnerText + " " + "addListText-1";
            
            appendElement('addList2',createElement1)
            let a = "hallo";


            let createElement2 = document.createElement('h6');
            createElement2.innerText = "Economoy";
            createElement2.className =ticketButtonInnerText + " " + "addListText-2";
            
            appendElement('addList2',createElement2);


            
            let createElement3 = document.createElement('h6');
            createElement3.innerText = "550";
            createElement3.className =ticketButtonInnerText + " " + "addListText-3";
            
            appendElement('addList2',createElement3);
            



          }else if(ticketSelectCount ==3){

            let createElement1 = document.createElement('h6');
            createElement1.innerText = ticketButtonInnerText;
            createElement1.className =ticketButtonInnerText + " " + "addListText-1";
            
            appendElement('addList3',createElement1)
            let a = "hallo";


            let createElement2 = document.createElement('h6');
            createElement2.innerText = "Economoy";
            createElement2.className =ticketButtonInnerText + " " + "addListText-2";
            
            appendElement('addList3',createElement2);


            
            let createElement3 = document.createElement('h6');
            createElement3.innerText = "550";
            createElement3.className =ticketButtonInnerText + " " + "addListText-3";
            
            appendElement('addList3',createElement3);
            



          }else if(ticketSelectCount ==4){

            let createElement1 = document.createElement('h6');
            createElement1.innerText = ticketButtonInnerText;
            createElement1.className =ticketButtonInnerText + " " + "addListText-1";
            
            appendElement('addList4',createElement1)
            let a = "hallo";


            let createElement2 = document.createElement('h6');
            createElement2.innerText = "Economoy";
            createElement2.className =ticketButtonInnerText + " " + "addListText-2";
            
            appendElement('addList4',createElement2);


            
            let createElement3 = document.createElement('h6');
            createElement3.innerText = "550";
            createElement3.className =ticketButtonInnerText + " " + "addListText-3";
            
            appendElement('addList4',createElement3);
            



          }
          //   add and append child classlist 

          
        //   Count seat and display increase on page
seatCount = seatCount +1;
changeInnerText("ticketSelectedCount", seatCount)

          totalSeatsLeft = totalSeatsLeft - 1;
          changeInnerText('seatLeft', totalSeatsLeft)
          ticketSelectCount++;
           //   Count seat and display increase on page



// apply button Enable on fore sits complit

if (seatCount === 4){
    let applyButton = document.getElementById('apply');
    applyButton.disabled = false ;
}

// apply button Enable on fore sits

       } else if (ticketButton.classList.contains('bg-[#1AD100]')) {
//   Decrease total price and show on page
totalPrice = totalPrice - 550 ;
changeInnerText('total_Price', totalPrice) ;

        //   Decrease total price and show on page




    //    remove class list 


        let ticketButtonInnerText = ticketButton.innerText;
        let removeClassList = "."+ticketButtonInnerText;
        let classList = document.querySelectorAll(removeClassList);
        classList.forEach(function(item){
            item.remove()
            
        })

        //    remove class list 
      



        // left seat and set count is hear
       
          ticketButton.classList.remove("bg-[#1AD100]");
          totalSeatsLeft = totalSeatsLeft + 1;
          changeInnerText('seatLeft', totalSeatsLeft)
          
          ticketSelectCount--;
          changeInnerText("ticketSelectedCount", ticketSelectCount)
          seatCount = seatCount -1;
          changeInnerText("ticketSelectedCount", seatCount)
        //   left seat and set count is hear
 
       }
 


       if (seatCount < 4){
        let applyButton = document.getElementById('apply');
        applyButton.disabled = true ;
    }





 
    })
 
 }


