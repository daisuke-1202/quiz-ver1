const quiz = [
    {
        quizCnt : "問題１",
        question : "行揃え:中央揃え に対して正しいものを選びなさい",
        ans : [
            "vartical-align: center",
            "text-align: center",
            "padding: 0 auto;",
            "margin: 0 auto;"
        ],
        correct : "text-align: center"
    },{
        quizCnt : "問題２",
        question : "基準位置:絶対的 に対して正しいものを選びなさい",
        ans : [
            "clear: both;",
            "display: block",
            "position: absolute",
            "position: relative;"
        ],
        correct : "position: absolute"
    },{
        quizCnt : "問題３",
        question : "高さ に対して正しいものを選びなさい",
        ans : [
            "height",
            "width",
            "padding",
            "margin"
        ],
        correct : "height"
    }
]
let quizIndex = 0;
let quizLength = quiz.length;
let ansIndex = 0;
// console.log(quiz[0]);


// const quizCnt = "問題１";
// const question = "行揃え:中央揃え に対して正しいものを選びなさい";
// const ans = [
//     "vartical-align: center",
//     "text-align: center",
//     "padding: 0 auto;",
//     "margin: 0 auto;"
// ];
// const correct = "text-align: center";

$("h1").text(quiz[quizIndex].quizCnt);
$("p").text(quiz[quizIndex].question);
$("#0").text(quiz[quizIndex].ans[0]);
$("#1").text(quiz[quizIndex].ans[1]);
$("#2").text(quiz[quizIndex].ans[2]);
$("#3").text(quiz[quizIndex].ans[3]);
// // console.log($("button")[0]);
$("button").on('click',function(){
    if($(this).text() == quiz[quizIndex].correct){
        alert('正解！');
        quizIndex++;
        if(quizIndex==3){
            alert("よく出来ました");
        }
        $("h1").text(quiz[quizIndex].quizCnt);
        $("p").text(quiz[quizIndex].question);
        $("#0").text(quiz[quizIndex].ans[0]);
        $("#1").text(quiz[quizIndex].ans[1]);
        $("#2").text(quiz[quizIndex].ans[2]);
        $("#3").text(quiz[quizIndex].ans[3]);
    }else{
        alert('残念...');
    }
});