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

    const [tasks, setTask] = useState<Task[]>([]);

    const handleAdd = (item:string) => {
        setTask(prevState => [...prevState, {
            id: uuid(),
            task: item,
            status: false
        }]);
    }

    const handleChangeStatus = (index:number) => {
        setTask((prevState) => {
            let newItems = [...prevState];
            newItems[index].status = !newItems[index].status;
            return newItems;
        })
    }

    const handleRemove = (id:string) => {
        setTask(prevState => prevState.filter(item => item.id != id))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.firstSubContainer}>
                <Logo />
            </View>
            <View style={styles.secondSubContainer}>
                <StatusArea createdies={tasks.length} finishedies={tasks.filter((item)=>item.status === true).length}/>
                <TaskList onChangeStatus={handleChangeStatus} onRemove={handleRemove} tasks={tasks} />
            </View>
            <Input onAdd={handleAdd} />
        </SafeAreaView>
    );
}

export default Home;