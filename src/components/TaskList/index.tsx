import { Alert, FlatList, Text, TouchableHighlight, View } from "react-native";
import { TaskItem } from "../TaskItem";

type Tasks = {
    tasks: {
        id: string,
        task: string,
        status: boolean
    }[],
    onChangeStatus: (index:number) => void,
    onRemove:(id:string) => void
}

export const TaskList = ({tasks, onChangeStatus, onRemove}:Tasks) => {

    const handleChangeTaskStatus = (index:number) => {
        onChangeStatus(index);
    }

    const handleDeleteTask = (index:number, id:string) => {
        Alert.alert('Confirmar', `Deseja realmente deletar a tarefa ${tasks[index].task}?`,[
            {
                text: 'Sim',
                onPress: () => onRemove(id)
            },
            {
                text: 'Cancelar',
                style: "default"
            }
        ])
    }

    return (
        <FlatList 
            data={tasks}
            renderItem={({item, index})=> <TaskItem item={item} onChangeTaskStatus={()=> handleChangeTaskStatus(index)} onDeleteTask={()=>handleDeleteTask(index, item.id)} />}
            keyExtractor={(item)=>item.id}
        />
    );
}