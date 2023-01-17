import { Text, View, Image } from "react-native";
import TaskItemStyle from "./style";

interface TaskItem {
    item: {
        id: string,
        task: string,
        status: number
    },
    onChangeTaskStatus: () => void,
    onDeleteTask: () => void
}

export const TaskItem = ({item, onChangeTaskStatus, onDeleteTask}:TaskItem) => {
    return (
        <View style={TaskItemStyle.getSheet().container} >
            <View style={TaskItemStyle.getSheet().itemAreaIcon} >
                <View style={TaskItemStyle.getSheet(item.status).taskStatusCheckArea}>
                    {item.status === 2 && 
                        <Image source={require('./assets/images/check.png')} style={TaskItemStyle.getSheet().taskStatusCheck} />
                    }
                </View>
            </View>
            <View style={TaskItemStyle.getSheet().itemArea}>
                <Text style={TaskItemStyle.getSheet().taskText}>{item.task}</Text>
            </View>
            <View style={TaskItemStyle.getSheet().itemAreaIcon}>
                <Image source={require('./assets/images/trash.png')} style={TaskItemStyle.getSheet().taskTrash} />
            </View>
        </View>
    );
}
