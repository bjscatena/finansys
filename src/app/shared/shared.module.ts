import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [CommonModule, ReactiveFormsModule, BreadCrumbComponent]
})
export class SharedModule {}
