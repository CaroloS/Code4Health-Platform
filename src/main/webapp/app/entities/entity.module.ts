import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OperonCloudPlatformOperinoModule } from './operino/operino.module';
import { OperonCloudPlatformOperinoComponentModule } from './operino-component/operino-component.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OperonCloudPlatformOperinoModule,
        OperonCloudPlatformOperinoComponentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OperonCloudPlatformEntityModule {}
