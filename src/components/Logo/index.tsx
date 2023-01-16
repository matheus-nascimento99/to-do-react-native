import { Text, View, Image } from "react-native";
import { styles } from "./style";

export const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.firstPartLogo}>to</Text><Text style={styles.lastPartLogo}>do</Text>
        </View>
    );
}