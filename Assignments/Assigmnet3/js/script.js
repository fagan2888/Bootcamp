var questions = quiz.qustions;
const ANSWER_COUNT = 4;
const QUESTION_COUNT = 5;
var totalScoringForSeprteQestion = [];
var objCheacked;
var sumScoring = quiz.sumResult;
var resultScoring;
var flagQuestions = [];
var objLocal = JSON.parse(localStorage.getItem("globalStorage"));

var initScoringQuestions = () => {
    questions.map((ques) => {
        totalScoringForSeprteQestion.push(ques.scoringQues);
    })
}
var initFlagQuestion = () => {
    for (let index = 0; index < questions.length; index++) {
        flagQuestions.push(false);
    }
}
initScoringQuestions();
initFlagQuestion();
var createItems = () => {
    var carouselTag = document.getElementById("my-carousel");
    for (var i = 0; i < questions.length; i++) {
        var addItem = document.createElement("div");
        if (i === 0) {
            addItem.className = "carousel-item active";
        }
        else {
            addItem.className = "carousel-item";
        }
        carouselTag.appendChild(addItem);
        createDetailItem(addItem, i);
        createAns(addItem, i);
    }
}
var createDetailItem = (item, i) => {
    var detailItemTitleRow = document.createElement("div");
    var detailItemTilteCol = document.createElement("div");
    var questionTitle = document.createElement("h3");
    questionTitle.className = "question-style";
    detailItemTitleRow.className = "row justify-content-center mt-4";
    detailItemTilteCol.className = "col-sm-12";
    item.appendChild(detailItemTitleRow);
    detailItemTitleRow.appendChild(detailItemTilteCol);
    detailItemTilteCol.appendChild(questionTitle).innerHTML = `${questions[i].q}`;
}
var createAns = (item, i) => {
    var detailAnsRow = document.createElement("div");
    var detailAnsCol = document.createElement("div");
    var ul = document.createElement("ul");
    detailAnsRow.className = "row justify-content-center mt-4";
    detailAnsCol.className = "col-sm-12";
    ul.className = "list-group-item";
    detailAnsRow.appendChild(detailAnsCol);
    detailAnsCol.appendChild(ul);
    for (let index = 0; index < ANSWER_COUNT; index++) {
        var customRadio = createCustomRadio(i, index);
        ul.appendChild(customRadio);
    }
    item.appendChild(detailAnsRow);
}
var createCustomRadio = (i, index) => {
    var customRadio = document.createElement("div");
    var inputRadio = document.createElement("input");
    var label = document.createElement("label");
    inputRadio.setAttribute("type", "radio");
    inputRadio.setAttribute("name", "groupOfDefaultRadios");
    inputRadio.setAttribute("id", `defaultGroupExample${i}${index}`);
    inputRadio.setAttribute("onchange", "chackedRadio(this)");
    inputRadio.className = "custom-control-input";
    customRadio.className = "custom-control custom-radio";
    label.className = "custom-control-label mt-4";
    label.setAttribute("for", `defaultGroupExample${i}${index}`);
    customRadio.appendChild(inputRadio);
    customRadio.appendChild(label);

    //cheked this labell
    label.innerHTML = `${questions[i].answers[index].ans}`;
    return customRadio;
}
var chackedRadio = (obj) => {
    objCheacked = obj;
    ScoringForQes(objCheacked);
 
}

var ScoringForQes = (objCheacked) => {

    var getPositionQuestionI = parseInt(objCheacked.id.slice(19, 20));
    var getPositionQuestionJ = parseInt(objCheacked.id.slice(20, 21));
    for (var i = 0; i < questions.length; i++) {
        for (var j = 0; j < ANSWER_COUNT; j++) {
            switch (true) {
                //Q1
                case i === getPositionQuestionI && i === 0:
                    {
                        if (j === getPositionQuestionJ && j === 0) {
                            console.log("Q1:one option");
                            questions[0].scoringQues = questions[0].answers[0]["sccore"];
                            totalScoringForSeprteQestion[0] = questions[0].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 1) {
                            console.log("Q1:two option");
                            questions[0].scoringQues = questions[0].answers[1]["sccore"];
                            totalScoringForSeprteQestion[0] = questions[0].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 2) {
                            console.log("Q1:thrid option");
                            questions[0].scoringQues = questions[0].answers[2]["sccore"];
                            totalScoringForSeprteQestion[0] = questions[0].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 3) {
                            console.log("Q1:four option");
                            questions[0].scoringQues = questions[0].answers[3]["sccore"];
                            totalScoringForSeprteQestion[0] = questions[0].scoringQues;
                        }
                        flagQuestions[i] = true;


                    }
                    break;
                //Q2
                case i === getPositionQuestionI && i === 1:
                    {
                        if (j === getPositionQuestionJ && j === 0) {
                            console.log("Q2:one option");
                            questions[1].scoringQues = questions[1].answers[0]["sccore"];
                            totalScoringForSeprteQestion[1] = questions[1].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 1) {
                            console.log("Q2:two option");
                            questions[1].scoringQues = questions[1].answers[1]["sccore"];
                            totalScoringForSeprteQestion[1] = questions[1].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 2) {
                            console.log("Q2:thrid option");
                            questions[1].scoringQues = questions[1].answers[2]["sccore"];
                            totalScoringForSeprteQestion[1] = questions[1].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 3) {
                            console.log("Q2:four option");
                            questions[1].scoringQues = questions[1].answers[3]["sccore"];
                            totalScoringForSeprteQestion[1] = questions[1].scoringQues;
                        }
                    }
                    flagQuestions[i] = true;

                    break;
                //Q3
                case i === getPositionQuestionI && i === 2:
                    {
                        if (j === getPositionQuestionJ && j === 0) {
                            console.log("Q3:one option");
                            questions[2].scoringQues = questions[2].answers[0]["sccore"];
                            totalScoringForSeprteQestion[2] = questions[2].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 1) {
                            console.log("Q3:two option");
                            questions[2].scoringQues = questions[2].answers[1]["sccore"];
                            totalScoringForSeprteQestion[2] = questions[2].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 2) {
                            console.log("Q3:thrid option");
                            questions[2].scoringQues = questions[2].answers[2]["sccore"];
                            totalScoringForSeprteQestion[2] = questions[2].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 3) {
                            console.log("Q3:four option");
                            questions[2].scoringQues = questions[2].answers[3]["sccore"];
                            totalScoringForSeprteQestion[2] = questions[2].scoringQues;
                        }
                    }
                    flagQuestions[i] = true;

                    break;
                //Q4
                case i === getPositionQuestionI && i === 3:
                    {
                        if (j === getPositionQuestionJ && j === 0) {
                            console.log("Q4:one option");
                            questions[3].scoringQues = questions[3].answers[0]["sccore"];
                            totalScoringForSeprteQestion[3] = questions[3].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 1) {
                            console.log("Q4:two option");
                            questions[3].scoringQues = questions[3].answers[1]["sccore"];
                            totalScoringForSeprteQestion[3] = questions[3].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 2) {
                            console.log("Q4:thrid option");
                            questions[3].scoringQues = questions[3].answers[2]["sccore"];
                            totalScoringForSeprteQestion[3] = questions[3].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 3) {
                            console.log("Q4:four option");
                            questions[3].scoringQues = questions[3].answers[3]["sccore"];
                            totalScoringForSeprteQestion[3] = questions[3].scoringQues;
                        }

                    }
                    flagQuestions[i] = true;

                    break;

                //Q5
                case i === getPositionQuestionI && i === 4:
                    {
                        if (j === getPositionQuestionJ && j === 0) {
                            console.log("Q5:one option");
                            questions[4].scoringQues = questions[4].answers[0]["sccore"];
                            totalScoringForSeprteQestion[4] = questions[4].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 1) {
                            console.log("Q5:two option");
                            questions[4].scoringQues = questions[4].answers[1]["sccore"];
                            totalScoringForSeprteQestion[4] = questions[4].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 2) {
                            console.log("Q5:thrid option");
                            questions[4].scoringQues = questions[4].answers[2]["sccore"];
                            totalScoringForSeprteQestion[4] = questions[4].scoringQues;
                        }
                        if (j === getPositionQuestionJ && j === 3) {
                            console.log("Q5:four option");
                            questions[4].scoringQues = questions[4].answers[3]["sccore"];
                            totalScoringForSeprteQestion[4] = questions[4].scoringQues;
                        }

                    }
                    flagQuestions[i] = true;

                    break;


            }

        }
    }
    if (flagQuestions.every(isValueInArrTrue)) {
        totalSumAnswerForAllQues(totalScoringForSeprteQestion);
    }
}

var totalSumAnswerForAllQues = (resultArrQuestion) => {
    resultScoring = resultArrQuestion.reduce((prev, next) => prev + next);
    var descriptionP = analyzeResult(resultScoring);
    var fatherDiv = document.getElementById("body");
    var newContiner = document.createElement("div");
    var p = document.createElement("p");
    p.innerHTML = descriptionP;
    newContiner.className = "container justify-content-center mt-5";
    var endQuiz = document.createElement("div");
    var chiledDiv =document.getElementById("container");
    endQuiz.id = 'game-over';
    //return
    endQuiz.innerHTML =`End Quiz ${objLocal["name"]} result is ${resultScoring}`;
    endQuiz.className = "end-style";
    newContiner.appendChild(endQuiz);
    newContiner.appendChild(p);
    fatherDiv.replaceChild(newContiner,chiledDiv);
}


var initButton = () => {
    $(document).ready(function () {
        // Activate Carousel
        $("#myCarousel").carousel("pause");
        $('#myCarousel').carousel({ interval: false });
        // Go to the next item
        $("#next").click(function () {
            $("#myCarousel").carousel("next");
        });
        $("#prev").click(function () {
            $("#myCarousel").carousel("prev");
        });


        $("#myCarousel").on('slide.bs.carousel', function (e) {
            console.log($(e.relatedTarget));
            var slidingItemsAsIndex = $(".carousel-item").length -1;
            var countTag =`${$(e.relatedTarget).index()+1} of ${QUESTION_COUNT}`;
            var fatherCounterTag = $(e.relatedTarget)[0].children[0].firstChild;
            if (fatherCounterTag.children[1]) {
                countTag ="";
            }
            var createCountTag = document.createElement("h3");

            createCountTag.innerHTML = countTag;
            fatherCounterTag.appendChild(createCountTag);
            console.log($(e.relatedTarget));
            console.log($(e.relatedTarget)[0].children[0].firstChild);
          })
    });
}


var isValueInArrTrue = (currentValue) => { 
    return currentValue === true;
}

var analyzeResult =(resultTotalAnswers) => {
    console.log(resultTotalAnswers);
    if (resultTotalAnswers  >=  5 && resultTotalAnswers < 9) {
        console.log("enfnf");
        return `You are an impulsive person, love life, but sometimes a little discouraged
                Usually sociable you sometimes see challenges and try to solve them, although sometimes you are deterred by them.
                You have a desire to succeed in the economic field
                You are drawn to the real world, although you think you will be successful if you see any human field.
                You see a partner as a partner for life and attribute importance to communication in the relationship even if the emotion does not stand in the way`;
        
    }
    if (resultTotalAnswers > 9 && resultTotalAnswers <15) {
        return `You are a person who is connected to the ground, but has tendencies toward the spiritual realm.
        You are not always satisfied with your life and believe you could do things differently.
        You are afraid of challenging as tests and will not always know how to deal with them.
        In your own eyes you think you are not like everyone else and try to go against the tide.
        Money is an important factor to you, but you believe there is more important than it.
        You are not the most romantic and have difficulty expressing your feelings`;
    }
    if (resultTotalAnswers>15 && resultTotalAnswers <= 20) {
        return `You are a character who is aware of yourself, yet you tend to dream.
        You tend to think a lot, too much, about life, about yourself and everything
        Money is not a significant element in your life
        You like to deal with mental issues and do not like crowded places.
        Music is a big part of your life and love is something sublime, pure, and superlative
        You have a need for a number of close friends rather than a large group.
        You love traveling the world in general You belong to the kind of people who are very moral at the base and it will be difficult to get them to go astray`;
        
    }
    
}
createItems();
initButton();