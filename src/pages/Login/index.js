import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Login = () => {
    const [showEye, setShowEye] = useState(false);

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Lobster_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.container}>
                    <Text style={styles.textInstaDev}>InstaDev</Text>

                    <View style={styles.containerInput}>
                        <TextInput
                            placeholder='Digite seu email'
                            style={styles.Input}
                        />
                    </View>

                    <View style={styles.containerInput}>
                        <TextInput
                            placeholder='Senha'
                            secureTextEntry={true}
                            style={styles.Input}
                        />
                    </View>

                    <TouchableOpacity style={styles.buttom} onPress={() => {}}>
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line}></View>
                <TouchableOpacity style={{padding: 10}} onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={styles.textSignUp}>Ainda não tem cadastro? <Text style={[styles.textSignUp, { fontWeight: 'bold'}]}>Cadastre-se aqui!</Text></Text>
                </TouchableOpacity>
            </View>
        );
    }



}

export default Login;