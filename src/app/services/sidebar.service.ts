import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'Gráficas', url: 'chart1' },
        { title: 'Rxjs', url: 'rxjs' },
      ]
    }
  ]

  constructor() { }
}
