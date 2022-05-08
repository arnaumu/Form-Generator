var questionNumber = 0;
var formsNumber = 0;

var idTextarea = 1;
var idPassword = 1;
var idDate = 1;
var idRange = 1;
var idFile = 1;
var idEmail = 1;

var idRadio = 1;
var idCheck = 1;

const inputFields = ["Text", "Password", "Date", "Range Number", "File", "Mail"];
const multipleChoice = ["Radio Button", "Check Boxes", "Unique selection list", "Multiple selection list"];

function newForm() {
    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById("buttonsNewForm").classList.toggle("invisible");
    document.getElementById("divNewForm").classList.toggle("invisible")
    document.getElementById("divNewFormButton").classList.toggle("invisible")

    setNewFormElements();
}

function setNewFormElements() {
    var divFormContent = document.createElement("div");
    divFormContent.setAttribute("id", "form" + formsNumber);

    setTitle(divFormContent);

    questionNumber++

    var divQuestionNumber = document.createElement("div");
    divQuestionNumber.setAttribute("id", "questionNum" + questionNumber);

    setHtmlQuestion(divFormContent, divQuestionNumber);
    //setHtmlNewQuestionButton();

    //Select on change
    // console.log("Number question " + questionNumber + " Form number " + formsNumber);
    // console.log(questionNumber);
    // console.log("Inseert hjolsa");

    var divQuestionContent = document.createElement("div");
    divQuestionContent.setAttribute("id", "questionContent" + questionNumber);

    divQuestionNumber.appendChild(divQuestionContent);


    document.getElementById("questionType" + questionNumber).onchange = function(e) {
        switch (this[this.selectedIndex].text) {
            case "Text":
                console.log("Entrado al text");
                // document.getElementById("id", "questionNum" + questionNumber).innerHTM
                setText(divQuestionContent);
                break;
            case "Password":
                setPassword(divQuestionContent);
                break;
            case "Date":
                setDate(divQuestionContent);
                break;
            case "Range Number":
                setRange(divQuestionContent);
                break;
            case "File":
                setFile(divQuestionContent);
                break;
            case "Mail":
                setMail(divQuestionContent);
                break;
            case "Radio Button":
                setRadioButton(divQuestionContent);
            case "Check Boxes":
                setCheckBox(divQuestionContent);
            case "Unique selection list":
                setUniqueSelectionList(divQuestionContent);
            case "Multiple selection list":
                setMultipleSelectionList(divQuestionContent);
        }
    };

}

function setTitle(divFormContent) {
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

        divFormContent.appendChild(inputFormTitle);
        divNewForm.appendChild(divFormContent);
    }
}

function setHtmlQuestion(divFormContent, divQuestionNumber) {

    //Question number
    var h3QuestionNumber = document.createElement("h3");
    h3QuestionNumber.innerHTML = "Question number " + questionNumber;

    divQuestionNumber.appendChild(h3QuestionNumber);
    divFormContent.appendChild(divQuestionNumber);
    divNewForm.appendChild(divFormContent);

    //Label for question title
    var labelForFormQuestionTitle = document.createElement("Label");
    labelForFormQuestionTitle.setAttribute("for", "questionTitle" + questionNumber);
    labelForFormQuestionTitle.innerHTML = "Question title:";

    divQuestionNumber.appendChild(labelForFormQuestionTitle);
    divFormContent.appendChild(divQuestionNumber);
    divNewForm.appendChild(divFormContent);

    //Input question title
    var inputFormTitle = document.createElement("input");
    inputFormTitle.type = "text";
    inputFormTitle.placeholder = "Type your question..."
    inputFormTitle.size = 35;
    inputFormTitle.id = "questionTitle" + questionNumber;

    divQuestionNumber.appendChild(inputFormTitle);
    divFormContent.appendChild(divQuestionNumber);
    divNewForm.appendChild(divFormContent);

    //Label for question type
    var labelForFormQuestionType = document.createElement("Label");
    labelForFormQuestionType.setAttribute("for", "questionType" + questionNumber);
    labelForFormQuestionType.innerHTML = "Question type:";

    divQuestionNumber.appendChild(labelForFormQuestionType);
    divFormContent.appendChild(divQuestionNumber);
    divNewForm.appendChild(divFormContent);

    //Select question type
    var selectQuestionType = document.createElement("select");
    selectQuestionType.id = "questionType" + questionNumber;

    selectQuestionType.children[0];

    var optGroup = document.createElement('optgroup')
    optGroup.setAttribute('label', 'Input text')
    for (var i = 0; i < inputFields.length; i++) {
        optGroup.appendChild(new Option(inputFields[i]));
    }
    selectQuestionType.appendChild(optGroup)

    var optGroup2 = document.createElement('optgroup')
    optGroup2.setAttribute('label', 'Multuiple choice')
    for (var i = 0; i < multipleChoice.length; i++) {
        optGroup2.appendChild(new Option(multipleChoice[i]));
    }
    selectQuestionType.appendChild(optGroup2)

    selectQuestionType.selectedIndex = -1;

    divQuestionNumber.appendChild(selectQuestionType);
    divFormContent.appendChild(divQuestionNumber);
    divNewForm.appendChild(divFormContent);

    var linebreak = document.createElement("br");

    divQuestionNumber.appendChild(linebreak);
    divFormContent.appendChild(divQuestionNumber);
    divNewForm.appendChild(divFormContent);

    // var divQuestionContent = document.createElement("div");
    // divQuestionContent.setAttribute("id", 'question' + questionNumber + '-form' + formsNumber)

    // divQuestionNumber.appendChild(divQuestionContent);
    // divFormContent.appendChild(divQuestionNumber);
    // divNewForm.appendChild(divFormContent);
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
        // while (div.firstChild) {
        //     div.removeChild(div.firstChild);
        // }
}

function checkIfTitleAlreadyExists() {
    var titleFormId = document.getElementById('tableOfForms');

    for (var i = 0; i < titleFormId.children[0].childElementCount; i++) {
        var tableRow = titleFormId.children[0].children[i];
        for (var j = 0; j < tableRow.childElementCount; j++) {
            var tableColumn = tableRow.children[j];
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
    console.log("Checking if it has children")
    if (div.firstChild) {
        console.log("Hay content");
        while (div.firstChild) {
            div.firstChild.remove()
        }

        //div.removeChild(div.lastChild);
    } else {
        console.log("No hay content");
    }
}

function setText(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputTextArea = document.createElement("textarea");
    inputTextArea.type = "text";
    inputTextArea.placeholder = "Type your answer..."
    inputTextArea.id = "textarea" + formsNumber + "Id" + idTextarea;
    inputTextArea.rows = "10";
    inputTextArea.cols = "50";

    divQuestionContent.appendChild(inputTextArea);
    idTextarea++;
}

function setPassword(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.id = "password" + formsNumber + "Id" + idPassword;
    inputPassword.placeholder = "Enter the password...";

    divQuestionContent.appendChild(inputPassword);
    idPassword++;
}

function setDate(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "date" + formsNumber + "Id" + idDate;

    divQuestionContent.appendChild(inputDate);
    idDate++;
}

function setRange(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputRange = document.createElement("input");
    inputRange.type = "range";
    inputRange.addEventListener('input', function() { this.nextElementSibling.value = this.value; }, true)
    inputRange.id = "range" + formsNumber + "Id" + idRange;

    var numberSelected = document.createElement("output");

    divQuestionContent.appendChild(inputRange);
    divQuestionContent.appendChild(numberSelected);
    idRange++;
}

function setFile(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.id = "file" + formsNumber + "Id" + idFile;

    divQuestionContent.appendChild(inputFile);
    idFile++;
}

function setMail(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.id = "email" + formsNumber + "Id" + idEmail;
    inputMail.placeholder = "Type the email..."

    divQuestionContent.appendChild(inputMail);
    idEmail++;
}

function setRadioButton(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    inputRadio.id = "radio" + formsNumber + "Id" + idRadio;

    divQuestionContent.appendChild(inputRadio);
    idRadio++;
}

function setCheckBox(divQuestionContent) {

    checkDivQuestionContent(divQuestionContent);

    var inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox" + formsNumber + "Id" + idCheck;

    divQuestionContent.appendChild(inputCheckBox);
    idCheck++;
}

function setUniqueSelectionList(divQuestionContent) {

}

function setMultipleSelectionList(divQuestionContent) {

}

function saveNewForm() {
    //Insertar titulo
    var title = document.getElementById('titleForm' + formsNumber).value;

    if (!isEmptyOrSpaces(title)) {
        if (checkIfTitleAlreadyExists()) {
            console.log("Titulo guardadao");

            let newRow = tableOfForms.insertRow(-1);

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