var questionNumber = 0;
var formsNumber = 0;

var idTextarea = 1;
var idPassword = 1;
var idDate = 1;
var idRange = 1;
var idFile = 1;
var idEmail = 1;

const inputFields = ["Text", "Password", "Date", "Range Number", "File", "Mail"];
const multipleChoice = ["Radio Button", "Check Boxes", "Unique selection list", "Multiple selection list"];
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
    setHtmlQuestion();
    //setHtmlNewQuestionButton();

    //Select on change
    document.getElementById("questionType" + questionNumber).onchange = function(e) {
        // console.log(this[this.selectedIndex].text);
        switch (this[this.selectedIndex].text) {
            case "Text":
                setText();
                break;
            case "Password":
                setPassword();
                break;
            case "Date":
                setDate();
                break;
            case "Range Number":
                setRange();
                break;
            case "File":
                setFile();
                break;
            case "Mail":
                setMail();
                break;
            case "Radio Button":
                setRadioButton();
            case "Check Boxes":
                setCheckBox();
            case "Unique selection list":
                setUniqueSelectionList();
            case "Multiple selection list":
                setMultipleSelectionList();
        }
    };

}

function setTitle() {
    var divNewForm = document.getElementById("divNewForm");

    if (document.getElementById("titleForm" + formsNumber) || formsNumber == 0) {
        formsNumber++;

        //Title
        var h2Title = document.createElement("h2");
        h2Title.innerHTML = "New Form";

        divNewForm.appendChild(h2Title);

        //Label for
        var labelForFormTitle = document.createElement("Label");
        labelForFormTitle.setAttribute("for", "titleForm");
        labelForFormTitle.innerHTML = "Enter your form title";

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

    //Question number
    var h3QuestionNumber = document.createElement("h3");
    h3QuestionNumber.innerHTML = "Question number " + questionNumber;

    divNewForm.appendChild(h3QuestionNumber);

    //Label for question title
    var labelForFormQuestionTitle = document.createElement("Label");
    labelForFormQuestionTitle.setAttribute("for", "questionTitle" + questionNumber);
    labelForFormQuestionTitle.innerHTML = "Question title:";

    divNewForm.appendChild(labelForFormQuestionTitle);

    //Input question title
    var inputFormTitle = document.createElement("input");
    inputFormTitle.type = "text";
    inputFormTitle.placeholder = "Type your question..."
    inputFormTitle.id = "questionTitle" + questionNumber;

    divNewForm.appendChild(inputFormTitle);

    //Label for question type
    var labelForFormQuestionType = document.createElement("Label");
    labelForFormQuestionType.setAttribute("for", "questionType" + questionNumber);
    labelForFormQuestionType.innerHTML = "Question type:";

    divNewForm.appendChild(labelForFormQuestionType);

    //Select question type
    var selectQuestionType = document.createElement("select");
    selectQuestionType.id = "questionType" + questionNumber;

    selectQuestionType.children[0];

    var optGroup = document.createElement('optgroup')
    optGroup.setAttribute('label', 'Input text')
    for (var i = 0; i < inputFields.length; i++) {
        // this will in this case auto-select and default-select the third option
        //optGroup.appendChild(new Option("Value: " + i, i, i == 3, i == 3))
        optGroup.appendChild(new Option(inputFields[i]));
    }
    selectQuestionType.appendChild(optGroup)

    var optGroup2 = document.createElement('optgroup')
    optGroup2.setAttribute('label', 'Multuiple choice')
    for (var i = 0; i < multipleChoice.length; i++) {
        // this will in this case auto-select and default-select the third option
        optGroup2.appendChild(new Option(multipleChoice[i]));
    }
    selectQuestionType.appendChild(optGroup2)

    selectQuestionType.selectedIndex = -1;
    divNewForm.appendChild(selectQuestionType);

    var linebreak = document.createElement("br");
    divNewForm.appendChild(linebreak);

    var divQuestionContent = document.createElement("div");
    divQuestionContent.setAttribute("id", 'question' + questionNumber + '-form' + formsNumber)
    divNewForm.appendChild(divQuestionContent);
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

    var div = document.getElementById("divNewForm")
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function checkIfTitleAlreadyExists() {

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

function isEmptyOrSpaces(title) {
    return title === null || title.match(/^ *$/) !== null || /^\s/.test(title);
}

function checkDivQuestionContent(div) {

    if (div.innerHTML.length != 0) {
        console.log("Hay content");
        div.removeChild(div.lastChild);
    } else {
        console.log("No hay content");
    }
}

function setText() {

    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputTextArea = document.createElement("textarea");
    inputTextArea.type = "text";
    inputTextArea.placeholder = "Type your answer..."
    inputTextArea.id = "textarea" + formsNumber + "Id" + idTextarea;
    inputTextArea.rows = "10";
    inputTextArea.cols = "50";

    div.appendChild(inputTextArea);
    divNewForm.appendChild(div);
    idTextarea++;
}

function setPassword() {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.id = "password" + formsNumber + "Id" + idPassword;

    div.appendChild(inputPassword);
    divNewForm.appendChild(div);
    idPassword++;
}

function setDate() {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "date" + formsNumber + "Id" + idDate;

    div.appendChild(inputDate);
    divNewForm.appendChild(div);
    idDate++;
}

function setRange() {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputRange = document.createElement("input");
    inputRange.type = "range";
    inputRange.addEventListener('input', function() { this.nextElementSibling.value = this.value; }, true)
    inputRange.id = "range" + formsNumber + "Id" + idRange;

    div.appendChild(inputRange);
    var numberSelected = document.createElement("output");
    div.append(numberSelected);
    divNewForm.appendChild(div);
    idRange++;
}

function setFile() {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.id = "file" + formsNumber + "Id" + idDate;

    div.appendChild(inputFile);
    divNewForm.appendChild(div);
    idFile++;
}

function setMail() {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.id = "email" + formsNumber + "Id" + idEmail;

    div.appendChild(inputMail);
    divNewForm.appendChild(div);
    idEmail++;
}

function saveNewForm() {
    //Insertar titulo
    var title = document.getElementById('titleForm' + formsNumber).value;

    if (!isEmptyOrSpaces(title)) {
        if (checkIfTitleAlreadyExists()) {
            console.log("Titulo guardadao");
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
    } else {
        console.log("TContenido introducido en balco");
    }
}