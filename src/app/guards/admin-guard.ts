import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const CanActivateAdminPanel = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const loggedinuser = authService.getLoggedInUser();
  //   console.log(loggedinuser.isAdmin);
  if (loggedinuser.isAdmin) {
    return true;
  } else {
    // router.navigate(['/login']);
    alert('Only Admin Can access this Data!');
    return false;
  }
};
