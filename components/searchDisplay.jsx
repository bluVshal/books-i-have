import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout } from '@ui-kitten/components';
import myData from '../data/data.json';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SearchDisplay = () => {

    useEffect(() => {
        searchBook();
    }, [bookSearchTitle]);

    const { t, i18n } = useTranslation();
    const [bookSearchTitle, setBookSearchTitle] = useState('');
    const [bookSearchAuthor, setBookSearchAuthor] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(myData);

    const searchPressed = () => {
        if (bookSearchTitle.length > 0 && bookSearchAuthor === "") {
            searchBook();
        }
        else if (bookSearchAuthor.length > 0 && bookSearchTitle === "") {
            searchAuthor();
        }
        else {
            showAlert();
        }
    };

    const searchBook = () => {
        const lowercasedSearchText = bookSearchTitle.toLowerCase();
        if (bookSearchTitle.length > 0) {
            const foundItem = myData.filter((item) => {
                return item.bookName.toLowerCase().includes(lowercasedSearchText)
            });
            setFilteredBooks(foundItem);
        }
    };
    const searchAuthor = () => {
        const lowercasedSearchText = bookSearchAuthor.toLowerCase();
        if (bookSearchAuthor.length > 0) {
            const foundItem = myData.filter((item) => {
                return item.author.toLowerCase().includes(lowercasedSearchText)
            });
            setFilteredBooks(foundItem);
        }
    };
    const showAlert = () => {
        Alert.alert(
            t('app.titles.error'),
            t('app.messages.emptyTextError'),
            [
                {
                    text: "OK",
                    style: "cancel"
                }
            ],
            { cancelable: true }
        );
    };


    const resetAll = () => {
        setBookSearchTitle('');
        setBookSearchAuthor('');
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
                <View>
                    <Input placeholder='Enter Book Title:'
                        style={styles.inputBox}
                        value={bookSearchTitle}
                        onChangeText={nextValue => setBookSearchTitle(nextValue)}
                    />
                    <Input placeholder='Enter Author:'
                        style={styles.inputBox}
                        value={bookSearchAuthor}
                        onChangeText={nextValue => setBookSearchAuthor(nextValue)}
                    />
                </View>
                <View>
                    <Button
                        style={styles.button}
                        status='info'
                    >
                        <Icon.Button
                            name="search"
                            backgroundColor="#3b5998"
                            onPress={() => searchPressed()}
                        >
                        </Icon.Button>
                    </Button>
                    <Button
                        style={styles.button}
                        appearance='outline'
                        status='primary'
                    >
                        <Icon.Button
                            name="remove"
                            backgroundColor="#3b5998"
                            width="70%"
                            onPress={() => resetAll()}
                        >
                        </Icon.Button>
                    </Button>
                </View>
            </View>
            <View
                style={styles.listContainer}
            >
                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item.bookId.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.bookItem}>
                            <Text>  {item.bookName.toUpperCase()}</Text>
                            <Text>  {item.author}</Text>
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
        marginTop: 15,
        width: '50%'
    },
    bookItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    button: {
        margin: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    controlContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'center',
        backgroundColor: "#FAFAFA",
        marginTop: 13,
        marginLeft: -1,
    },
    listContainer: {
        height: 400,
        width: "86%",
        backgroundColor: "#FAFAFA",
        margin: "5%"
    }
});
