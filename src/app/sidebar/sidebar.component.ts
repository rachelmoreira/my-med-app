import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';

//ActivatedRoute utilizado para extrair o nome do componente desejado

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //Variável pagina para escolha do componente utilizado em cada item
  
  public pagina: string | undefined;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor(private observer: BreakpointObserver, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routePageName = this.route.snapshot.url; // O nome da rota (pacientes, sobre, etc)
    if(routePageName.length>0)
    {
      // definida a página, altera a variável para alterar o componente exibido
      this.pagina = routePageName[0].toString();
    }
  }

   ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

}
