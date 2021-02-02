let boxCount = document.getElementsByClassName("boxCounter");
let boxNum = 1;
let gameState = 0;
console.log('help')
for(let i = 0; i < boxCount.length; i++)
{
    console.log('help')
    boxCount[i].addEventListener('click' , e => {
        let valueNum = parseInt(e.target.value)
        console.log(valueNum)
        boxNum = boxNum + valueNum;
        if(boxNum < 1)
        {
            boxNu = 1;
        }
        document.getElementById('boxNum').innerText = boxNum;
    })
}

function makeBoxes(x)
{
    for(let i = 1; i <= x; i++)
    {
        let box = document.createElement("div")
        box.classList.add('square')
        box.classList.add('bg-black')
        box.style.position = 'absolute';
        box.style.left = `${Math.floor(Math.random() * 748 + 10)}px` 
        box.style.top = `${Math.floor(Math.random() * 548 + 38)}px` 
        document.body.append(box)
        box.addEventListener('mouseover' , e =>
    {
        console.log(gameState)
        if(gameState == 1)
        {
            gameState = 0;
            let remove = document.getElementsByClassName('square')
            let removeLength = remove.length - 1;
            console.log(removeLength)
                for(let i = 0; i <= removeLength; i++)
                {
                    console.log(i)
                    remove[removeLength - i].remove();
                }
        }
    })
    }

    let greenBox = document.createElement("div");
    greenBox.classList.add('square');
    greenBox.classList.add('bg-green');
    greenBox.style.position = 'absolute';
    greenBox.style.left = `${Math.floor(Math.random() * 748 + 10)}px`; 
    greenBox.style.top = `${Math.floor(Math.random() * 548 + 38)}px`; 
    document.body.append(greenBox);
    greenBox.addEventListener('mouseover' , e =>
    {
        gameState = 1;
        console.log(gameState)
    })

    let greenBox = document.createElement("div");
    greenBox.classList.add('square');
    greenBox.classList.add('bg-red');
    greenBox.style.position = 'absolute';
    greenBox.style.left = `${Math.floor(Math.random() * 748 + 10)}px`; 
    greenBox.style.top = `${Math.floor(Math.random() * 548 + 38)}px`; 
    document.body.append(greenBox);
    greenBox.addEventListener('mouseover' , e =>
    {
        gameState = 1;
        console.log(gameState)
    })
    
}