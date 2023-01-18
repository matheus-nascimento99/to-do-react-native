import { TouchableHighlight, Text } from "react-native";
import { styles } from './style';

interface ButtonType {
    onPress: () => void
}

export const Button = ({onPress}:ButtonType) => {

    return (
        <TouchableHighlight style={styles.button} activeOpacity={0.6} underlayColor={'#134C6E'} onPress={()=>{onPress()}}>
            <Text style={styles.textButton}>+</Text>
        </TouchableHighlight>
    );
}