import { useState } from 'react'
import React from 'react'
import Task from './task'
import Donetask from './Donetask'

type TaskData = {
  id: number;
  name: string;
}

type doneTaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [donetasks, setdoneTasks] = useState<doneTaskData[]>([])

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.code == 'Enter') addTask(curTask)
  }

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }

  const addTask = (taskName: string) => {
    if(taskName === '') alert("Hello! Task can not be empty")
    else{
      //use date.getTime() to get unique numeric id (https://www.w3schools.com/jsref/jsref_gettime.asp)
      const newId = (new Date()).getTime()
  
      // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
      // spread syntax [...array] (https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
      const newTasks = [...tasks, { id: newId, name: taskName }]
  
      setTasks(newTasks)}
  }

  const doneTask = (id: number) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    //  สร้าง taskทุกตัวที่ไม่ใช่ id นี้
    var newList = tasks
    const task = newList[newList.findIndex(x => x.id === id)];
    const newId = (new Date()).getTime()
    const newdoneTasks = [...donetasks,{ id: newId, name: task.name }]
    setdoneTasks(newdoneTasks)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  const deleteTask = (id: number) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    //  สร้าง taskทุกตัวที่ไม่ใช่ id นี้
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  return (
    <div>
      <div className='flex space-x-1'>
        <input className='border border-gray-400 w-full text-2xl'
          onChange={onChangeCallback}
          onKeyDown={onKeyDownCallback}></input>
        <button className='border border-gray-400 w-8 font-bold' onClick={() => addTask(curTask)}>+</button>
      </div>
      <div className='flex flex-col-reverse'>
        {tasks.map(x => <Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask} />)}
        </div>
        <div className='flex flex-col-reverse'>
        {donetasks.map(x => <Donetask id={x.id} name={x.name} />)}
        </div>
    </div>
  )
}

export default TodoList