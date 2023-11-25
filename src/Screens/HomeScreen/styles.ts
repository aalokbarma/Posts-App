import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
    },
    searchbarContainer: {
        width: '100%',
        padding: 15,
    },
    searchbar: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    searchIcon :{
        width: 25,
        height: 25,
        objectFit: 'contain',
        marginRight: 15,
        tintColor: "#666",
    },
    searchInput: {
        fontSize: 18,
        letterSpacing: 0.5,
        color: 'teal',
        fontWeight: '500',
    },
    createPostButton: {
        position: 'absolute',
        bottom: 50,
        right: 30,
        backgroundColor: 'teal',
        width: 65,
        height: 65,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    createText: {
        fontSize: 40,
        color: '#fbfbfb',

    }

});

export default Styles;