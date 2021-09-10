// console.log(document.querySelector('p').innerText, "---querySelector out put") // It will consider only First element available remaining ot won't consider.

// console.log(document.querySelectorAll('p')[1].innerText, "--querySelectorAll out put") // it will worklike array

// console.log(document.querySelectorAll('div')[0].innerHTML, "-----querySelectorAll inner HTML") //it will show with HTML tag also.

// console.log(document.getElementsByTagName('div')[1].innerHTML, '--Here Your get the HTML Collection like array');

// console.log(document.getElementById("idtext").innerText, '---Here we will not get the array because id is pural so it should  be unique.')

// console.log(document.getElementsByClassName("classtext")[0].innerHTML, '-----Here its work like array')

// console.log('----------------------------Here we are going to see the update the HTML using InnerText')

// const innerTextUpdate = document.getElementsByClassName('innertextupdate')

// setTimeout(() => {

//     innerTextUpdate[0].innerHTML = `<h1>I am Updated HI Hello</h1>`
// }, 1000);

// const inputfiled = document.querySelector('.input-name')

// inputfiled.setAttribute("placeHolder", "Please Enter your Name") /*.setAttribute('style', 'border: 1px solid blue')*/
// inputfiled.setAttribute('style', 'color:red')


// const newclass = document.querySelector('#idtext');
// console.log(newclass)

// newclass.setAttribute('class', 'good')

// const newparas = document.createElement('p').innerText = "New text going to insert in the Body";

// document.body.append(newparas);

// const flag = document.createElement('img');

// flag.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png')

// flag.setAttribute('class', flag)

// const info = document.createElement('div');

// info.className = "info"
// const countryname = document.createElement('h2');
// countryname.innerText = "Germany";
// // document.body.append(countryname)

// const population = document.createElement('h2');
// population.innerText = "population:8982121";
// // document.body.append(population)

// const Region = document.createElement('h2');
// Region.innerText = "Region:Europe";
// // document.body.append(Region)
// // using way to add or apend  is append(countryname,population,Region)

// info.append(flag, countryname, population, Region);
// document.body.append(info);


// const image = document.createElement('img');
// image.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png';
// document.body.append(image)


let countriesInfo = [{
        name: "India",
        population: " 1,394,975,829",
        region: "Asia",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/225px-Flag_of_India.svg.png",
        capital: "New delhi"
    },
    {
        name: "Germany",
        population: "81,770,900",
        region: "Europe",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
        capital: "Berlin"
    },
    {
        name: "United states",
        population: "323,947,000",
        region: "Americas",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/270px-Flag_of_the_United_States.svg.png",
        capital: "Washington D.C"
    },
    {
        name: "Brazil",
        population: "206,135,893",
        region: "Americas",
        flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
        capital: "Brasilia"
    },
    {
        name: "Iceland",
        population: "334,300",
        region: "Europe",

        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
        capital: "Reykjavik"
    }

]



const container = document.createElement('div');
container.className = 'container overflow-hidden'

const row = document.createElement('div')
row.className = 'row row-cols-2 row-cols-lg-5 g-2 g-lg-3';;
container.append(row);

for (let i = 0; i < countriesInfo.length;) {

    row.innerHTML +=
        `    
    <div class=" p-3 border bg-light col-sm-6 col-md-3 col-xs-12">
        <img src=${countriesInfo[i].flag}>
        <div class="text">
            <h6>${countriesInfo[i].name}</h6>
            <p class='text-md-start'>Population:<span>${countriesInfo[i].population}</span></p>
            <p  class='text-md-start'>Region:<span>${countriesInfo[i].region}<span></p>
            <p  class='text-md-start'>Capital :<span>${countriesInfo[i].capital}</span></p>
        </div>
    </div>`
    i++;
}

// row.innerHTML = countriesInfo.map(flags => {
//     return `

//     <div class="col   col-xs-12">

//         <img src=${flags.flag}>
//         <div class="text">
//             <h6>${flags.name}</h6>
//             <p>Population:<span>${flags.population}</span></p>
//             <p>Region:<span>${flags.region}span></p>
//             <p>Capital :<span>${flags.capital}</span></p>
//         </div>
//     </div>`
// })


document.body.append(container);