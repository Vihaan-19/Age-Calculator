//Taking inputs from input field(HTML)
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var submit = document.getElementById("calc-btn");

//Variables to display the answer
var dDisp= document.getElementById("display-days");
var mDisp= document.getElementById("display-months");
var yDisp= document.getElementById("display-years");

//get the current date 
var date = new Date();
var cy = date.getFullYear();
var cm = date.getMonth() + 1;
var cd = date.getDate();

//First the validator should not be displayed (we did that in css)
//We want to display it when incorrect value is given as input

submit.addEventListener("click", () => {
    var d = day.value;
    var m = month.value;
    var y = year.value;

    //if text is entered
    if (isNaN(d) || isNaN(m) || isNaN(y)){
        console.log('Wrong text1');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }

    //checking ranges of date entered
    if (d < 1 || d > 31 || m < 1 || m > 12 || y < 1800){
        console.log('Wrong text2');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }

    //ensuring the date is older to current date
    if (cy < y || (cy == y && cm < m) || (cy == y && cm == m && cd < d)){
        console.log('Wrong text3');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }

    if (m == 2 && d > 29){
        console.log('Wrong text4');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }

    //even months except february have 30 days only 
    if (m <= 7 && m % 2 == 0 && m != 2 && d == 31){
        console.log('Wrong text5');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }

    if (m > 7 && m % 2 == 1 && d == 31){
        console.log('Wrong text6');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }

    //february has only 29 days when leap year
    if (m == 2 && y % 4 != 0){
        console.log('Wrong text7');
        dDisp.innerHTML = "--";
        mDisp.innerHTML = "--";
        yDisp.innerHTML = "--";
        validator.style.display="block";
        return;
    }


    console.log('Input is Correct');
   
    if (cd < d) {
        // borrow days from february
        if (cm == 3) {
            //  check whether year is a leap year
            if ((cy % 4 == 0 && cy % 100 != 0) || (cy % 400 == 0)) {
                cd += 29;
            }

            else {
                cd += 28;
            }
        }

        // borrow days from April or June or September or November
        else if (cm == 5 || cm == 7 || cm == 10 || cm == 12) {
            cd += 30;
        }

        // borrow days from Jan or Mar or May or July or Aug or Oct or Dec
        else {
            cd += 31;
        }

        cm = cm - 1;
    }

    if (cm < m) {
        cm += 12;
        cy -= 1;
    }

    dDisp.innerHTML = cd - d;
    mDisp.innerHTML = cm - m;
    yDisp.innerHTML = cy - y;

})

