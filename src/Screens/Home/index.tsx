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

    const [tasks, setTask] = useState<Task[]>([{id: uuid(), task: 'Acampar'}, {id: uuid(), task: 'Viajar'}, {id: uuid(), task: 'Estudar'}]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSubContainer}>
                <Logo />
            </View>
            <View style={styles.secondSubContainer}>
                <StatusArea />
            </View>
            <Input />
            <TaskList tasks={tasks} />
        </SafeAreaView>
    );
}

export default Home;