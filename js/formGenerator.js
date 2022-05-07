var questionNumber

function newForm() {
    questionNumber = 0;

    document.getElementById("buttonsMenuForm").classList.toggle("invisible");
    document.getElementById("tableMenu").classList.toggle("invisible");
    document.getElementById("buttonsNewForm").classList.toggle("invisible");
    document.getElementById("divNewForm").classList.toggle("invisible")
    document.getElementById("divNewFormButton").classList.toggle("invisible")

    divNewForm = document.getElementById("divNewForm");

    setHtmlTitle();
    setHtmlQuestion();
    setHtmlNewQuestionButton();
}


function setHtmlTitle() {
    var inputTitle = `<h3>New Form<h3>
    <label for="title">Form title (*)</label> <br>
    <input type="text" name="title" value="" id="title" />`
    divNewForm.innerHTML = inputTitle;
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

function saveNewForm() {
    var title = document.getElementById("title").value;
    console.log(title);
    newForm.title = title;
    console.log("Form" + newForm.title);
}