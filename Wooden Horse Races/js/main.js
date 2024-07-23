function roll_dice(x){
    return(Math.floor(Math.random()*max)+1)
    //Math.random is the heart of the function, generates a pseudo-random number between 0 and 1
    // *max multiplies the pseudo-random number by the max number on the dice, increasing the range to between 0 and max
    // Math.floor rounds down to the nearest whole number, reducing the range to between 0 and max-1
    // +1 shifts the range to between 1 and max
}
