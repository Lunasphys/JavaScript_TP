const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

(function() {
    function buildQuiz() {
        // Variable pour stocker la sortie HTML

        const output = [];

        // Pour chaque question

        myQuestions.forEach((currentQuestion, questionNumber) => {

                //Variable qui sert à stocker la liste de réponse
                const answers = [];
                const multipleAnswers = [];

                //Pour chaque réponse
                for (let letter in currentQuestion.answers) {

                    //Ajout de l'option "radio" bouton
                    answers.push(
                        `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                    );
                }

                // Ajoute une question et sa réponse à la sortie HTML
                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                    </div>`
                );
            }
        );
        // Ajoute la sortie HTML à la page

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {

        const answerContainer = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainers = answerContainer[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainers.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
            }
        });

        resultsContainer.innerHTML = `${numCorrect} sur ${myQuestions.length}`;
    }


    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    // Montre la slide suivante

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    // Montre la slide précédente

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const myQuestions = [
        {
            question: "Quelle est la race de Nami",
            answers: {
                a: "Chow-Chow",
                b: "Dalmatien",
                c: "Shiba-Inu"
            },
            correctAnswer: "c"
        },
        {
            question: "Que mange Nami le soir ?",
            answers: {
                a: "Viande crue",
                b: "Croquettes",
                c: "Fromages (petite dose"
            },
            correctAnswer: "a"
        },
        {
            question: "Quel est le point faible de Nami ?",
            answers: {
                a: "Le rappel",
                b: "Trop fort",
                c: "La mue",
                d: "Flemme"
            },
            correctAnswer: "b"
        },
        {
            question: "Quel est l'âge de Nami ?",
            answers: {
                a: "3 ans",
                b: "4 ans",
                c: "5 ans",
                d: "6 mois"
            },
            correctAnswer: "b"
        },
        {
            question: "Combien de fois par an Nami mue-t-elle ?",
            answers: {
                a: "1 fois",
                b: "2 fois",
                c: "3 fois",
            },
            correctAnswer: "b"
        }
    ];

    buildQuiz();

    // Pagination

    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    // Defilement des questions
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
