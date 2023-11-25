import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    postCard: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    postCardContainer: {
        padding: 10,
        borderColor: "#444",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '100%',
    },
    cardTitle: {
        fontSize: 20,
        color: '#1b1b1b',
        fontWeight: '600',
        width: '100%',
    },
    cardBody: {
        fontSize: 16,
        color: '#333',
        fontWeight: '400',
        width: '100%',
    }
});

export default Styles;