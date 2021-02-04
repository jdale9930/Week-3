console.log('pls')
let search = document.getElementById("search").value;
let type = document.getElementById("type")
document.getElementById("fetch").addEventListener("click" , () =>{
    let year = document.getElementById("year").value;
    //console.log(year)
    let yearValue = ""
    if(year != "")
    {
        yearValue = `&y=${year}`
    }

    let typeValue = ""
    if(type.options[type.selectedIndex].value != 'none')
    {
        typeValue = `&type=${type.options[type.selectedIndex].value}`;
    }
    //console.log(typeValue)
    let search = document.getElementById("search").value;
    //console.log(`${search}${typeValue}${yearValue}`)
    fetch(`http://www.omdbapi.com/?apikey=6c3dc15a&s=${search}${typeValue}${yearValue}`)
    .then((response) => response.json())
    .then((json)=> {

        // let search = document.getElementById("search").value;
        console.log(json)
        let newDiv = document.getElementsByClassName("newDiv");
        for(let i = newDiv.length - 1; i >= 0; i-- )
            {
                newDiv[i].remove();
            }
            
        if (search.length > 3)
        {
            document.getElementById("visible").classList.add("visible")
            for(let i = 0; i < json.Search.length; i++)
            {
            //console.log(i)
            let movie = document.createElement("div");
            movie.classList.add("newDiv");
            movie.innerHTML = `
            <h2>${json.Search[i].Title}</h2>
            <h2>${json.Search[i].Year}</h2>
            <p>${json.Search[i].Type}</p>
            <img src = "${json.Search[i].Poster}"></img>
            `;
            document.body.append(movie);
            }
        }
        else
        {
            document.getElementById("visible").classList.remove("visible");
        }
        
    
    });
});