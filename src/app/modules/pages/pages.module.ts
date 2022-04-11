import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { PagesComponent } from './pages.component';
import { pagesRoutesModule } from './pages.routes.module';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesRoutesModule)],
  declarations: [PagesComponent, FooterComponent, HeaderComponent],
})
export class PagesModule {}
