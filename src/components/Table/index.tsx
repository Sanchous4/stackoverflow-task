import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {QuestionsShortResponse} from '../../api/types/questions';
import {FC} from '../../types/react';
import styled from 'styled-components';

interface ITableProps {
    questions: Array<QuestionsShortResponse>;
}

const TableRow = styled.tr`
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
        color: #9499ff;
    }
`;

const Table: FC<ITableProps> = ({questions}) => {
    const navigate = useNavigate();
    const goToDetails = useCallback(
        (id: number) => {
            navigate(`/question/${id}`);
        },
        [navigate]
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Question</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((question) => (
                    <TableRow
                        onClick={() => goToDetails(question.id)}
                        key={question.id}
                    >
                        <td>{question.id}</td>
                        <td>{question.title}</td>
                    </TableRow>
                ))}
            </tbody>
        </table>
    );
};
export default Table;
