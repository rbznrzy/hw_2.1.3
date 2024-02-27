/** Баллы в модуле "Введение" */
const INTRO_SCORE = [20, 20, 30, 30];
/** Баллый в модуле "Git", поделенный по блокам */
const GIT_SCORE = [80, 97, 92, 50];
/** Баллы в модуле "JavaScript" на текущий момент*/
const JS_SCORE = [10, 30, 30, 25, 25];

/** Имя студента */
let studentFirstName = "Igor";
/** Фамилия студента */
let studentLastName = "Akberdin";

/** Метод расчета среднего арифметического по модулю "Введение"*/
let averageIntroScore = (INTRO_SCORE[0] + INTRO_SCORE[1] + INTRO_SCORE[2] + INTRO_SCORE[3]) / INTRO_SCORE.length;

/** Метод расчета среднего арифметического по модулю "Git"*/
let averageGitScore = (GIT_SCORE[0] + GIT_SCORE[1] + GIT_SCORE[2] + GIT_SCORE[3]) / GIT_SCORE.length;

/** Метод расчета среднего арифметического по модулю "Git"*/
let averageJsScore = (JS_SCORE[0] + JS_SCORE[1] + JS_SCORE[2] + JS_SCORE[3] + JS_SCORE[4]) / JS_SCORE.length;

/** Рассчет суммы среднего арифметического по модулям */
let averageSum = averageIntroScore + averageGitScore + averageJsScore;

/** Вывод результата */
console.log(`${studentFirstName} ${studentLastName} has ${averageSum} points`)
