var timeSheet = $("#row")
var rowContain = $('#container')
var events = []
//clock that displays month,day,year, and time
var clock = moment().format('MMMM Do YYYY, h:mm a');
var timeHour = parseInt(moment().format('H'));
var storedData= []
//This displays the clock on the header of the page
$('#currentDay').text(clock);


function columnBuild() {

 // create a new class row for each iteration of the loop
    for (i = 9; i <= 17; i++) {     
       //The next four lines of code create the time box for each row.
        var myRowHtml = '<div class="row" id = "row' +i+'">';
        myRowHtml += '   <div class="col time-block" id="timeCol' + i + '">';
        myRowHtml += moment().startOf('day').add(i, 'hours').format('h:mm A');
        myRowHtml += '   </div>';
        //The next two lines create the text box for each row 
        myRowHtml += '   <div class="col-6 textarea"> <input type="text" class="eventText" placeholder="To Do" id="eventText' + i + '"> ';
        //myRowHtml += events[i];
        myRowHtml += '   </div>';
        //The next two lines create the save button for each row 
        myRowHtml += '   <div class="col saveBtn"> <button class="saveBtn" id="saveButton" onclick = "subToDo(' + i + ')">save</button>';
        //myRowHtml += ' save';F
        myRowHtml += '   </div>';
        myRowHtml += '</div>';
        //appends the entire new html into the row container
        rowContain.append(myRowHtml);
        if(i < timeHour){
            $('#row' +i).addClass('past');
        } else if (i > timeHour){
            $('#row'+i).addClass('future'); 
        }else{
            $('#row'+i).addClass('present');
        }
    }
    //This line of code will check the local storage for past inputs and which hour they where placed in
    var addedList = JSON.parse(localStorage.getItem("To-Do"))
    addedList.forEach(function(item){
        $('#eventText' + item.time  ).val(item.toDo) 
    })

}


columnBuild();



function subToDo(hour) {
    //creating object to store user input.
    var userInput = {
        time: hour,
        toDo: $('#eventText'+hour).val(),
    } 
    //pushing the storedData to the object
    storedData.push(userInput)
    localStorage.setItem("To-Do",JSON.stringify(storedData));
    var addedList = JSON.parse(localStorage.getItem("To-Do"))
    addedList.forEach(function(item){
        $('#eventText' + item.time  ).val(item.toDo) 
    })
    //$('#eventText' + hour  ).val(addedList.toDo) 
    console.log(userInput)
}



