/**
 * Created by rv on 15/7/16.
 */

var todos = [];

function addList(){
    var data = $('#inputArea').val();
    todos.push(data);
    console.log(data);
}