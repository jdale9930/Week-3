module.exports.randomNum = function randomNum(a, b) {
    a = parseInt(a)
    b = parseInt(b)

    if(isNaN(a) || isNaN(b))
    {
        return console.log("please input numbers")
    }
    else
    {
        if(a > b)
        {
            let randomNum = Math.floor(Math.random() * (a - b + 1))+ b
            return randomNum
        }
        if(b > a)
        {
            let randomNum = Math.floor(Math.random() * (b - a + 1)) + a
            return randomNum
        }
    }
}
