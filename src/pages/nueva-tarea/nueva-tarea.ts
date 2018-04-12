import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { AgendaPage } from '../agenda/agenda';
import { ToastService } from '../../services/toast-service';

@IonicPage()
@Component({
  selector: 'page-nueva-tarea',
  templateUrl: 'nueva-tarea.html',
})
export class NuevaTareaPage {

  task: Task = {
    evento: '',
    fecha: '',
    lugar: '',
    prioridad: ''
  };

  constructor(public navCtrl: NavController, private navParams: NavParams, private taskService: TaskService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaTareaPage');
  }

  addTask (task: Task){
    this.taskService.addTask(task).then(ref => {
      this.toast.show(`${task.evento} created!`);
      this.navCtrl.setRoot('AgendaPage', {key: ref.key});
    })
  }

}
