'use strict'

const toDoList = {
  task:[],
  dopid:1,
  addTask: function(title,priority){
  const task = {
    title:title,
    id:this.dopid++,
    priority:priority,
  };
  return this.task.push (task)
  },
  remove:function(id){
    return this.task = this.task.filter (el =>  el.id !== id);
  },
  update: function(id,title,priority){
  const updateTask = this.task.find(el => el.id == id);
  if (title !== undefined){
    updateTask.title = title;
  }
  if (priority !== undefined){
    updateTask.priority = priority;
  }
  },
  sort: function(){
   this.task.sort((el,elSecond)=> el.priority - elSecond.priority).reverse()
  },
  descriptionTask (title,priority,description){
  const newTask = {
    title:title,
    id:this.dopid++,
    priority:priority,
    description:description,
  };
  this.task.push(newTask);
  }
}

toDoList.addTask(`Доделать задачу`, 5);
toDoList.addTask(`Поесть`, 4);
toDoList.addTask(`Сходить в зал`, 2);
toDoList.addTask(`Еще раз посмотреть материал по обьектам`, 10);
toDoList.update(2,`ничего не делать`,3);
toDoList.descriptionTask(`Найти переводчика`, 9, `Он должен знать японский, и английский`)
toDoList.sort()
console.log (toDoList.task)

