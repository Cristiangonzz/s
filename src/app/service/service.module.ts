import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialService } from './HistorialService';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[HistorialService]
})
export class ServiceModule { }
