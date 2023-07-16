let billContainer = document.getElementById("bill-page");
let billData = JSON.parse(localStorage.getItem("cart"))||[];

totCount();
       let billDiv = document.createElement("div");
        billDiv.setAttribute("id","billDiv");

        let bill1 = document.createElement("div");
        bill1.setAttribute("id","bill");

        let head = document.createElement("h1");
        head.innerText = "SUMMARY";

        let hr = document.createElement("hr");

        let bill2 = document.createElement("div");
        bill2.setAttribute("id","bill2");
        let hr1 = document.createElement("hr");

        let para2_1 = document.createElement("p");
        para2_1.innerText = "ITEM";

        let para2_2 = document.createElement("p");
        para2_2.innerText = billData.length;

        let bill3 = document.createElement("div");
        bill3.setAttribute("id","bill3");

        let para3_1 = document.createElement("p");
        para3_1.innerText = "Subtotal";

        
        let para3_2 = document.createElement("p");
        function totCount(){
            let sum = 0;
            cartData.forEach((el)=>{
                sum+=el.price*el.quantity;
            })
            return sum.toFixed(2);
            
        }
        para3_2.innerText = totCount();
        totCount()
        // console.log(count);
        
        let bill4 = document.createElement("div");
        bill4.setAttribute("id","bill4");

        let para4_1 = document.createElement("p");
        para4_1.innerText = "Discount";

        let para4_2 = document.createElement("p");
        para4_2.innerText = "+ 10%";

        let bill5 = document.createElement("div");
        bill5.setAttribute("id","bill5");

        let para5_1 = document.createElement("p");
        para5_1.innerText = "Discount Charge";

        let para5_2 = document.createElement("p");
        para5_2.innerText = "- "+ ((totCount()*(10/100))).toFixed(2);

        let bill6 = document.createElement("div");
        bill6.setAttribute("id","bill6");

        let para6_1 = document.createElement("p");
        para6_1.innerText = "TOTAL";

        let para6_2 = document.createElement("p");
        para6_2.innerText = "$ "+((totCount()-(totCount()*(10/100)))).toFixed(2);;

        let bill7 = document.createElement("div");
        bill7.setAttribute("id","bill7");

        let order = document.createElement("button");
        order.innerText = "Place Order";

        order.addEventListener("click",()=>{
            window.location.assign("Payment.html");
        })

        bill1.append(head);
        bill2.append(para2_1,para2_2,);
        bill3.append(para3_1,para3_2);
        bill4.append(para4_1,para4_2);
        bill5.append(para5_1,para5_2);
        bill6.append(para6_1,para6_2);
        bill7.append(order);
        billDiv.append(bill1,hr1,bill2,bill3,bill4,bill5,hr,bill6,bill7);
        billContainer.append(billDiv);

