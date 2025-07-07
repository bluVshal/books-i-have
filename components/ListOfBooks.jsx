import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button, Input, Layout } from '@ui-kitten/components';
import { Divider, List, ListItem } from '@ui-kitten/components';
import myData from '../data/data.json';


const readJsonFile = async () => {

};

const ListOfBooks = () => {
    console.log(myData);
    useEffect(() => {
        readJsonFile()
    }, []);

    const { t, i18n } = useTranslation();
    const [bookTitle, setBookTitle] = useState('');

    const renderItem = ({ item, index }) => (
        <ListItem
            title={`${item.bookName} ${index + 1}`}
            description={`${item.author} ${index + 1}`}
        />
    );

    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <View
                style={styles.container}
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
                <Button 
                    style={styles.button} 
                    appearance='outline'
                    status='primary'
                    onPress={()=> setBookTitle('')}
                >
                    {t('app.buttons.reset').toUpperCase()}
                </Button>
            </View>
            <View>
                <List
                    style={styles.listContainer}
                    data={myData}
                    ItemSeparatorComponent={Divider}
                    renderItem={renderItem}
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
