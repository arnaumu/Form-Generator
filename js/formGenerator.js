var questionNumber = 0;
var formsNumber = 0;

//var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];


function newForm() {
    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById("buttonsNewForm").classList.toggle("invisible");
    document.getElementById("divNewForm").classList.toggle("invisible")
    document.getElementById("divNewFormButton").classList.toggle("invisible")

    setNewFormElements();
}

function setNewFormElements() {
    setTitle();
    //setHtmlQuestion();
    //setHtmlNewQuestionButton();
}

function setTitle() {
    var divNewForm = document.getElementById("divNewForm");

    if (document.getElementById("titleForm" + formsNumber) || formsNumber == 0) {
        formsNumber++;

        //Title
        var h3Title = document.createElement("h3");
        h3Title.innerHTML = "New Forms";

        divNewForm.appendChild(h3Title);

        //Label for
        var labelForFormTitle = document.createElement("Label");
        labelForFormTitle.setAttribute("for", "titleForm");
        labelForFormTitle.innerHTML = "Here goes the text";

        divNewForm.appendChild(labelForFormTitle);

        //Input title
        var inputFormTitle = document.createElement("input");
        inputFormTitle.type = "text";
        inputFormTitle.id = "titleForm" + formsNumber;

        divNewForm.appendChild(inputFormTitle);
    }


    // var labelInputTitle = document.createElement("label");
    // labelInputTitle.setAttribute("for", "title")
    // labelInputTitle.innerHTML = "Form title (*)";

    // var inputTitle = `<h3>New Form<h3>
    // <label for="title">Form title (*)</label> <br>
    // <input type="text" name="title" value="" id="title" />`
    // divNewForm.innerHTML += inputTitle;
}

function setHtmlQuestion() {
    questionNumber++

    // var firstP = document.getElementById("firstParagraph");
    // firstP.setAttribute("id", "firstPracPara");
    // console.log(document.getElementById("firstPracPara").id);

    var newQuestion = `
  <h3 id="numberQuestion"></h3>
  <label for="questionTitle">Question title: </label>
  <input type="text" id="questionTitle" name="questionTitle" value="" placeholder="Type your question..."><br>
  <label for="questionType">Question type:</label>
  <select name="questionType" id="questionType">
    <optgroup label="Input Fields">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
    </optgroup>
    <optgroup label="Multiple Choice">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
  <br><br>`

    divNewForm.innerHTML += newQuestion;
    document.getElementById("numberQuestion").innerHTML = "Question number " + questionNumber
}

function setHtmlNewQuestionButton() {

    // var button = document.createElement('button');
    // button.innerHTML = 'click me';
    // //button.onclick = setHtmlQuestion()


    // document.getElementById("divNewFormButton").innerHTML = button;

    let btn = document.createElement("button");
    btn.innerHTML = "Add question";
    btn.onclick = function() {
        setHtmlQuestion();
    };
    document.getElementById("divNewFormButton").appendChild(btn);
}

/**
 * <form action="javascript:void(0);" onsubmit="addQuestion()">
 * <input type="submit" value="Add Question"></form><br><br>
 */



function addQuestion() {
    console.log(" Question added SAVED!!!!!!!!!!")
}


function cancel() {
    document.getElementById("buttonsNewForm").classList.toggle("invisible");
    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById("divNewForm").classList.toggle("invisible")
    document.getElementById("divNewFormButton").classList.toggle("invisible")
}

function checkIfTitleExists() {

    var titleFormId = document.getElementById('tableOfForms');

    console.log("LA IDE es " + titleFormId.id);

    for (var i = 0; i < titleFormId.children[0].childElementCount; i++) {
        var tableRow = titleFormId.children[0].children[i];
        for (var j = 0; j < tableRow.childElementCount; j++) {
            var tableColumn = tableRow.children[j];
            //console.log('Cell [' + i + ',' + j + '] value: ' + tableColumn.innerText);
            if (document.getElementById('titleForm' + formsNumber).value == tableColumn.innerText) {
                return false;
            }
        }
    }
    return true;
}

function saveNewForm() {

    //Insertar titulo
    if (checkIfTitleExists()) {
        console.log("Titulo guardadao");
        var title = document.getElementById('titleForm' + formsNumber).value;

        // Insert a row at the end of table
        let newRow = tableOfForms.insertRow(-1);

        // Insert a cell at the end of the row
        var cellTitle = newRow.insertCell(0);
        var cellButtons = newRow.insertCell(1);

        var newText2 = document.createTextNode('new row22');
        cellTitle.appendChild(document.createTextNode(title));
        cellButtons.appendChild(newText2);
    } else {
        console.log("Titulo YA EXISTE");
    }

}