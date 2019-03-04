const input = process.argv.slice(2)
const ToyRobot = require('./simulator/Simulator')
const Simulator = new ToyRobot

switch (input[0]) {
  case "PLACE":
    Simulator.place(input)
    break;
  case "MOVE":
    Simulator.Move()
    break;
  case "LEFT":
    Simulator.Left()
    break;
  case "RIGHT":
    Simulator.Right()
    break;
  case "REPORT":
    Simulator.Report()
    break;
  default:
    console.log('PLEASE INPUT CORRECT COMAND')
    break;
}