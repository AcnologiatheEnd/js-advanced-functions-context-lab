/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(data) {
  return { 
  firstName: data[0], 
  familyName: data[1],
  title: data[2],
  payPerHour: data[3],
  timeInEvents: [],
  timeOutEvents: [],
  }
}

function createEmployeeRecords(data) {
  return data.map( function(array) {
    return createEmployeeRecord(array) 
  })
}

function createTimeInEvent(day) {
  let time = day.split(" ")
  let hour = parseInt(time[1].slice(0,5))
  let date = time[0]

  let newObject = {
    type: "TimeIn",
    hour: hour,
    date: date
  }

  this.timeInEvents.push(newObject)

  return this
}

function createTimeOutEvent(day) {
  let time = day.split(" ")
  let hour = parseInt(time[1].slice(0,5))
  let date = time[0]

  let newObject = {
    type: "TimeOut",
    hour: hour,
    date: date
  }

  this.timeOutEvents.push(newObject)

  return this
}

function hoursWorkedOnDate(employee){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === employee
    })

    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === employee
    })

    return (outEvent.hour - inEvent.hour) / 100
}


function wagesEarnedOnDate(date) {
  let wage = hoursWorkedOnDate.call(this, date) * this.payPerHour
  return wage
}

function calculatePayroll(arrayOfEmployees) {
  return arrayOfEmployees.reduce(function(memo, employee) {
    return memo + allWagesFor.call(employee)
  }, 0)
}

function findEmployeeByFirstName(employees, firstName) {
  return employees.find(function(employee) { return employee.firstName === firstName})
}



function allWagesFor() {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}