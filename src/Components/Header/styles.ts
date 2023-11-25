import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'teal',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fbfbfb',
    },
    backIcon: {
        width: '100%', 
        height: '100%',
        objectFit: 'contain',
        tintColor: "#fbfbfb"
    },
    backIconContainer: {
        width: 35, 
        height: 35,
    },
    emptyView:{
        width: 35, 
        height: 35,
    }
});

export default Styles;