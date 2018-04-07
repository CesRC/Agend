import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
/**
 * Generated class for the NuevaTareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
           ]
})
@IonicPage()
@Component({
  selector: 'page-nueva-tarea',
  templateUrl: 'nueva-tarea.html',
})
export class NuevaTareaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TaskService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevaTareaPage');
  }
  onAddTask(value: Task){
    this.taskService.addTask (value);
    this.navCtrl.pop();

  }

}
