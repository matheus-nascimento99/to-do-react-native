import { StyleSheet } from "react-native";

export default class TaskItemStyle{
    static getSheet(status?:boolean){

        return StyleSheet.create({
                container: {
                    width: '100%',
                    flexDirection: "row",
                    backgroundColor: '#262626',
                    marginBottom: 5,
                    padding:13,
                    borderRadius: 5
                },
                itemAreaIcon: {
                    justifyContent: "center",
                    alignItems: "center",
                    flex:0.15
                },
                itemArea: {
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flex:2,
                    paddingLeft: 10
                },
                taskStatusCheckArea: {
                    width:20,
                    height:20,
                    borderWidth: 1,
                    borderColor: status === true ? '#585ABD' : '#4EA8DE',
                    padding:5,
                    borderRadius: 10,
                    backgroundColor: status === true ? '#585ABD': 'transparent',
                    justifyContent:"center",
                    alignItems: "center"
                },
                taskStatusCheck: {
                    resizeMode:"cover", 
                    width:8, 
                    height:8
                },
                taskText: {
                    color: '#FFF'
                },
                taskTrash: {
                    resizeMode:"cover", 
                    width:18, 
                    height:18
                }
            });

    }
}