import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile = {name: "Grant Chirpus", contact: "grant@grandcircus.co", bio: "I am pretty cool. I have a great job. I like to play Tetris. I am pretty ok at AngularJS."};

  constructor(private router: Router) { }

  getUserProfile() {
    return this.profile;
  } 
  
  editProfile(updatedProfile: any): void {
    this.profile = updatedProfile;
    this.router.navigate(['/profile']);
  }

}
