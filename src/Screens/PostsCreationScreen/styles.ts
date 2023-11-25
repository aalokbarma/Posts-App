import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    postsCreationScreen: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fbfbfb',
    },
    postCreationFormContainer: {
        padding: 15,

    },
    postCreationForm: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    inputContainer: {
        width: '100%',
        height: 'auto',
        marginVertical: 15,
    },
    inputLableContainer: {

    },
    inputText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'teal',
    },
    inputFieldContainer: {
        paddingBottom: 15,
        paddingTop: 5,
    },
    inputField: {
        fontSize: 16,
        borderBottomColor: 'teal',
        borderBottomWidth: 1,
        color: 'teal',
        paddingBottom: 5,
    },
    submitButtonContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '15%',
        marginBottom: 25,
    },
    submitButton: {
        width: '70%',
        backgroundColor: 'teal',
        padding: 15,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fbfbfb',
    },

});

export default Styles;