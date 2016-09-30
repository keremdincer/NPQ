window.$ = window.jQuery = require("jquery");

var formData = require("./form-data/example-form.json");
var currentScale = 0;

var createIntroPage = function() {
    var back = document.createElement("div");
    back.className = "outback";
    document.body.appendChild(back);

    var formTitle = document.createElement("h1");
    formTitle.className = "form-title";
    formTitle.id = "title";
    formTitle.textContent = formData.formTitle;
    formTitle.lang = "tr";
    back.appendChild(formTitle);

    var formDate = document.createElement("h2");
    formDate.className = "form-date";
    formDate.textContent = formData.formDate;
    formDate.lang = "tr";
    back.appendChild(formDate);

    var text = document.createElement("div");
    text.className = "intro-text";
    text.innerHTML = formData.formIntro;
    back.appendChild(text);

    var proceedButton = document.createElement("input");
    proceedButton.type = "submit";
    proceedButton.value = "Devam";
    proceedButton.addEventListener("click", createCredentialRequestPage, false);
    back.appendChild(proceedButton);
}

var createCredentialRequestPage = function() {
    clearWindow();
    var back = document.createElement("div");
    back.className = "outback";
    document.body.appendChild(back);

    var pageTitle = document.createElement("h1");
    pageTitle.textContent = formData.formTitle;
    back.appendChild(pageTitle);

    for (var i = 0; i < formData.formCredentials.length; i++) {
        var label = document.createElement("label");
        label.htmlFor = formData.formCredentials[i].text.split(" ").join("-");
        label.textContent = formData.formCredentials[i].text + ":";

        var inputField = document.createElement("input");
        inputField.type = formData.formCredentials[i].type;
        inputField.id = formData.formCredentials[i].text.split(" ").join("-");
        inputField.name = formData.formCredentials[i].text.split(" ").join("");

        back.appendChild(label);
        back.appendChild(inputField);
    }

    var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Devam";
    submitButton.addEventListener("click", createScale, false);
    back.appendChild(submitButton);
}

var createScale = function() {
    clearWindow();

    var back = document.createElement("div");
    back.className = "outback";
    document.body.appendChild(back);

    var scaleTitle = document.createElement("h2");
    scaleTitle.className = "scale-title";
    scaleTitle.textContent = formData.formScales[currentScale].scaleTitle;
    back.appendChild(scaleTitle);

    var divider = document.createElement("div");
    divider.className = "divider";
    back.appendChild (divider);

    var questionList = [];

    for (var i = 0; i < formData.formScales[currentScale].scaleQuestions.length; i++) {
        questionList[i] = document.createElement("div");
        questionList[i].className = "question";
        questionList[i].innerHTML = (i + 1) + ". " + formData.formScales[currentScale].scaleQuestions[i].text;
        var responses = document.createElement("div");
        for (var j = 0; j < formData.formScales[currentScale].scaleResponses.length; j++) {
            var radioButton = document.createElement("div");
            var radio = document.createElement("input");
            radio.type = "radio";
            radio.id = "respond" + (i+1) + "-" + (j+1);
            radio.name = "respond" + (i + 1);
            radio.className = "radio";
            if (formData.formScales[currentScale].scaleQuestions[i].answerVal === "normal") {
                radio.value = formData.formScales[currentScale].scaleResponses[j].value;            
            } else {
                radio.value = formData.formScales[currentScale].scaleResponses[formData.formScales[currentScale].scaleResponses.length - 1].value + 1 - formData.formScales[currentScale].scaleResponses[j].value;                            
            }

            var label = document.createElement("label");
            label.htmlFor = radio.id;
            label.className = "radio-label";
            label.textContent = formData.formScales[currentScale].scaleResponses[j].text;

            radioButton.appendChild(radio);
            radioButton.appendChild(label);

            responses.appendChild(radioButton);
        }
        questionList[i].appendChild(responses);
        back.appendChild(questionList[i]);
        var separator = document.createElement("div");
        separator.className = "divider";
        back.appendChild(separator);
    }

    var proceedButton = document.createElement("input");
    proceedButton.type = "submit";
    proceedButton.value = "Devam";
    proceedButton.addEventListener("click", function(){
        currentScale += 1;
        createScale();
        $("html,body").animate({scrollTop: 0}, 0);
    }, false);
    back.appendChild(proceedButton);

    $(".question").find("input").parent().find("label").css({cursor: "pointer"});
        $(".question").find("input").on("click", function() {
            $(this).closest(".question").addClass("question-answered");
            // Clear other selected ones
            $(this).parent().parent().find("div").removeClass("selected");
            $(this).closest("div").addClass("selected");
        });
}

var clearWindow = function() {
    document.body.innerHTML = "";
};

createIntroPage();
// createCredentialRequestPage();

// createScale();