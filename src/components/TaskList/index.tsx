import { FlatList, Text } from "react-native";

type Tasks = {
    tasks: {
        id: string,
        task: string
    }[]
}

export const TaskList = ({tasks}:Tasks) => {
    return (
        <Text>Olá</Text>
    );
}