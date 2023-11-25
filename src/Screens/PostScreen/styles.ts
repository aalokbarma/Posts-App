import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    postScreen: {
        backgroundColor: '#fbfbfb',
        width:'100%',
        height: '100%',
    },
    contentContainer: {
        display: 'flex',
        padding: 15,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    postContainer: {
        display: 'flex',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#444',
        padding: 15,
        width: '100%',
        height: 'auto',
        maxHeight: '80%',
        marginTop: '10%',
    },
    postTitle: {
        fontSize: 20,
        color: '#1b1b1b',
        fontWeight: '600',
        paddingBottom: 10,
        textAlign: 'center',
    },
    postBody: {
        fontSize: 18,
        color: '#1b1b1b',
        fontWeight: '400',
        textAlign: 'justify',
    },  
    titleContainer: {
        borderBottomColor: '#1b1b1b',
        borderBottomWidth: 1,
        marginBottom: 15,
    },
});

export default Styles;