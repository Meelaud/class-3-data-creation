import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';
import { Card, Text } from '@ui-kitten/components';


export default function About({ navigation }) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started")
        setData(bookStore)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the dashboard</Text>
            <Button title="show data" onPress={() => addingData()}/>
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == "java") {

                        return (
                            <View key={index}>
                                <Card >
                                <Text style={styles.title}>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {

                                        return (
                                            <View key={ind}>
                                                <Text>{a}</Text>
                                            </View>
                                        )

                                    })
                                }
                                </Card>
                            </View>
                        )

                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 30
    },
    title: {
       fontSize: 25,
    }
});
