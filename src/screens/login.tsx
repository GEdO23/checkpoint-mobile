import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';
import { Button, Icon } from 'react-native-paper';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
    const navigation = useNavigation<OverviewScreenNavigationProps>();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Log In</Text>

            <View style={{marginBottom: 32}}>
                <View style={{display: 'flex', gap: 16, marginBottom: 24}}>
                    <View style={styles.inputContainer}>
                        <Image source={require('assets/email.png')}/>
                        <TextInput placeholder='Your email' />
                    </View> 

                    <View style={styles.inputContainer}>
                        <Image source={require('assets/key.png')}/>
                        <TextInput placeholder='Password' />
                    </View>
                    
                </View>
                
                <Button mode='contained' style={styles.button}>Log In</Button>
                
                <Text style={[styles.info, {marginTop: 16, textAlign: 'right'}]}>Forgot password?</Text>

            </View>
            

            <View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20}}>
                    <View style={styles.line} />
                    <Text style={{fontSize: 14, fontWeight: '500', color: '#969AB8'}}>or</Text>
                    <View style={styles.line} />

                </View>

                <View style={{display: 'flex', flexDirection: 'row', gap: 20, marginTop: 20}}>
                    <View style={styles.enterWithButton}>
                        <Image source={require('assets/google.png')}/>
                        <Text style={styles.enterWithText}>Google</Text>
                    </View>

                    <View style={styles.enterWithButton}>
                        <Image source={require('assets/facebook.png')}/>
                        <Text style={styles.enterWithText}>Facebook</Text>
                    </View>

                </View>

            </View>
            
            <View style={{display: 'flex', flexDirection: 'row', gap: 8, marginTop: 40}}>
                <Text style={{fontSize: 15, fontWeight: '400', color: '#969AB8'}}>Don't have an account?</Text>
                <Text style={styles.info}>Sign Up</Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1, justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 19
    },
    title: {
        fontSize: 30, fontWeight: '600', color: '#171725',
        marginBottom: 40
    },
    button: {
        fontSize: 15, fontWeight: '600', color: '#FFF',
        backgroundColor: '#0062FF',
        borderRadius: 8,
        paddingVertical: 4
    },
    inputContainer: {
        borderWidth: 1.6, borderColor: '#E0E2E9', borderRadius: 8,
        paddingVertical: 8, paddingHorizontal: 20,
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16,
        fontSize: 14, fontWeight: '500', color: '#969AB8'
        
    },
    info: {
        fontSize: 15, fontWeight: '600', color: '#0062FF'
    },
    line: {
        height: 1, flexGrow: 1,
        backgroundColor: '#000'
    },
    enterWithButton: {
        paddingVertical: 8, paddingHorizontal: 20, 
        borderWidth: 1.6, borderColor: '#E0E2E9', borderRadius: 8, 
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 15,
        flexGrow: 1
    },
    enterWithText: {
        fontSize: 14, fontWeight: '600', color: '#171725'
    }

});
