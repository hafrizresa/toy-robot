const fs = require('fs')
// let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))

class Simulator {
  place(input) {
    let place = input[1].split(',')
    if (this.placeChecker(place)) {
      fs.writeFileSync('data.json', `{"X":${place[0]},"Y":${place[1]}, "F":"${place[2]}"}`, 'utf8')
    }
  }

  initiateLocation() {

  }

  placeChecker(input) {
    if ((input[1] >= 0 && input[1] <= 5) && (input[0] >= 0 && input[0] <= 5) && (input[2] == "NORTH" || input[2] == "EAST" || input[2] == "WEST" || input[2] == "SOUTH") && (input.length === 3)) {
      return true
    }
    return false
  }

}



module.exports = Simulator