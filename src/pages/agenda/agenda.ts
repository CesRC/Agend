import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { NuevaTareaPage } from '../nueva-tarea/nueva-tarea';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  tasks: Task []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private TaskService: TaskService, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }
  onLoadNewTask() {
    this.navCtrl.push(NuevaTareaPage);
  }
  ionViewWillEnter(){
    this.tasks= this.TaskService.getTask();
  }

  openActionSheetController(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Acciones',
      buttons: [
        {
          text: 'Modificar',
          icon: "add-circle",
          cssClass: 'EditIcon',
          handler: () => {
            console.log('Modificar clicked');
          }
        },
        {
          text: 'Delete',
          icon: "remove-circle",
          cssClass: 'EditIcon2',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancelar',
          //role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();    
  }

}
