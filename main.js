 //my code:
// look into look at Intl.DateTimeFormat ('en-us') for making my app friendly to other languages and getting names of days from function.

let currentDay = new Date().getDay() 
let daysOfWeek = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']
let employeeName = prompt('What is your name?')
let isHolidayNextDay = true   //['Xmas' , 'Halloween' , 'New Years' , 'Thanksgiving' , 'Labor Day' , 'Memorial Day']

let greeting = `Hello ${employeeName}! Today is ${daysOfWeek[currentDay]}, `

let hoursWorked = 41 //TODO: Learn how to use Fetch to get data from other computers/databases! **

if (daysOfWeek[currentDay] === 'Sunday' || daysOfWeek[currentDay] === 'Saturday' ) {                           
     // ** try replacing currentDay with daysOfWeek === 'Monday' , etc.
    greeting += `what are you doing at work on a weekend!?`
} if (daysOfWeek[currentDay] === 'Sunday' && isHolidayNextDay) {
    greeting += ` Also, tomorrow is a Holiday! Enjoy the long weekend I guess..`
}else if (daysOfWeek[currentDay] === 'Monday') {                        //better way to write the code so it makes more than just numbers.
    greeting += `Looks like someone has the case the Monday's `
}else if (daysOfWeek[currentDay] === 'Tuesday') {
    greeting += `Happy Tuesday to ya!`
}else if (daysOfWeek[currentDay] === 'Wednesday') {
    greeting += `Happy Hump Day!`
}else if (daysOfWeek[currentDay] === 'Thursday') {
    greeting += `Hey it's Almost Friday!`
} if(daysOfWeek[currentDay] === 'Thursday' && isHolidayNextDay) {
        greeting += ` its a Holiday tommorow! Enjoy the long weekend I guess..`
    }if (daysOfWeek[currentDay] === 'Friday') {
    greeting += `TGIF! Enjoy your weekend, if you get one!`
    }

if (hoursWorked > 34 && hoursWorked <= 40) {
    greeting += ` <br> <br> Attention ${employeeName}: You are at ${hoursWorked} hours worked. If you work overtime we will terminate you.
    Have a nice day :) `} 
    else if (hoursWorked > 40) {
        greeting +=  ` <br> <br> <hr> <br> Attention ${employeeName}: You are at ${hoursWorked} hours worked. Please report to your manager for termination. You're going to bankrupt our multi-billion dollar company with your time wasting!
        <br>Have a nice day :) `
    }

document.getElementById('para').innerHTML = `<strong>${greeting}</strong>` 



  /*Class Code with DMG - I like mine better in this case.

let today = new Date().getDay() // but we'll hard code for now
let tuesday = 2
let sunday = 0
let monday = 1
let wednesday = 3
let thursday = 4
let friday = 5
let saturday = 6             // arrays not done in class yet so i did correctly above.

let username = prompt('Enter Username')                                      //TODO: replace with a fetch to database
let hoursLogged = 39                                                      // TODO: replace with a fetch to a database in the future
let fridayIsHoliday = true                                        //TODO: replace with a fetch later
let overtimeDangerZone = 35

let greeting

if (today === monday) {
    greeting = `
    <h4>
       Hello! ${username} Be sure to check your email. Our CEO has a message for you on the topic of his favorite cryptocurrency.
    </h4>`

} else if (today === tuesday) {
    greeting = `
    <h4>
       Hello! ${username} It's Taco Tuesday. 🌮🌮🌮 Please Line up in orderly fashhion
    </h4>`                                     
    
    //EMOJI picker WindowsKey + . 

}else if (today === wednesday) {
    greeting = `
    <h4>
      Hello! ${username} It is Weeping Wednesday 😢😢 A crying pod will be available for each of you at scheduled times. GET YOUR WEEP ON!
    </h4>`

} else if (today === thursday) {
    greeting = `
    <h4>
    Hello! ${username} It is Theremin Thursday, you'll find your cheap ass theremin downstairs.
    </h4> `

    if(fridayIsHoliday) {
        greeting += `
        <h2>
           Hello! ${username} Don't forget tomorrow is a holiday! Enjoy your long weekend being unproductive!
        </h2>`
    }

} else if (today === friday) {
    greeting = `
    <h4>
   Hello! ${username} It is Freak Out Fridayy! It is that time of the week where all of our procrastination catches up with us
    the desperation is setting in. It is time to get actual work done and quickly. Because IT IS FRIDAY!
    </h4>`

    if(fridayIsHoliday) {
        greeting += `
        <h4>
           It's a holiday! Why are you here!?
        </h4>`
    }

} else  {
    greeting = `It is a weekend. I am sorry you are here, but alas I am only a computer. HA HA. YOU DORK. Working on a weekend!`
} 

//OT warning

if (hoursLogged > overtimeDangerZone ) {
    greeting += `
   <h3>
    ⚠ Beware you have now logged ${hoursLogged} hours. You are approaching overtime! Dont get fired! ⚠
   </h3> `
}

document.getElementById('para').innerHTML = greeting

*/