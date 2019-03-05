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
  case "RESTART":
    Simulator.Restart()
    break;
  default:
    console.log(`
    PLEASE INPUT CORRECT COMAND \n 
    PLACE X,Y,F \n
    MOVE \n
    RIGTH \n
    LEFT \n
    REPORT \n
    RESTART
    `)
    break;
}