/**
 * Created by rv on 17/7/16.
 */
function todoGenerator(){
    var todos = [];
    var todostr = localStorage.getItem('todoData'); // todoData stores the data in local storage
    if( todostr !== null ){
        todos = JSON.parse(todostr);
    }
    return todos ;
}

$('#addButton').click(function(){
    var data = $('#inputArea').val();
    var todos = todoGenerator();
    todos.push(data);
    localStorage.setItem('todoData' , JSON.stringify(todos));
    $('#inputArea').val('');
    show();
});

function show(){
    var todos = [];
    todos = todoGenerator();
    var listStr = '';
    for(var i=0;i<todos.length;i++){
        listStr += '<li><input type="checkbox" id="checkButton">'+ todos[i]+'<button class="removeButton" id="'+i+'" >x</button></li>'
    }

    $('#displayArea').html(listStr);
    remove();
    strike();
}
function remove() {
    $('.removeButton').on('click', function () {
        $(this).parent().remove();
        var i = $(this).attr('id');
        var todostr = [];
        todostr = todoGenerator();
        todostr.splice(i, 1);
        localStorage.setItem('todoData', JSON.stringify(todostr));
        show();
    });
}

function strike(){
    $('ul').on('change','input[type = "checkbox"]',function(){
        $(this).parent().css('text-decoration' , 'line-through');
    })
}

$('document').ready(function(){
    $('#clearall').click(function(){
        localStorage.clear();
        show();
    });
});

strike();
show();