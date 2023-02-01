import {QuestionDetails} from '../../api/types/details';
import {FC} from '../../types/react';
import styled from 'styled-components';

interface IAnswers {
    details: QuestionDetails;
}

const AnswerBlock = styled.h4`
    background-color: #1a1a1a;
    padding: 10px;
    border-radius: 10px;
`;

const Answers: FC<IAnswers> = ({details}) => {
    return (
        <div>
            <h1>{details.title}</h1>
            <h2>Description</h2>
            <h3>{details.description}</h3>
            {details.answers.map(({answer, score}, index) => (
                <AnswerBlock key={index}>{`${score} - ${answer}`}</AnswerBlock>
            ))}
        </div>
    );
};
export default Answers;
