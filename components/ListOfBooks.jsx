import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout } from '@ui-kitten/components';
import myData from '../data/data.json';


const ListOfBooks = () => {
    const { t, i18n } = useTranslation();
    const [bookSearchTitle, setBookSearchTitle] = useState('');

    const searchBook = () => {
        if(bookSearchTitle.length > 0 ) {
            const foundItem = myData.filter(item => {

            });
            console.log(foundItem);
        }
    };

    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <View
                style={styles.container}
            >
                <Input placeholder='Enter book title'
                    value={bookSearchTitle}
                    onChangeText={nextValue => setBookSearchTitle(nextValue)}
                />
                <Button
                    style={styles.button}
                    status='info'
                    onPress={() => searchBook()}
                >
                    {t('app.buttons.search').toUpperCase()}
                </Button>
                <Button
                    style={styles.button}
                    appearance='outline'
                    status='primary'
                    onPress={() => setBookSearchTitle('')}
                >
                    {t('app.buttons.reset').toUpperCase()}
                </Button>
            </View>
            <View>
                <Text>{t('app.titles.bookTitle').toUpperCase()}</Text>
                {myData.map((item) => (
                    <Text key={item.bookId}>{item.bookName}</Text>
                ))}
            </View>
        </Layout>
    )
}

export default ListOfBooks;


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
    listContainer: {
        maxHeight: 200,
    }
});
