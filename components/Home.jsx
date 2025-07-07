import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <View>
            <Text style={styles.greetingText}>{t('app.title')}</Text>
        </View>
    )
}

export default Home;


// Define styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    greetingText: {
        fontSize: 24,
        textAlign: 'center',
        margin: 10,
        color: '#333333',
    },
});
