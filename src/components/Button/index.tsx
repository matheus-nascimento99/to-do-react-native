import { TouchableHighlight, Text } from "react-native";
import { styles } from './style';

export const Button = () => {
    return (
        <TouchableHighlight style={styles.button} activeOpacity={0.6} underlayColor={'#134C6E'} onPress={()=>{}}>
            <Text style={styles.textButton}>+</Text>
        </TouchableHighlight>
    );
}