/************************* Method 1 **  a bit complicated */ 

let answers = document.querySelectorAll(".answer");
let icons = document.querySelectorAll(".this_icon");

let plus_icons = document.querySelectorAll(".fa-circle-plus");
let minus_icons = document.querySelectorAll(".fa-circle-minus");

icons.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
        // when a button is clicked, "show_answer" is toggled

        answers.forEach(function (answer) {
            if (
                event.currentTarget.parentElement.parentElement ===
                answer.parentElement
            ) {
                answer.classList.toggle("show_answer");
            } else {
                answer.classList.remove("show_answer");
            }
        });

        // when a button is clicked, "show_icon" is toggled

        two_icons_list = event.currentTarget.parentElement.children;
        for (let i = 0; i < two_icons_list.length; i++) {
            if (two_icons_list[i].classList.contains("show_icon")) {
                two_icons_list[i].classList.toggle("show_icon");
            } else {
                two_icons_list[i].classList.toggle("show_icon");
            }
        }
        // when a button is clicked, all other buttons become plus.

        minus_icons.forEach(function (minus) {
            if (
                minus.parentElement.parentElement !==
                event.currentTarget.parentElement.parentElement
            ) {
                minus.classList.remove("show_icon");
            }
        });

        plus_icons.forEach(function (plus) {
            if (
                plus.parentElement.parentElement !==
                event.currentTarget.parentElement.parentElement
            ) {
                plus.classList.add("show_icon");
            }
        });
    });
});

/************************************ Alternative and Simpler method

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

   questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

     question.classList.toggle("show-text");
  });
});


*******************************************