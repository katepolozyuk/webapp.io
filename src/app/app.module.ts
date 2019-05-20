import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { GamesComponent } from './games/games.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    GamesComponent,
    PriceComponent,
    ContactComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TabsComponent,
    TabComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
