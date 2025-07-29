import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';
import EnterNewBook from './enterNewBook';

const BookEntry = () => {
    const { t, i18n } = useTranslation();

    return (
        <View>
            <EnterNewBook />
        </View>
    )
}

export default BookEntry;
