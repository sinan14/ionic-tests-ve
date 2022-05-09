import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () =>
  //     import('./folder/folder.module').then((m) => m.FolderPageModule),
  // },

  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.module').then((m) => m.HomePageModule),
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./new-home/new-home.module').then((m) => m.NewHomePageModule),
  },

  {
    path: 'my-profile',
    loadChildren: () =>
      import('./my-profile/my-profile.module').then(
        (m) => m.MyProfilePageModule
      ),
  },
  {
    path: 'visit',
    loadChildren: () =>
      import('./visit/visit.module').then((m) => m.VisitPageModule),
  },
  {
    path: 'likes',
    loadChildren: () =>
      import('./likes/likes.module').then((m) => m.LikesPageModule),
  },
  {
    path: 'sliders',
    loadChildren: () =>
      import('./slider-popup/slider-popup.module').then(
        (m) => m.SliderPopupPageModule
      ),
  },
  {
    path: 'upgrade',
    loadChildren: () =>
      import('./upgrade-popup/upgrade.module').then((m) => m.UpgradePageModule),
  },

  {
    path: 'new-home',
    loadChildren: () =>
      import('./new-home/new-home.module').then((m) => m.NewHomePageModule),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update-form/update-form.module').then(
        (m) => m.UpdateFormPageModule
      ),
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
