import {Task} from "../models/task.model"
export class TaskService{
    
    private tasks: Task []=
    [{"evento": "Examen DyEPI", "fecha": "12 de Abril de 2018", "lugar": "UC3M", "prioridad":"Alta"},
    {"evento": "Examen DyEPI", "fecha": "12 de Abril de 2018", "lugar": "UC3M", "prioridad":"Alta"}];
    
    constructor(){
    }

    addTask(tarea: Task){
        this.tasks.push(tarea);
    }

    getTask(){
        return this.tasks;
    }



}