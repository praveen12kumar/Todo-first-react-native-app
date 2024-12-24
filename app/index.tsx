import { View, StyleSheet, TextInput } from "react-native"
import { TodoItem } from "./todoItem/TodoItem"
import { theme } from "./theme"
import { useState } from "react";

type TodoItem = {
    todoValue:string,
    isCompleted?:boolean,
} 

export default function HomeScreen(){

    const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<TodoItem[]>([]);

    function handleChange(text:string){
        setTodo(text);
    }
    function handleSubmit(){
        //console.log("submitted", todo);
        setTodoList([...todoList, {
            todoValue: todo,
            isCompleted: false
        }])
        setTodo("")
    }

    function handleTodoComplete(todoIndex:number){
        const newTodoList = todoList.map((currentTodo, index)=>{
            if(index === todoIndex){
                return{
                    ...currentTodo, 
                    isCompleted: !currentTodo.isCompleted
                }
            }
            return currentTodo;
        });
        setTodoList(newTodoList);
    }

    return(
        <View style={styles.container}>
            <TextInput 
                placeholder="Enter a new todo..." 
                style={styles.textInput}
                onChangeText={handleChange}
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
                value={todo}
                />
            {
                todoList?.map((currentTodo, index)=>{
                    return <TodoItem 
                        todoValue={currentTodo.todoValue}
                        isCompleted={currentTodo.isCompleted} 
                        key={index} 
                        markComplete={() => handleTodoComplete(index)}
                        />
                })
            }

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.lightGray,
        justifyContent:"center",
        flex:1
        
    },
    textInput : {
        borderWidth:1,
        borderColor:theme.lightBlue,
        padding:12,
        borderRadius:40,
        marginHorizontal:10,
        fontSize:20
    }
})