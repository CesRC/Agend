import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { NuevaTareaPage } from '../nueva-tarea/nueva-tarea';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/Observable';
import { EditTaskPage } from '../edit-task/edit-task';

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  navEdit= EditTaskPage;

  taskList: Observable<Task[]>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private taskService: TaskService
  ) {
    this.taskList= this.taskService.getTaskList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, 
          ...c.payload.val(),
          }))
        });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }
  
  onLoadNewTask() {
    this.navCtrl.push('NuevaTareaPage');
  }


}