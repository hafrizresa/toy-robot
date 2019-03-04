const input = process.argv.slice(2)
const ToyRobot = require('./simulator/Simulator')
const Simulator = new ToyRobot


switch (input[0]) {
  case "PLACE":
    Simulator.place(input)
    break;
  case "MOVE":
    break;
  case "LEFT":
    break;
  case "RIGHT":
    break;
  case "REPORT":
    break;
  default:
  console.log('PLEASE INPUT CORRECT COMAND')
    break;
}