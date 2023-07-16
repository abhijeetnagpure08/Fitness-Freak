let container = document.getElementById("cart-item");
let cartData = JSON.parse(localStorage.getItem("cart"))||[];
let cartLen = cartData.length;
let count = 0;
// function totalCount(){
//     let sum = 0;
//     cartData.forEach((el)=>{
//         sum+=el.price*el.quantity;
//     })
//     // count = sum;
//     // console.log(count);
    
// }
// totalCount()
console.log(count);

DisplayCard(cartData)
function DisplayCard(data){
    container.innerHTML = null;
    data.forEach((el,index) => {

        let sub_div1 = document.createElement("div");
        sub_div1.setAttribute("id","sub_div1")

        let sub_div2 = document.createElement("div");
        sub_div2.setAttribute("id","sub_div2");


        let img = document.createElement("img");
        img.setAttribute("src", el.image);

        let div1 = document.createElement("div");
        div1.setAttribute("id", "div1");

        let week = document.createElement("p");
        week.innerText = el.week;

        let title = document.createElement("h4");
        title.innerText = el.title;

        let div2 = document.createElement("div");
        div2.setAttribute("id","div2");

        let main_div = document.createElement("div");
        main_div.setAttribute("id","main_div");

        let text = document.createElement("p");
        text.innerText = el.text;

        let check = document.createElement("p");
        check.innerText = el.check;

        let price = document.createElement("h4");
        price.innerText = "$" + el.price;

        let div3 = document.createElement("div");
        div3.setAttribute("id","div3");

        let div4 = document.createElement("div");
        div4.setAttribute("id","div4");

        let quantity = document.createElement("p");
        quantity.innerText = el.quantity;

        let decrement = document.createElement("button");
        decrement.innerText="-";

        decrement.addEventListener("click",()=>{
            if(el.quantity<2){
                // quantity.innerText = 0;
                cartData.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cartData));
            para2_2.innerText = cartData.length;
            console.log(cartData);
            DisplayCard(cartData);
            console.log(cartData);
            }
            else{
                quantity.innerText = --el.quantity;
            }
            para3_2.innerText = totCount();
            para5_2.innerText ="- "+ ((totCount()*(10/100))).toFixed(2);
            para6_2.innerText = "$ "+((totCount()-(totCount()*(10/100)))).toFixed(2);
            
        })

        let increment = document.createElement("button");
        increment.innerText="+";

        increment.addEventListener("click",()=>{
            quantity.innerText = ++el.quantity;
            para3_2.innerText = totCount();
            para5_2.innerText ="- "+ ((totCount()*(10/100))).toFixed(2);
            para6_2.innerText = "$ "+((totCount()-(totCount()*(10/100)))).toFixed(2);
            
        })
;
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText="Delete";

        deleteBtn.addEventListener("click",()=>{
            cartData.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cartData));
            para2_2.innerText = cartData.length;
            para3_2.innerText = totCount();
            para5_2.innerText ="- "+ ((totCount()*(10/100))).toFixed(2);
            para6_2.innerText = "$ "+((totCount()-(totCount()*(10/100)))).toFixed(2);
            DisplayCard(cartData)
            cartLen = cartData.length
        })


        sub_div1.append(img);
        div1.append(week,title,text)
        div3.append(decrement,quantity,increment)
        div2.append(price,div3);
        div4.append(deleteBtn);
        sub_div2.append(div1,div2,div4)
        main_div.append(sub_div1,sub_div2);
        container.append(main_div);



        
        // div3.append(text,price)
        // div2.append(div3);
        // div1.append(week,title)
        // div.append(img);
        // sub_div.append(div1,div2)
        // container.append(div,sub_div);
    });
}


// let billContainer = document.getElementById("bill-page");


//        let billDiv = document.createElement("div");
//         billDiv.setAttribute("id","billDiv");

//         let bill1 = document.createElement("div");
//         bill1.setAttribute("id","bill1");

//         let head = document.createElement("h1");
//         head.innerText = "Summary";

//         let hr = document.createElement("hr");

//         let bill2 = document.createElement("div");
//         bill2.setAttribute("id","bill2");

//         let para2_1 = document.createElement("p");
//         para2_1.innerText = "ITEM";

//         let para2_2 = document.createElement("p");
//         DisplayCard(cartData);
//         para2_2.innerText = cartLen;

//         let bill3 = document.createElement("div");
//         bill3.setAttribute("id","bill2");

//         let para3_1 = document.createElement("p");
//         para3_1.innerText = "ITEM";

//         let para3_2 = document.createElement("p");
//         para3_2.innerText = cartData.length;

//         bill1.append(head,hr);
//         bill2.append(para2_1,para2_2);
//         billDiv.append(bill1,bill2);
//         billContainer.append(billDiv);

