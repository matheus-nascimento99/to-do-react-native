import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./style";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { StatusArea } from "../../components/StatusArea";
import { TaskList } from "../../components/TaskList";
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { useState } from "react";
import { Task } from "../../types/Task";

const Home = () => {

    const [tasks, setTask] = useState<Task[]>([{id: uuid(), task: 'Acampar', status: 1}, {id: uuid(), task: 'Viajar', status: 1}, {id: uuid(), task: 'Estudar', status: 2}]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSubContainer}>
                <Logo />
            </View>
            <View style={styles.secondSubContainer}>
                <StatusArea createdies={tasks.length} finishedies={tasks.filter((item)=>item.status===2).length}/>
                <TaskList tasks={tasks} />
            </View>
            <Input />
        </SafeAreaView>
    );
}

export default Home;