import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgInfoComponent } from './ag-info/ag-info.component';
import { CartAddonsComponent } from './cart-addons/cart-addons.component';
import { CartComponent } from './cart/cart.component';
import { ChooseTableComponent } from './choose-table/choose-table.component';
import { FooterAddresComponent } from './footer-addres/footer-addres.component';
import { ItemModifersComponent } from './item-modifers/item-modifers.component';
import { ItemsComponent } from './items/items.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { MealDealComponent } from './meal-deal/meal-deal.component';
import { MenuPopupComponent } from './menu-popup/menu-popup.component';
import { ModifiersComponent } from './modifiers/modifiers.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PizzaModifersComponent } from './pizza-modifers/pizza-modifers.component';
import { PizzaComponent } from './pizza/pizza.component';
import { QueryMealComponent } from './query-meal/query-meal.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
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


const routes: Routes = [
  {path: '', component: ItemsComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'footeraddres', component: FooterAddresComponent},
  {path: 'menu', component: MenuPopupComponent},
  {path: 'agInfoComponent', component: AgInfoComponent},
  {path: 'chooseTable', component: ChooseTableComponent},
  {path: 'QueryMeal', component: QueryMealComponent},
  {path: 'Modifiers', component: ModifiersComponent},
  {path: 'MealDeal', component: MealDealComponent},
  {path: 'ItemModifers', component: ItemModifersComponent},
  {path: 'cart', component: CartComponent},
  {path: 'pizza', component: PizzaComponent},
  {path: 'PizzaModifers', component: PizzaModifersComponent},
  {path: 'cartaddons', component: CartAddonsComponent},
  {path: 'myorders', component: MyOrdersComponent},
  {path: 'orderdetails', component: OrderDetailsComponent},
  {path: 'loyalty', component: LoyaltyComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'bookatable', component: BookatableComponent},
  {path: 'TableAvalibility', component: TableAvalibilityComponent},
  {path: 'CustomerDetails', component: CustomerDetailsComponent},
  {path: 'leftOrdercomponent', component: LeftOrderComponent},
  {path: 'orderstatus', component: OrderStatusComponent},
  {path: 'policies', component: PoliciesComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'empty-cart', component: EmptyCartComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
