import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout } from '@ui-kitten/components';
import myData from '../data/data.json';


const SearchDisplay = () => {

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
                style={styles.controlContainer}
            >
                <Input placeholder='Enter book title'
                    style={styles.inputBox}
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
            <View
                style={styles.listContainer}
            >
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

export default SearchDisplay;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    inputBox: {
        marginTop: 2.5,
        width: '40%'
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
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'center',
        backgroundColor: "#FAFAFA",
        marginTop: 13,
        marginLeft: -15,
    },
    listContainer: {
        height: 400,
        width: "86%",
        backgroundColor: "#FAFAFA",
        margin: "5%"
    }
});
