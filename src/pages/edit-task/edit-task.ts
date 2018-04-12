import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { ToastService } from '../../services/toast-service';
import { AgendaPage } from '../agenda/agenda';
import { BrowserModule } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-edit-task',
  templateUrl: 'edit-task.html',
})
export class EditTaskPage {

  task: Task = {
    evento: '',
    fecha: '',
    lugar: '',
    prioridad: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TaskService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    this.task = this.navParams.get('task');
  }


  saveTask(task: Task){
    this.taskService.editTask(task).then (() => {
       this.toast.show(`${task.evento} saved!`);
       this.navCtrl.setRoot(AgendaPage);
     })
  }

  removeTask(task: Task){
    this.taskService.removeTask(task).then (() => {
      this.toast.show(`${task.evento} deleted!`);
      this.navCtrl.setRoot(AgendaPage);
    })
  }

}
