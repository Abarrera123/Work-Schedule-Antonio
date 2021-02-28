# Work-Schedule-Antonio

github url:[https://abarrera123.github.io/Work-Schedule-Antonio/.]

What: This website is a work schedule that the user can plan their current workday on. The website will only display the current day's schedule. The user has to input and save their task per each hour block. Each column will change color to let the user know that the event has passed, present, or future.
Why: This project was created to help understand third party APIs and moment.js. This project also helped cement ideas from javascript, HTML, and css.

How:
1. My first step in this project was to start declaring my global variables in script.js. This is done in lines 1-7. In line 4 moment.js is used to set the variable clock to a clock that will show the full date along with the time.
2. Next the function columnBuild() is used to generate each row into the HTML. This is achieved by using a for loop that will add a row for each hour of a 9-5 work day. The function will then check if the row is in the past,present, or future. If one is true then a class would be added to the row that changes the css. At the end of the function i check the local storage for previous inputs on this webpage by the user. If their are past entries than they will be displayed on the screen.
3. Last the function subToDO() is used to submit the data given by the user. This is done by creating an object called userInput. This userInput holds time : hour and toDo: user input. The storedData is pushed into the object. When a user decides to put a new input in the text field then that new input overwrites the previous. 