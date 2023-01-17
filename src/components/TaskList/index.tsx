import { FlatList, Text, TouchableHighlight, View } from "react-native";
import { TaskItem } from "../TaskItem";

type Tasks = {
    tasks: {
        id: string,
        task: string,
        status: number
    }[]
}

export const TaskList = ({tasks}:Tasks) => {

    const handleChangeTaskStatus = (index:number) => {
        console.log('Atualizou', index);
    }

    const handleDeleteTask = (index:number) => {
        console.log('Deletou', index);
    }

    return (
        <FlatList 
            data={tasks}
            renderItem={({item, index})=> <TaskItem item={item} onChangeTaskStatus={()=> handleChangeTaskStatus(index)} onDeleteTask={()=>handleDeleteTask(index)} />}
            keyExtractor={(item)=>item.id}
        />
    );
}