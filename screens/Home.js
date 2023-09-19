import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Button, Layout } from '@ui-kitten/components';



export default function Home({ navigation }) {

    const [number, setNumber] = useState(1);

    const check = () => {
        if (number == 1) {
            console.log("ONE");
        } else if (number == 2) {
            console.log("TWO")
        } else if (number == 3) {
            navigation.push('About')
        }
        setNumber(number + 1)
    }

    return (

        <View style={styles.container}>

            {
                number == 1 ?
                    <Button
                        appearance='outline'
                        onPress={() => check()}
                        status = 'primary'
                    >

                        <Text>Click me!!</Text>
                    </Button>
                    :
                number == 2 ?
                    <Button
                        appearance='outline'
                        onPress={() => check()}
                        status='success'
                    >

                        <Text>Click me!!</Text>
                    </Button>
                    :
                    <Button
                        appearance='outline'
                        onPress={() => check()}
                        status='warning'
                    >

                        <Text>Click me!!</Text>
                    </Button>
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});
