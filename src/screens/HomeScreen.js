import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontSize } from '../utils/FontSize';
import { Colors } from '../utils/Colors';
import { FontType } from '../utils/FontType';

function HomeScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.loadingText}>Carregando, por favor, aguarde...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    loadingText: {
        fontFamily: FontType.mainTopic,
        fontSize: FontSize.large,
        color: Colors.primary,
    },
});

export default HomeScreen;
