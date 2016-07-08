add = function(){
  var inputItem = document.getElementById('inputarea').value;
  var todos = todolist();
  todos.push(inputItem);
  localStorage.setItem('todo',JSON.stringify(todos));
  show();
}
todolist = function(){
  var todos = [];
  var todostr = localStorage.getItem('todo');
  if(todostr !== null){
    todos = JSON.parse(todostr);
  }
  return todos;
}
show = function(){
  var todos = [];
  todos = todolist();
  var todoitems = '';
  for(var i=0; i<todos.length; i++){
    todoitems += '<li>' + todos[i] +'&nbsp'+'&nbsp'+ '<button class="remove" id="'+i+'">Done</button></li>';
  }
  document.getElementById('ulList').innerHTML = todoitems;

  var button = document.getElementsByClassName('remove');
  for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',removeFunc);
  }
}
removeFunc = function(){
  var id=this.getAttribute('id');
  var todos = todolist();
  todos.splice(id,1);//1 is to remove and id is the index
  localStorage.setItem('todo',JSON.stringify(todos));
  show();
}
show();
