import React from "react";
import ReactDOM from "react-dom";

const Header=() => {
    return(
    <div> 
    <table border = 'my details'>
    <tr>
       <th width="5%" >details</th>
      <th width="5%">deadline</th>
      <th width="5%">isImportant</th>
      <th width="5%">done?</th>
    </tr>
    <tr>
       <td></td>
    </tr>

    </table> 
    </div>)
    }



const Line =(props) =>{
    return(
        <div>
        <table border = 'myTasks'>
    <tr>
        <th width="12%">{props.line.details}</th>
        <th width="10%">{props.line.deadline}</th>
        <th width="5%">{props.line.isImportant}</th>
        <th width="5%">{props.line.isDone}</th>
    </tr>
    </table> 
    </div>)
}

const Todo =(props) =>{

    return(
        props.myTasks.map(line =><Line  line={line}/>)
    )
   
}

const App = () => {
    const myTasks = [
        {
            details: "Math",
            deadline: "3/1/20",
            isImportant: "important",
            isDone: "no"
        },
        {
            details: "History",
            deadline: "5/1/20",
            isImportant: "not important",
            isDone: "done"
        },
        {
            details: "Grammar",
            deadline: "10/1/20",
            isImportant: "important",
            isDone: "done"
        },
        {
            details: "English",
            deadline: "21/1/20",
            isImportant: "not important",
            isDone: "no"
        },
        {
            details: "Sciences",
            deadline: "23/1/20",
            isImportant: "important",
            isDone: "no"
        },
        
    ];
    return (
        <div style={{margin:'10%'}}>
        <br/>
        <br/>
            <h1>My details</h1>
            <br/>
            <Header/>
            <Todo myTasks={myTasks}/>
       
        </div>
   
    );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
