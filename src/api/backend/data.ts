import {getRandomValue} from '../../utils/getRandom';
import {sleep} from '../../utils/sleep';
import {Answer, QuestionDetails} from '../types/details';
import {QuestionsShortResponse} from '../types/questions';

const tags = ['JS', 'Python', 'C++'];

const questions = [
    'How to round to 2 decimal places in JavaScript?',
    'How to check if a string contains a substring in JavaScript?',
    'How to remove duplicates from an array in JavaScript?',
    'How to sort an array in JavaScript?',
    'How to check if an object is empty in JavaScript?',
    'How to check if a variable is undefined in JavaScript?',
    'How to add an item to an array in JavaScript?',
    'How to remove the last item from an array in JavaScript?',
    'How to check if a number is even in JavaScript?',
    'How to convert a string to an array in JavaScript?',
    'How to merge two arrays in JavaScript?',
    'How to check if a variable is an array in JavaScript?',
    'How to check if a variable is a string in JavaScript?',
    'How to check if a variable is a number in JavaScript?',
    'How to convert a string to a number in JavaScript?',
    'How to get the length of an array in JavaScript?',
    'How to find the index of an item in an array in JavaScript?',
    'How to remove an item from an array in JavaScript?',
    'How to slice an array in JavaScript?',
    'How to reverse a string in JavaScript?',
];

export const getShortQuestions = async (): Promise<
    Array<QuestionsShortResponse>
> => {
    await sleep(2000);
    const newQuestions: Array<QuestionsShortResponse> = [];

    questions.forEach((q, i) => {
        newQuestions.push({
            id: i,
            title: q,
            tags,
            score: getRandomValue(),
        });
    });

    return newQuestions;
};

export const getQuestionDetails = async ({
    id,
}: {
    id: number;
}): Promise<QuestionDetails> => {
    await sleep(1000);
    const newQuestionDetails: QuestionDetails = {
        id: id,
        title: questions[id],
        tags,
        score: getRandomValue(),
        description: `My ID ${id} Trying to map paths in tsconfig.json to get rid of relative paths hell. My React App is based on Create-React-App. I tried this SO thread and added paths in my tsconfig.json. My tsconfig.json is as`,
        answers: [...Array(getRandomValue() + 1)].map(() => ({
            score: getRandomValue(),
            answer: `you've probably already figured this one out but here's a solution while we wait for a pull request that adds this to tsconfig Currently having the same issue with create-react-app react v 17.0.2,

            I've had a similar issue with gatsby applications where you're not able to just set up alias imports without changing the web pack config
            
            this thread has a good explanation on alias imports within cra without typescript, but it should lead to the same configuration at the end of the day.`,
        })),
    };

    return newQuestionDetails;
};
