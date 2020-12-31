import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPopupComponent } from './menu-popup/menu-popup.component';
import { ItemsComponent } from './items/items.component';
import { AgInfoComponent } from './ag-info/ag-info.component';
import { ChooseTableComponent } from './choose-table/choose-table.component';
import { QueryMealComponent } from './query-meal/query-meal.component';
import { ModifiersComponent } from './modifiers/modifiers.component';
import { MealDealComponent } from './meal-deal/meal-deal.component';
import { ItemModifersComponent } from './item-modifers/item-modifers.component';
import { CartComponent } from './cart/cart.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaModifersComponent } from './pizza-modifers/pizza-modifers.component';
import { CartAddonsComponent } from './cart-addons/cart-addons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { FooterAddresComponent } from './footer-addres/footer-addres.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BookatableComponent } from './bookatable/bookatable.component';
import { TableAvalibilityComponent } from './table-avalibility/table-avalibility.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { LeftOrderComponent } from './left-order/left-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PoliciesComponent } from './policies/policies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { CategoryComponent } from './category/category.component';
import { FilterComponent } from './filter/filter.component';
import { EmptyCartComponent } from './empty-cart/empty-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuPopupComponent,
    ItemsComponent,
    AgInfoComponent,
    ChooseTableComponent,
    QueryMealComponent,
    ModifiersComponent,
    MealDealComponent,
    ItemModifersComponent,
    CartComponent,
    PizzaComponent,
    PizzaModifersComponent,
    CartAddonsComponent,
    LoyaltyComponent,
    FooterAddresComponent,
    HeaderComponent,
    CheckoutComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    BookatableComponent,
    TableAvalibilityComponent,
    CustomerDetailsComponent,
    LeftOrderComponent,
    OrderStatusComponent,
    PoliciesComponent,
    ContactUsComponent,
    AboutComponent,
    ProfileComponent,
    SearchComponent,
    CategoryComponent,
    FilterComponent,
    EmptyCartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    LayoutModule,
    HttpClientModule,
    NgxQRCodeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


