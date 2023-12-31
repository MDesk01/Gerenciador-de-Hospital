import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { DoctorComponent } from './component/dashboard/doctor/doctor.component';
import { ViewDoctorComponent } from './component/dashboard/doctor/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';


//adicionando as rotas das páginas
const routes: Routes = [
  { path: 'dashboard', children : [
    { path: '', redirectTo: 'patient', pathMatch: 'full'},
    { path: 'patient', component: PatientComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'doctor/:id', component: ViewDoctorComponent },
    { path : 'patient/:id', component: ViewPatientComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }