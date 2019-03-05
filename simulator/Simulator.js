const fs = require('fs')

class Simulator {

  place(input) {
    let place = input[1].split(',')
    if (this.placeChecker(place)) {
      fs.writeFileSync('data.json', `{"X":${place[0]},"Y":${place[1]}, "F":"${place[2]}"}`, 'utf8')
    } else {
      console.log('PLEASE INPUT CORRECT COMMAND')
    }
  }

  Move() {
    let current = fs.readFileSync('data.json', 'utf8')
    let parsed = JSON.parse(current)
    if (parsed.F) {
      if (parsed.F === 'NORTH' && parsed.Y < 5) {
        let plusY = parsed.Y + 1
        this.writeData('', plusY)
      } else if (parsed.F === 'EAST' && parsed.X < 5) {
        let plusX = parsed.X + 1
        this.writeData(plusX, '')
      } else if (parsed.F === 'SOUTH' && parsed.Y >= 1) {
        let minusY = parsed.Y - 1
        this.writeData('', minusY)
      } else if (parsed.F === 'WEST' && parsed.X >= 1) {
        let minusX = parsed.X - 1
        this.writeData(minusX, '')
      }
    } else {
      console.log('PLEASE INPUT PLACE')
    }

  }

  Right() {
    let data = fs.readFileSync('data.json', 'utf8')
    let parsed = JSON.parse(data)
    if (parsed.F) {
      if (parsed.F === 'NORTH') {
        this.writeData('', '', 'EAST')
      } else if (parsed.F === 'EAST') {
        this.writeData('', '', 'SOUTH')
      } else if (parsed.F === 'SOUTH') {
        this.writeData('', '', 'WEST')
      }
      else {
        this.writeData('', '', 'NORTH')
      }

    } else {
      console.log("INPUT PLACE FIRST")
    }
  }

  Left() {
    let data = fs.readFileSync('data.json', 'utf8')
    let parsed = JSON.parse(data)
    if (parsed.F) {
      if (parsed.F === 'NORTH') {
        this.writeData('', '', 'WEST')
      } else if (parsed.F === 'WEST') {
        this.writeData('', '', 'SOUTH')
      } else if (parsed.F === 'SOUTH') {
        this.writeData('', '', 'EAST')
      }
      else {
        this.writeData('', '', 'NORTH')
      }
    } else {
      console.log("INPUT PLACE FIRST")
    }
  }

  Report() {
    let report = fs.readFileSync('data.json', 'utf8')
    let parsed = JSON.parse(report)
    if (parsed.F) {
      console.log(parsed.X + ',' + parsed.Y + ',' + parsed.F)
    } else {
      console.log('YOU DONT PLACE ROBOT ANYWHERE')
    }
  }

  placeChecker(input) {
    if ((input[1] >= 0 && input[1] <= 5) && (input[0] >= 0 && input[0] <= 5) && (input[2] == "NORTH" || input[2] == "EAST" || input[2] == "WEST" || input[2] == "SOUTH") && (input.length === 3)) {
      return true
    }
    return false
  }

  writeData(x, y, f) {
    let current = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    let X
    let Y
    let F
    if (y === 0) {
      X = x || current.X
      Y = 0
      F = f || current.F

    } else if (x === 0) {
      X = 0
      Y = y || current.Y
      F = f || current.F

    } else {
      X = x || current.X
      Y = y || current.Y
      F = f || current.F

    }
    fs.writeFileSync('data.json', `{"X":${X},"Y":${Y}, "F":"${F}"}`, 'utf8')

  }

  Restart() {
    fs.writeFileSync('data.json', `{"X":0,"Y":0, "F":""}`, 'utf8')
  }

}



module.exports = Simulator