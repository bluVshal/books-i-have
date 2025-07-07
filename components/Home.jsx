import { useTranslation } from 'react-i18next';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';
import ListOfBooks from './ListOfBooks';


const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text category='h1'>{t('app.title')}</Text>
            <ListOfBooks />
        </Layout>
    )
}

export default Home;
