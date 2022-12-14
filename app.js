const contain=document.querySelector("#container");
const search=document.querySelector(".search");
const searchBtn=document.querySelector(".searchBtn");

// this is product url
let api=`https://fakestoreapi.com/products`

//this is the funcation to get data in url and stor in josn format
const requsetApi=async()=>{
    const respons= await fetch(api)
    const allData= await respons.json();
    displayData(allData)
}
requsetApi();

//this is the funcation to display all products
function displayData(data){
    contain.innerHTML=""
    data.map((item,index)=>{
        contain.innerHTML+=`<div>
        <h1>${item.title}</h1>
        <img src=${item.image}>
        <p>${item.description}</p>
        <button>${item.price}</button>
        <button>Rating-${item.rating.rate}</button>
        </div>`
    })
}

//this is the funcation to display Lowest price
const sortPrice=async()=>{
    const respons=await fetch(api)
    const data=await respons.json()
    data.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
    displayData(data)
}       

//this is the funcation to display Highest Price
const unsortPrice=async()=>{
    const respons=await fetch(api)
    const data=await respons.json()
    data.sort((firstItem, secondItem) =>  secondItem.price - firstItem.price);
    displayData(data)
}  

//Here the search funcation to search products
const searchData= async()=>{
    const searchArr=[]
    const respons=await fetch(api)
    const data=await respons.json()
    ser=data.filter((i)=>{
        if (i["category"]===(search.value)){
            searchArr.push(i)
        }
    })
    displayData(searchArr)
}

searchBtn.addEventListener("click",searchData)