import { Component } from '@angular/core';
import { IonHeader, IonNav, IonTitle, IonContent, IonButtons, 
  IonButton, IonList, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonToolbar } from '@ionic/angular/standalone';
import { NgFor, NgClass } from '@angular/common';
import { Task } from './task';
import { takeLast } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { MiModalPage } from '../mi-modal/mi-modal.page'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonNav, IonTitle, IonContent, IonIcon, 
    IonButtons, IonButton, IonList, IonItem, NgFor, NgClass, IonItemSliding, IonItemOptions, IonItemOption, IonToolbar],
})
export class HomePage {
  tasks: Array<Task> = [];

  constructor(private modalController: ModalController) {
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Syrup', status: 'open' },
      { title: 'Pancake Mix', status: 'open' }
    ];
  }

  addItem() {
    let theNewTask: string | null = prompt("New Task");
    if (theNewTask !== '' && theNewTask !== null) {
      this.tasks.push({ title: theNewTask, status: 'open' });
    }
  }

  markAsDone(slidingItem: IonItemSliding, task: Task) {
    task.status = "done";

    setTimeout(() => { slidingItem.close(); }, 1);
  }

  removeTask(slidingItem: IonItemSliding, task: Task) {
    task.status = "removed";
    let index = this.tasks.indexOf(task);
    if (index != -1) {
      this.tasks.splice(index, 1);
    }

    setTimeout(() => { slidingItem.close(); }, 1);
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: MiModalPage,
      componentProps: {
        tareas: this.tasks,
      }
    });

    await modal.present();
  }
}
