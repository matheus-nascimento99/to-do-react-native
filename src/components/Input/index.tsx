import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "./style";
import { Button } from "../Button";
import { useState } from "react";

interface InputType {
    onAdd: (task:string) => void
}

export const Input = ({onAdd}:InputType) => {

    const [task, setTask] = useState('');

    const handleSubmit = () => {
        if(task.trim() != ''){
            onAdd(task);
        }else{
            Alert.alert('Aviso', 'Preencha o campo antes de enviá-lo.')
        }

        setTask('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={'#808080'}
                style={styles.input}
                value={task}
                onChangeText={e=>setTask(e)}
            />
            <Button onPress={handleSubmit} />
        </View>
    );
}