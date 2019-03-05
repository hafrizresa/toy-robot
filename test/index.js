let chai = require('chai')
let expect = chai.expect
let fs = require('fs')

let ToyRobot = require('../simulator/Simulator')
let Simulator = new ToyRobot

describe(' FUNCTION TESTING', () => {
  Simulator.Restart()
  describe('place checker', () => {
    it('should return true if input fill the requirement', () => {
      expect(Simulator.placeChecker(['0', '3', 'NORTH'])).to.equal(true)
    })
    it('should return false if X cordinat more than 5', () => {
      expect(Simulator.placeChecker(['6', '2', 'WEST'])).to.equal(false)
    })
    it('should return false if X cordinat less than 0', () => {
      expect(Simulator.placeChecker(['-1', '2', 'WEST'])).to.equal(false)
    })
    it('should return false if X cordinat is null', () => {
      expect(Simulator.placeChecker(['null', '2', 'WEST'])).to.equal(false)
    })
    it('should return false if Y cordinat more than 5', () => {
      expect(Simulator.placeChecker(['1', '6', 'WEST'])).to.equal(false)
    })
    it('should return false if Y cordinat less than 0', () => {
      expect(Simulator.placeChecker(['2', '-4', 'WEST'])).to.equal(false)
    })
    it('should return false if Y cordinat is null', () => {
      expect(Simulator.placeChecker(['1', 'null', 'WEST'])).to.equal(false)
    })
    it('should return false if F input with wrong value', () => {
      expect(Simulator.placeChecker(['6', '2', 'WET'])).to.equal(false)
    })
  })

  describe('Place function', () => {
    it('should not write data if wrong place comand', () => {
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.X).to.equal(0)
      expect(data.Y).to.equal(0)
      expect(data.F).to.equal('')
    })
    it('should write correct data if input is correct', () => {
      Simulator.place(['place', '0,2,WEST'])
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.X).to.equal(0)
      expect(data.Y).to.equal(2)
      expect(data.F).to.equal('WEST')
      Simulator.Restart()
    })
  })

  describe('Right function', () => {
    it('should not work if place is empty', () => {
      Simulator.Right()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('')
    })
    it('should facing to north if current face is west', () => {
      Simulator.place(['place', '0,0,WEST'])
      Simulator.Right()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('NORTH')
    })
    it('should facing to east from north', () => {
      Simulator.Right()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('EAST')
    })
    it('should facing to south from east', () => {
      Simulator.Right()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('SOUTH')
    })
    it('should facing to west from south', () => {
      Simulator.Right()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('WEST')
      Simulator.Restart()
    })
  })

  describe('Left function', () => {
    it('should not work if place is empty', () => {
      Simulator.Left()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('')
    })
    it('should facing to south if current face is west', () => {
      Simulator.place(['place', '0,0,WEST'])
      Simulator.Left()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('SOUTH')
    })
    it('should facing to east from south', () => {
      Simulator.Left()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('EAST')
    })
    it('should facing to north from east', () => {
      Simulator.Left()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('NORTH')
    })
    it('should facing to west from north', () => {
      Simulator.Left()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('WEST')
      Simulator.Restart()
    })
  })

  describe('Move function', () => {
    it('should not moving if place is empty', () => {
      Simulator.Move()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('')
    })
    it('should move to north', () => {
      Simulator.place(['place', '3,4,NORTH'])
      Simulator.Move()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.Y).to.equal(5)
    })
    it('should move to south', () => {
      Simulator.place(['place', '3,1,SOUTH'])
      Simulator.Move()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.Y).to.equal(0)
    })
    it('should move to west', () => {
      Simulator.place(['place', '1,3,WEST'])
      Simulator.Move()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.X).to.equal(0)
    })
    it('should move to east', () => {
      Simulator.place(['place', '4,3,EAST'])
      Simulator.Move()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.X).to.equal(5)
      Simulator.Restart()
    })
  })

  describe('Report function', () => {
    it('should not showing report if place is empty', () => {
      Simulator.Report()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('')
    })
    it('should report data if place is not empty', () => {
      Simulator.place(['place', '3,3,EAST'])
      Simulator.Move()
      let data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
      expect(data.F).to.equal('EAST')
      expect(data.X).to.equal(4)
      expect(data.Y).to.equal(3)
      Simulator.Report()
      Simulator.place(['as','w'])
      Simulator.Restart()
    })
  })


})