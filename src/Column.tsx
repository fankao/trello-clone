import { FC } from 'react'
import AddNewItem from './AddNewItem'
import Card from './Card'
import { addTask } from './state/action'
import { useAppState } from './state/AppStateContext'
import { ColumnContainer, ColumnTitle } from './styles'
type ColumnProps = {
    text: string,
    id: string
}
const Column: FC<ColumnProps> = ({ text, id }) => {
    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map(task => (
                    <Card text={task.text} id={task.id} key={task.id} />
                ))
            }
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}

export default Column
