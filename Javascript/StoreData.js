let pcard = document.getElementById("p-cards");

let url = ("StoreData/program.json");

let filterSelect = document.getElementById("filter");
let fetchedData = [];   


async function fetchCard(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        // let jk=data;
        // add(jk)
        fetchedData = data;
        DisplayCard(data);
        // console.log(data);
    }catch(err){
        console.log(err);
    }
}
fetchCard();

function search(){
    pcard.innerHTML=null;
    let a=document.querySelector("#search").value;
    let newData=fetchedData.filter((el)=>{
        return el.week.toLowerCase().includes(a.toLowerCase());
    })
    if(newData.length===0){
        pcard.innerText="No result found"
    }
    console.log(newData)
    DisplayCard(newData);
}

filterSelect.addEventListener("change",(e) =>{
    let newData = fetchedData
    let filtered = fetchedData.filter((el) =>{
        if(el.check === filterSelect.value){
            return true;
        }
    })   
    if(filtered){
        DisplayCard(filtered);  
    }else{
        DisplayCard(newData)
    }     
    console.log(filtered)
    // console.log(data)
})

function DisplayCard(data){
    pcard.innerHTML = null;
    data.forEach((el,index) => {
        let div = document.createElement("div");

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

        // -----div3-----
        let div3 = document.createElement("div");
        div3.setAttribute("id","div3");

        let text = document.createElement("p");
        text.innerText = el.text;

        let check = document.createElement("p");
        check.innerText = el.check;

        let price = document.createElement("h4");
        price.innerText = "$" + el.price;

        let btn = document.createElement("button");
        btn.innerText = "🛍️"+" "+"ADD TO BAG";
        btn.addEventListener("click",()=>{
            let cartData = JSON.parse(localStorage.getItem("cart"));
            if(cartData === null) cartData = [];
            let isAdleadyInCart = false;
            for(let i=0;i<cartData.length;i++){
            if(cartData[i].id === el.id){
                console.log(cartData[i].id,el.id)
                isAdleadyInCart = true;
                break;
            };
            }

            if(isAdleadyInCart === true){
            alert("Product Already in Cart");
            }else{
            cartData.push({...el,quantity:1});
            localStorage.setItem("cart",JSON.stringify(cartData));
            alert("Product Added To Cart");
            }
        })

        div3.append(text,price)
        div2.append(div3,btn);
        div1.append(week,title)
        div.append(img,div1,div2);
        pcard.append(div);
    });
}

// function add(data){
    // filterSelect.addEventListener("change",(e) =>{
    //     let filtered = data.filter((el) =>{
    //         if(el.check === filterSelect.value){
    //             return el.week;
    //         }
    //     })   
    //     DisplayCard(filtered);         
    //     console.log(filtered)
    //     console.log(data)
    // })
// }

// console.log(fetchedData)
// DisplayCard();