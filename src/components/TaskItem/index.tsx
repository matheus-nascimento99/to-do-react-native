import { Text, View, Image, TouchableOpacity } from "react-native";
import TaskItemStyle from "./style";

interface TaskItem {
    item: {
        id: string,
        task: string,
        status: boolean
    },
    onChangeTaskStatus: () => void,
    onDeleteTask: () => void
}

export const TaskItem = ({item, onChangeTaskStatus, onDeleteTask}:TaskItem) => {

    const handleChangeStatus = () => {
        onChangeTaskStatus();
    }

    const handleRemove = () => {
        onDeleteTask();
    }

    return (
        <View style={TaskItemStyle.getSheet().container} >
            <TouchableOpacity style={TaskItemStyle.getSheet().itemAreaIcon} onPress={handleChangeStatus} >
                <View style={TaskItemStyle.getSheet(item.status).taskStatusCheckArea}>
                    {item.status === true && 
                        <Image source={require('./assets/images/check.png')} style={TaskItemStyle.getSheet().taskStatusCheck} />
                    }
                </View>
            </TouchableOpacity>
            <View style={TaskItemStyle.getSheet().itemArea}>
                <Text style={TaskItemStyle.getSheet().taskText}>{item.task}</Text>
            </View>
            <TouchableOpacity style={TaskItemStyle.getSheet().itemAreaIcon} onPress={handleRemove}>
                <Image source={require('./assets/images/trash.png')} style={TaskItemStyle.getSheet().taskTrash} />
            </TouchableOpacity>
        </View>
    );
}
