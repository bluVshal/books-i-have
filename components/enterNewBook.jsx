import React, { useState } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Input, Layout } from '@ui-kitten/components';
import myData from '../data/data.json';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const EnterNewBook = () => {

    const { t, i18n } = useTranslation();
    const [bookSearchTitle, setBookSearchTitle] = useState('');
    const [bookSearchAuthor, setBookSearchAuthor] = useState('');

    const enterPressed = () => {
        searchIfExists();
    };

    const searchIfExists = () => {
         const lowercasedSearchText = bookSearchTitle.toLowerCase();
        if (bookSearchTitle.length > 0) {
            const foundItem = myData.filter((item) => {
                return item.bookName.toLowerCase().includes(lowercasedSearchText)
            });
            if(Object.keys(foundItem).length > 0){
                showAlert(t('app.messages.bookAlreadyExistsError'))
            }
        }
    };

     const showAlert = (errMsg) => {
            Alert.alert(
                t('app.titles.error'),
                errMsg,
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
    };

    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <View
                style={styles.controlContainer}
            >
                <View
                    style={styles.txtContainer}
                >
                    <Input placeholder='Book Title'
                        style={styles.inputBox}
                        value={bookSearchTitle}
                        onChangeText={nextValue => setBookSearchTitle(nextValue)}
                    />
                    <Input placeholder='Author'
                        style={styles.inputBox}
                        value={bookSearchAuthor}
                        onChangeText={nextValue => setBookSearchAuthor(nextValue)}
                    />
                </View>
                <View
                    style={styles.btnContainer}
                >
                    <Icon.Button
                        style={styles.button}
                        name="search"
                        backgroundColor="#5D5A59"
                        color="#FFFFF0"
                        onPress={() => enterPressed()}
                    >
                    </Icon.Button>

                    <View style={{ width: 10 }} />

                    <Icon.Button
                        style={styles.button}
                        name="remove"
                        backgroundColor="#3b5998"
                        onPress={() => resetAll()}
                    >
                    </Icon.Button>

                </View>
            </View>
        </Layout>
    )
}

export default EnterNewBook;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',        
        backgroundColor: "#758F8A"
    },
    inputBox: {
        marginTop: 15,
        marginLeft: 12,
        width: '50%'
    },
    button: {
        marginLeft: 10,
        marginBottom: 5,
        width: 50,
        height: 50
    },
    controlContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: "86%",
        justifyContent: 'center',        
        backgroundColor: "#8CA29E",
        margin: "5%",
        marginLeft:'6.5%',
        borderWidth: 1,
        borderRadius: 20,
    },
    txtContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        marginBottom: '10%',
    },
    btnContainer: {
        flexDirection: 'row',
        marginLeft: 13,
        marginBottom: 10
    }
});
