import { Dimensions, StyleSheet } from "react-native";

export const theme = {
    light: '#35748b',
    dark: '#262626',
    text: '#E5E5E5',
}

const {height, width} = Dimensions.get('window')


export const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: theme.light,
    },
    //Screen layout by defualt
    container: {
        flex: 1,
    },
    mainView: {
        width: '100%',
        height: height - 100
    },
    //Items List
    itListView: {
        width: '100%',
        borderTopWidth: 0.1,
        borderBottomWidth: 0.17,
        borderColor: "#000",
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor:'white',
    },
    itListAccountText: {
        fontSize: 16,
        fontWeight: '300',
        paddingVertical: 5,
    },
    itListPasswordText: {
        fontSize: 12,
        fontWeight: '100',
        paddingVertical: 5,
    },
    itListButtonsView: {
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //Flotaing Button
    fltView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 35,
        position:'absolute',
        bottom: 0,
    },
    fltButton: {
        width: 55,
        height: 55,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //Modal to Add new item
    modalView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalRow: {
        width: '100%',
        backgroundColor: 'white',
        opacity: 0.95,
        paddingHorizontal: 15,
        paddingVertical: 35,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //TextInput
    txtInp: {
        width: '85%',
        height: 45,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginVertical: 10,

    },
    txtInpIcon: {
        width: '85%',
        height: 45,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    txtInpViewPass: {
        width: '85%',
        height: 45,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    //Swipeable
    swpView:{
        width: 50,
        height:'100%',
        backgroundColor:'#ea526f',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    //Show Password Modal
    showPassModalTitle:{
        fontSize: 18,
        fontWeight:'300',
    },
    showPassModalPassView:{
        width: '98%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#e0e0e0',
        marginVertical: 10,
        borderRadius: 10,
    },
    showPassModalPassText:{
        fontSize: 14,
        fontWeight: '200',
    },
})