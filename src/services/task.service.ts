import {Task} from "../models/task.model"
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class TaskService{
    
    private taskListRef = this.db.list<Task>('task');
    
    constructor(private db: AngularFireDatabase){
    }

    getTaskList(){
        return this.taskListRef;
    }

    addTask (task: Task){
        return this.taskListRef.push(task);
    }

    editTask (task: Task){
        return this.taskListRef.update(task.key, task);
    }

    removeTask (task: Task){
        return this.taskListRef.remove(task.key);
    }



}