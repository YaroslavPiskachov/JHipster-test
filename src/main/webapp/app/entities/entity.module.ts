import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterTestRegionModule } from './region/region.module';
import { JhipsterTestCountryModule } from './country/country.module';
import { JhipsterTestLocationModule } from './location/location.module';
import { JhipsterTestDepartmentModule } from './department/department.module';
import { JhipsterTestTaskModule } from './task/task.module';
import { JhipsterTestEmployeeModule } from './employee/employee.module';
import { JhipsterTestJobModule } from './job/job.module';
import { JhipsterTestJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterTestRegionModule,
        JhipsterTestCountryModule,
        JhipsterTestLocationModule,
        JhipsterTestDepartmentModule,
        JhipsterTestTaskModule,
        JhipsterTestEmployeeModule,
        JhipsterTestJobModule,
        JhipsterTestJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterTestEntityModule {}
