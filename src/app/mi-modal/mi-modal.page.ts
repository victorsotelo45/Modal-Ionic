import { Component  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonButton, IonContent, IonHeader, IonTitle, IonCard, IonToolbar } from '@ionic/angular/standalone';
import { Task } from '../home/task';

@Component({
  selector: 'app-mi-modal',
  templateUrl: 'mi-modal.page.html',
  styleUrls: ['mi-modal.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonButton, IonContent, IonCard, IonToolbar],
})
export class MiModalPage {
  detalles: string = "Esta práctica de Ionic-Angular ilustra la implementación de un CRUD para gestionar tareas.";
  constructor(private modalController: ModalController) {
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}