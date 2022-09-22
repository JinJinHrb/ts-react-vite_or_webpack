import _ from 'lodash'

// Function to calculate the
// Cube of a number
function cube(number) {
    return number * number * number
}

// Using the _.flowRight() method
export const multiplyLogCube = _.flowRight([cube, Math.log, _.multiply])
