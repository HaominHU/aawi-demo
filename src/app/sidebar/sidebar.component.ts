import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },
    {
      path: '/culture',
      title: 'CultureWB',
      type: 'sub',
      icontype: 'nc-icon nc-bank',
      children: [
        {path: 'religious', title: 'Religious Affiliation', ab: 'RA'},
        {path: 'cultureidentity', title:'Culture Identity', ab:'CI'},
        {path: 'corevalues', title: 'Core Values', ab: 'CV'}
      ]
    },
    {
      path: '/political',
      title: 'PoliticalWB',
      type: 'sub',
      icontype: 'nc-icon nc-bank',
      children: [
        {path: 'party', title: 'Party Affiliation', ab: 'PA'},
        {path: 'civic', title: 'Civic Engagement', ab: 'CE'}
      ]
    },
    // {
    //     path: '/components',
    //     title: 'Components',
    //     type: 'sub',
    //     icontype: 'nc-icon nc-layout-11',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },{
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     icontype: 'nc-icon nc-ruler-pencil',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },{
    //     path: '/tables',
    //     title: 'Tables',
    //     type: 'sub',
    //     icontype: 'nc-icon nc-single-copy-04',
    //     children: [
    //         {path: 'regular', title: 'Regular Tables', ab:'RT'},
    //         {path: 'extended', title: 'Extended Tables', ab:'ET'},
    //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
    //     ]
    // },{
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     icontype: 'nc-icon nc-pin-3',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab:'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab:'VM'}
    //     ]
    // },{
    //     path: '/widgets',
    //     title: 'Widgets',
    //     type: 'link',
    //     icontype: 'nc-icon nc-box'
    //
    // },
    {
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'nc-icon nc-chart-bar-32'

    },
    // {
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link',
    //     icontype: 'nc-icon nc-calendar-60'
    // },{
    //     path: '/pages',
    //     title: 'Pages',
    //     type: 'sub',
    //     icontype: 'nc-icon nc-book-bookmark',
    //     children: [
    //         {path: 'timeline', title: 'Timeline Page', ab:'T'},
    //         {path: 'user', title: 'User Page', ab:'UP'},
    //         {path: 'login', title: 'Login Page', ab:'LP'},
    //         {path: 'register', title: 'Register Page', ab:'RP'},
    //         {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
    //     ]
    // }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    public menuItems: any[];
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
    }
}
