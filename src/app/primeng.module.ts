import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        ToolbarModule,
        TooltipModule,
        MenuModule,
    ],
    exports: [
        TableModule,
        ButtonModule,
        ToolbarModule,
        TooltipModule,
        MenuModule
    ],
})
export class PrimeNgModule {

}