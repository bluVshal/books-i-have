import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout } from '@ui-kitten/components';
import myData from '../data/data.json';


const ListOfBooks = () => {

    useEffect(() => {
       searchBook();
    }, [bookSearchTitle]);

    const { t, i18n } = useTranslation();
    const [bookSearchTitle, setBookSearchTitle] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(myData);

    const searchBook = () => {
        const lowercasedSearchText = bookSearchTitle.toLowerCase();
        if (bookSearchTitle.length > 0) {
            const foundItem = myData.filter((item) => {
               return item.bookName.toLowerCase().includes(lowercasedSearchText)
            });
            setFilteredBooks(foundItem);
        }
    };

    const resetAll = () => {
        setBookSearchTitle('');
        setFilteredBooks(myData);
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
                    onPress={() => resetAll()}
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
            <View>
                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item.bookId.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.bookItem}>
                            <Text>{item.bookName}</Text>
                            <Text>{item.author}</Text>
                        </View>
                    )}
                />
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
    bookItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
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
