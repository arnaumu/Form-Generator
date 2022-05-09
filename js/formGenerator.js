var questionNumber = 1;
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

    checkIfDivHasContent(document.getElementById("divNewForm"))

    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById("buttonsNewForm").classList.toggle("invisible");
    document.getElementById("divNewForm").classList.toggle("invisible")
    document.getElementById("divNewFormButton").classList.toggle("invisible");

    setNewFormElements();
}

function setNewFormElements() {
    questionNumber = 1;

    //Dic form number
    var divFormContent = document.createElement("div");
    divFormContent.setAttribute("id", "form" + formsNumber);

    //Set title
    setTitle(divFormContent);

    //Div question number
    var divQuestionNumber = document.createElement("div");
    divQuestionNumber.setAttribute("id", "questionNum" + questionNumber);

    //Set Question
    setQuestion(divFormContent, divQuestionNumber);

    //Div question content
    var divQuestionContent = document.createElement("div");
    divQuestionContent.setAttribute("id", "questionContent" + questionNumber);
    divQuestionNumber.appendChild(divQuestionContent);

    //Set add question button
    setButtonAddQuestion()

    //Select on change
    document.getElementById("questionType" + questionNumber).onchange = function(e) {
        switch (this[this.selectedIndex].text) {
            case "Text":
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
        // formsNumber++;
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

function setQuestion(divFormContent, divQuestionNumber) {

    //Question number
    var h3QuestionNumber = document.createElement("h3");
    h3QuestionNumber.setAttribute("id", "questionNumber" + questionNumber);
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
}

function setButtonAddQuestion() {
    var div = document.getElementById("divNewFormButton");


    var btn = document.createElement("button");
    btn.innerHTML = "Add another question";
    btn.onclick = function() {
        addQuestion();
    };
    var hr = document.createElement("hr");

    div.appendChild(hr);
    div.appendChild(btn);
}

function addQuestion() {
    questionNumber++;

    var divFormContent = document.getElementById("form" + formsNumber);
    var divQuestionNumber = document.createElement("div");
    divQuestionNumber.setAttribute("id", "questionNum" + questionNumber);

    setQuestion(divFormContent, divQuestionNumber);

    //Div question content
    var divQuestionContent = document.createElement("div");
    divQuestionContent.setAttribute("id", "questionContent" + questionNumber);
    divQuestionNumber.appendChild(divQuestionContent);

    document.getElementById("questionType" + questionNumber).onchange = function(e) {
        switch (this[this.selectedIndex].text) {
            case "Text":
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

function cancel() {
    document.getElementById("buttonsNewForm").classList.toggle("invisible");
    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById("divNewForm").classList.toggle("invisible");
    document.getElementById("divNewFormButton").classList.toggle("invisible");

    removeChilds(document.getElementById("form" + formsNumber));
    removeChilds(document.getElementById("divNewFormButton"));
}

function removeChilds(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
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

function checkIfDivHasContent(div) {
    if (div.firstChild) {
        while (div.firstChild) {
            div.firstChild.remove()
        }
    } else {}
}

function setText(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

    var inputTextArea = document.createElement("textarea");
    inputTextArea.type = "text";
    inputTextArea.placeholder = "Type your answer..."
    inputTextArea.id = "textarea" + formsNumber + "Id" + idTextarea;
    inputTextArea.rows = "5";
    inputTextArea.cols = "50";

    divQuestionContent.appendChild(inputTextArea);
    idTextarea++;
}

function setPassword(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.id = "password" + formsNumber + "Id" + idPassword;
    inputPassword.placeholder = "Enter the password...";

    divQuestionContent.appendChild(inputPassword);
    idPassword++;
}

function setDate(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

    var inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "date" + formsNumber + "Id" + idDate;

    divQuestionContent.appendChild(inputDate);
    idDate++;
}

function setRange(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

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

    checkIfDivHasContent(divQuestionContent);

    var inputFile = document.createElement("input");
    inputFile.type = "file";
    inputFile.id = "file" + formsNumber + "Id" + idFile;

    divQuestionContent.appendChild(inputFile);
    idFile++;
}

function setMail(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

    var inputMail = document.createElement("input");
    inputMail.type = "email";
    inputMail.id = "email" + formsNumber + "Id" + idEmail;
    inputMail.placeholder = "Type the email..."

    divQuestionContent.appendChild(inputMail);
    idEmail++;
}

function setRadioButton(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

    var inputRadio = document.createElement("input");
    inputRadio.type = "radio";
    inputRadio.id = "radio" + formsNumber + "Id" + idRadio;

    divQuestionContent.appendChild(inputRadio);
    idRadio++;
}

function setCheckBox(divQuestionContent) {

    checkIfDivHasContent(divQuestionContent);

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
            let newRow = tableOfForms.insertRow(-1);

            var cellTitle = newRow.insertCell(0);
            var cellButtons = newRow.insertCell(1);

            //Buttons crud
            var btnOpen = document.createElement("button");
            btnOpen.innerHTML = "Open";
            btnOpen.addEventListener("click", function() { openForm(title) });
            var btnEdit = document.createElement("button");
            btnEdit.innerHTML = "Edit";
            btnEdit.addEventListener("click", function() { editForm(title) });
            var btnDelete = document.createElement("button");
            btnDelete.innerHTML = "Delete";
            btnDelete.addEventListener("click", function() { deleteForm(title) });

            cellTitle.appendChild(document.createTextNode(title));
            cellButtons.append(btnOpen, btnEdit, btnDelete);

            //Saving elements

            //Create div & append to its pertinent div
            var divForms = document.getElementById("forms");

            var form = document.createElement("div");
            form.setAttribute("id", title);
            form.setAttribute("class", "invisible");
            divForms.appendChild(form);

            //Set title
            var h2Title = document.createElement("h2");
            h2Title.innerHTML = title;

            form.appendChild(h2Title);
            divForms.appendChild(form);

            //Get divs elements
            var divForm = document.getElementById('form' + formsNumber);
            var directChildren = divForm.childNodes.length;

            for (var i = 1; i < directChildren; i++) {
                var questionNumber = document.getElementById("questionNumber" + i).innerText;
                var h3QuestionNumber = document.createElement("h3");
                h3QuestionNumber.innerHTML = questionNumber;
                h3QuestionNumber.setAttribute("id", title + "-questionNum-" + questionNumber);

                var questionTitle = document.getElementById("questionTitle" + i).value;
                var p = document.createElement("p");
                p.innerHTML = questionTitle;
                p.setAttribute("id", title + "-questionTitle-" + i);

                const questionContent = document.getElementById("questionContent" + i);
                const clone = questionContent.cloneNode(true);
                clone.id = title + "-questionContent-" + i;

                var hr = document.createElement("hr");

                form.append(h3QuestionNumber, p, clone, hr);
            }

            //Alert
            alert("SUCCESS ---> NEW FORM SAVED!\nThe form '" + title + "' has been successfully saved");
            //Back to main menu
            cancel();
        } else {
            alert("ERROR ---> DUPLICATED TITLE!\nThis form title already exists.");
        }
    } else {
        alert("ERROR ---> NOT SAVED!\nEmpty title or blank characters at the beginning.");
    }
}

function cancelFormOpened(title) {
    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    // document.getElementById("cancelFormOpened").classList.toggle("invisible");
    document.getElementById(title).classList.toggle("invisible");

    document.getElementById("cancelFormOpened").remove();

}

function openForm(title) {
    console.log("OPEN FORM with title " + title);

    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById(title).classList.toggle("invisible");

    let btnExit = document.createElement("button");
    btnExit.innerHTML = "Exit Form";
    btnExit.id = "cancelFormOpened";
    btnExit.onclick = function() {
        cancelFormOpened(title);
    };
    document.getElementById(title).appendChild(btnExit);
}

function editForm(title) {
    console.log("EDIT FORM with title " + title);
}

function deleteForm(title) {
    console.log("DELETE FORM with title " + title);
}