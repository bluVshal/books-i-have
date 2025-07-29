import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';
import SearchDisplay from './searchDisplay';
import BookEntry from './bookEntry';


const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h3'>{t('app.title')}</Text>
            <View style={styles.listContainer}>
                <BookEntry />
                <SearchDisplay />
            </View>
        </Layout>
    )
}

export default Home;

const styles = StyleSheet.create({
    listContainer: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
