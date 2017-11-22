/*
    Create a Student Result Sheet in a table.
    Write a JavaScript logic to validate the 3 subject marks details and check if a student score less than 35 in any subject. 
    If yes, then his grade should be displayed as Fail.
    Calculate the marks, the average and display the grade of a student 
 */
var headTextArray = ["No.", "Student Name", "Subject 1", "Subject 2", "Subject3", "Marks", "Average", "Grade"];

var studentsMarksArray = [[1,"Ram",30,54,45], [2,"Raj",45,60,76],[3,"Rani",38,53,60] ];
function generateTable() {
    
         // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
     
    /* --------------- Header  ----------------------  */
    // creates a <table> element and a <thead> element
    var tbl = document.createElement("table");
    var tblHead = document.createElement("thead");
     
    // creating Header cells
    for (var i = 0; i < 1; i++) {
        // creates a table header row
        var row = document.createElement("tr");
    
            for (var j = 0; j < 8; j++) {
                // Create a <th> element and a text node, make the text
                // node the contents of the <th>, and put the <th> at
                // the end of the table row
                var cell = document.createElement("th");
                var cellText = document.createTextNode(headTextArray[j]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
    
        // add the row to the end of the table head
        tblHead.appendChild(row);
    }
    // put the <thead> in the <table>
    tbl.appendChild(tblHead);
    
   
        
    /* ------------------------------ Table Body -------------------- */
    
    // creates a <table> element and a <tbody> element
    var tblBody = document.createElement("tbody");
       
    // creating all cells
    for (var i = 0; i < studentsMarksArray.length; i++) {
        // creates a table row
        var row = document.createElement("tr");
        document.write("hehe");
             
        for (var j = 0; j < 8; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
            var cell = document.createElement("td");
            var cellText;
            if(j<5)  //Cell Text gets its value from studentsMarksArray if less than 5
            {
                cellText = document.createTextNode(studentsMarksArray[i][j]);
            }

            if( j == 5) //Cell Text gets its value from by adding the marks in 3 subjects to get total marks, if j =5
            {
                cellText = document.createTextNode((studentsMarksArray[i][2] + studentsMarksArray[i][3] + studentsMarksArray[i][4]));
            }
            
            if( j == 6) //Cell Text gets its value from by average of the marks in 3 subjects to get average, if j =6
            {
                cellText = document.createTextNode((studentsMarksArray[i][2] + studentsMarksArray[i][3] + studentsMarksArray[i][4])/3);
            }

            if( j == 7) //Cell Text gets its value from by checking if the marks in any of the 3 subjects is less than 35,and assigns the grade when j = 7
            {
                
                if((studentsMarksArray[i][2] <35) || (studentsMarksArray[i][3] <35) + (studentsMarksArray[i][4] <35))
                {
                    cellText = document.createTextNode("Fail");
                }
                else
                {
                    cellText = document.createTextNode("Pass");
                }
            }
            cell.appendChild(cellText); 
            row.appendChild(cell);
            
        }  
           
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
      
    
}
