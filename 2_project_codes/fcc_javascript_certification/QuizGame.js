// category
// question
// choices
// answer

let questions = [];

let question_1 = {
    'category': 'History',
    'question': 'What year did Singapore gain independence?',
    'choices': ['1965', '1966', '1967'],
    'answer': '1965'
};
let question_2 = {
    'category': 'Music',
    'question': "Which member of Vulfpeck was named after a Vulfpeck song?",
    'choices': ['Jack Stratton', 'Theo Katzman', 'Cory Wong'],
    'answer': 'Cory Wong'
};
let question_3 = {
    'category': 'Theology',
    'question': "Who nailed the 95 Theses?",
    'choices': ['Arius', 'Martin Luther', 'Pelagius'],
    'answer': 'Martin Luther'
};
let question_4 = {
    'category': 'Programming',
    'question': "Which of the following ways cannot copy a list in Python?",
    'choices': ['your_list[:]', 'your_list.copy()', 'copy(your_list)'],
    'answer': 'copy(your_list)'
};

let question_5 = {
    'category': 'Nicholas',
    'question': "What's Nicholas's favourite Tiny Desk Concert?",
    'choices': ['Babyface', 'Fujii Kaze', 'Chaka Khan'],
    'answer': 'Fujii Kaze'
};

questions.push(question_1);
questions.push(question_2);
questions.push(question_3);
questions.push(question_4);
questions.push(question_5);

function getRandomQuestion(questions) {
    let randInt = Math.floor(Math.random() * questions.length);
    let randQuestion = questions[randInt];
    return randQuestion
}

function getRandomComputerChoice(choices) {
    let randInt = Math.floor(Math.random() * choices.length);
    let randChoice = choices[randInt];
    return randChoice
}

function getResults(question, choice) {
    let answer = question.answer;
    let result = answer == choice;
    if (result) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${answer}`
    }
}

