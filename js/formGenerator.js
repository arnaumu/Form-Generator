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
    setHtmlQuestion(divFormContent);
    //setHtmlNewQuestionButton();

    //Select on change

    document.getElementById("questionType" + questionNumber).onchange = function(e) {
        // console.log(this[this.selectedIndex].text);
        switch (this[this.selectedIndex].text) {
            case "Text":
                setText(divFormContent);
                break;
            case "Password":
                setPassword(divFormContent);
                break;
            case "Date":
                setDate(divFormContent);
                break;
            case "Range Number":
                setRange(divFormContent);
                break;
            case "File":
                setFile(divFormContent);
                break;
            case "Mail":
                setMail(divFormContent);
                break;
            case "Radio Button":
                setRadioButton(divFormContent);
            case "Check Boxes":
                setCheckBox(divFormContent);
            case "Unique selection list":
                setUniqueSelectionList(divFormContent);
            case "Multiple selection list":
                setMultipleSelectionList(divFormContent);
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

function setHtmlQuestion(divFormContent) {
    questionNumber++

    //Question number
    var h3QuestionNumber = document.createElement("h3");
    h3QuestionNumber.innerHTML = "Question number " + questionNumber;

    divFormContent.appendChild(h3QuestionNumber);
    divNewForm.appendChild(divFormContent);

    //Label for question title
    var labelForFormQuestionTitle = document.createElement("Label");
    labelForFormQuestionTitle.setAttribute("for", "questionTitle" + questionNumber);
    labelForFormQuestionTitle.innerHTML = "Question title:";

    divFormContent.appendChild(labelForFormQuestionTitle);
    divNewForm.appendChild(divFormContent);

    //Input question title
    var inputFormTitle = document.createElement("input");
    inputFormTitle.type = "text";
    inputFormTitle.placeholder = "Type your question..."
    inputFormTitle.size = 35;
    inputFormTitle.id = "questionTitle" + questionNumber;

    divFormContent.appendChild(inputFormTitle);
    divNewForm.appendChild(divFormContent);

    //Label for question type
    var labelForFormQuestionType = document.createElement("Label");
    labelForFormQuestionType.setAttribute("for", "questionType" + questionNumber);
    labelForFormQuestionType.innerHTML = "Question type:";

    divFormContent.appendChild(labelForFormQuestionType);
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

    divFormContent.appendChild(selectQuestionType)
    divNewForm.appendChild(divFormContent);

    var linebreak = document.createElement("br");

    divFormContent.appendChild(linebreak);
    divNewForm.appendChild(divFormContent);

    var divQuestionContent = document.createElement("div");
    divQuestionContent.setAttribute("id", 'question' + questionNumber + '-form' + formsNumber)

    divFormContent.appendChild(divQuestionContent);
    divNewForm.appendChild(divFormContent);
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
    if (div.innerHTML.length != 0) {
        console.log("Hay content");
        div.removeChild(div.lastChild);
    } else {
        console.log("No hay content");
    }
}

function setText(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputTextArea = document.createElement("textarea");
    inputTextArea.type = "text";
    inputTextArea.placeholder = "Type your answer..."
    inputTextArea.id = "textarea" + formsNumber + "Id" + idTextarea;
    inputTextArea.rows = "10";
    inputTextArea.cols = "50";

    div.appendChild(inputTextArea);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idTextarea++;
}

function setPassword(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.id = "password" + formsNumber + "Id" + idPassword;

    div.appendChild(inputPassword);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idPassword++;
}

function setDate(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "date" + formsNumber + "Id" + idDate;

    div.appendChild(inputDate);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idDate++;
}

function setRange(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputRange = document.createElement("input");
    inputRange.type = "range";
    inputRange.addEventListener('input', function() { this.nextElementSibling.value = this.value; }, true)
    inputRange.id = "range" + formsNumber + "Id" + idRange;

    //div.appendChild(inputRange);
    var numberSelected = document.createElement("output");

    //Cuando se pone el output no desaparece al canviar de selección. !!!!!!!!!!!!
    inputRange.innerHTML += numberSelected;
    div.appendChild(inputRange);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);

    idRange++;
}

function setFile(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.id = "file" + formsNumber + "Id" + idDate;

    div.appendChild(inputFile);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idFile++;
}

function setMail(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.id = "email" + formsNumber + "Id" + idEmail;

    div.appendChild(inputMail);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idEmail++;
}

function setRadioButton(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    inputRadio.id = "radio" + formsNumber + "Id" + idRadio;

    div.appendChild(inputRadio);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idRadio++;
}

function setCheckBox(divFormContent) {
    var div = document.getElementById('question' + questionNumber + '-form' + formsNumber);

    checkDivQuestionContent(div);

    var inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox" + formsNumber + "Id" + idCheck;

    div.appendChild(inputCheckBox);
    divFormContent.appendChild(div);
    divNewForm.appendChild(divFormContent);
    idCheck++;
}

function setUniqueSelectionList(divFormContent) {

}

function setMultipleSelectionList(divFormContent) {

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