import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import router module
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VetrineComponent } from './vetrine/vetrine.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeComponent } from './home/home.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    NavigateComponent,
    NotFoundComponent,
    VetrineComponent,
    FooterComponent,
    SubscribeComponent,
    HomeComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    TestComponent,
    TestPipesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:VetrineComponent
      },
      {
        path:'test',
        component:TestComponent
      },
      {
        path:'testpipes',
        component:TestPipesComponent
      },
      {
        path:'connect',
        component:ConnectComponent
      },
      {
        path:'subscribe',
        component:SubscribeComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'addTodo',
        component:AddTodoComponent
      },
      {
        path:'updateTodo',
        component:UpdateTodoComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
