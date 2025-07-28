import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';
import SearchDisplay from './searchDisplay';


const BookEntry = () => {
    const { t, i18n } = useTranslation();

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>{t('app.title')}</Text>
            <View style={styles.listContainer}>
                <SearchDisplay />
            </View>
        </Layout>
    )
}

export default BookEntry;

const styles = StyleSheet.create({
    listContainer : {
       margin : 10
    }
});
