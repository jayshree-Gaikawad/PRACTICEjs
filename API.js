// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//    return res.json()  
// })
// .then((data1) => {
//     console.log("data1 =",data1.fact);
//     return fetch(url)
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 =",data2.fact);
// })
// .catch((err) => {
//     console.log(err);
// })

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     let res = await fetch(url)
//     let data = await res.json();
//     console.log(data.fact);
// }

// getFact();


// let btn = document.querySelector("button");

// btn.addEventListener("click", async() => {
//    let fact = await getFact();
//    let p = document.querySelector("#result");
//    p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(err){
//         console.log("erro",err)
//         return "No fact found";
//     }
// }


// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async() => {
//     let link = await getImg();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// })


// async function getImg(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("error", e);
//         return "No imges found";
//     }
// }


// let url3 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try{
//         const config = { header: {Accept: "application/json"} };
//         let res = await axios.get(url3, config);
//         console.log(res);
//     }catch(e) {
//         console.log("ERROR = ", e);
//         return "No jokes found";
//     }
// }


// let url = "http://universities.hipolabs.com/search?name=";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     let collArr = await getColleges(country);
//     show(collArr);
// });

// function show(collArr){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of collArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }


// async function getColleges(country) {
// try {
//         let res = await axios.get(url + country);
//        return res.data;
//     } catch(e) {
//        console.log("erroe", e);
//        return [];
//     }
// }









let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await getColleges(country);
   show(collArr)
})


function show(collArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of collArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(e) {
        console.log("ERROR =", e);
        return [];
    }
}