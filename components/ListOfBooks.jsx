import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout } from '@ui-kitten/components';

const ListOfBooks = () => {
    const { t, i18n } = useTranslation();
    const [bookTitle, setBookTitle] = useState('');

    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <Input placeholder='Enter book title'
                value={bookTitle}
                onChangeText={nextValue => setBookTitle(nextValue)}
            />
            <Button
                style={styles.button}
                status='info'
            >
                {t('app.buttons.search').toUpperCase()}
            </Button>
        </Layout>
    )
}

export default ListOfBooks;

;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
    controlContainer: {
        borderRadius: 4,
        margin: 2,
        padding: 6,
        justifyContent: 'center',
        backgroundColor: '#3366FF',
    },
});
