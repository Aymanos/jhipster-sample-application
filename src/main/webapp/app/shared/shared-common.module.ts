import { NgModule } from '@angular/core';

import { JhipsterSampleApplicationElasticSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterSampleApplicationElasticSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterSampleApplicationElasticSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSampleApplicationElasticSharedCommonModule {}
