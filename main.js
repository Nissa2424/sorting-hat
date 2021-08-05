//1st thing to do is call the name/call the Array 
let studentArray = [];   // Created an Array for the students    
const houseNameArray = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];  //Created a Array for the house that's already defined 
let VArmyArray = []; // Created an Array for Moldy Voldy's Army

//This is calling the <div>functions from the html
    console.log("We are here"); //testing to see if console works 
    studentForm();    //calling the functiion 

  // This variabe is defining the html studentForm and giving the Form an id  
const studentForm = () => {
    const domString = `
             <label for="name">Student Name:</label><br>
        <input type="text" id="name" name="name" value=""><br>
        <button id="sort" onclick="sortStudent()" class="btn btn-primary">Submit</button>  
     `;

    renderToDom("#studentForm", domString);
};

//Now that I created the Array I need to sort the Students/push to StudentsName to the array  
const sortStudent = () => {
    let nameinput = document.getElementById("name");
    // console.log(nameinput.value);
    const studentObject = {
        name: nameinput.value,
        house: "Gryffindor"  //*random assignment based on house name array Line 50 
    };
    studentArray.push(studentObject);
    //console.log(studentsArray[0]);
    refreshStudentList();
};

//For each element and index do what I tell you to do 
const refreshStudentList = () => {
 let fullDomText = '';
    studentArray.forEach((student, index) => {
        let domtext = '<div id="studentName' + index + '">';
        domtext += '<p>index: ' + index + '</p>';
        domtext += '<p>studentname: ' + student.name + '</p>';
        domtext += '<p>housename: ' + student.house + '</p>';
        domtext += '<button id="btnexpel" onclick="expel(' + index + ')">expel</button>';
        domtext += '</div>';
        fullDomText += domtext;
    });
    renderToDom ("#studentlist", fullDomText);
}; 
const expel = (index) => {
console.log("index:"+index);
let removeStudent = studentArray.splice(index,1);
VArmyArray.push(removeStudent);
console.log(studentArray);
console.log(removeStudent);
console.log(VArmyArray);
};
//sortStudent("Nissa"); This prints on F12 so that I know it is working 
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);  //QuerySelector will only return the 1st item matching the selector 
    selectedDiv.innerHTML = textToPrint;
}; 

 

//Display buttons on the DOM
/* const buttons = () => {
    const domString = `
    <button type="button" class="btn btn-primary" id="All">All</button>
     `;
    renderToDom("#buttonContainer", domString);
}; */


/*  const houseName = () => {
     return houseNameArray [
         Math.floor(math.random() * houseNameArray.lengh)
     ]
 }

const buttonEvents = () => {
    const sortButton = document.querySelector("#buttonContainer");
    sortButton.addEventListener("click", studentForm);
    const submitButton = document.querySelector("#submit");

}; */

/* const init = () => {

};

init(); */