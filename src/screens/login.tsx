import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View>














        <View>
            <View>
            <Text>Hello World</Text>
            <Text>This is the first page of your app.</Text>
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Details', { name: 'Dan' })}>
            <Text>Show Details</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    }

});
