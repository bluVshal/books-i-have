import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
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
