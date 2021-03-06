import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUserService } from './../github-user.service';


@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit ,OnDestroy {

  name: string;
  userDetails: any = {};

  constructor(private activatedRouteService: ActivatedRoute, private githubusersService: GithubUserService, private routerService: Router) {
    console.log("Userdetails constructor clled...");
   }

  ngOnInit() {
    console.log("User details ngonit clled...");
    this.initializeUserDetails();
  }

  initializeUserDetails() {
    let nameParam = this.activatedRouteService.snapshot.params['name'];
    this.name = nameParam;
    this.githubusersService.getUserByName(this.name)
      .subscribe(userdetail => this.userDetails = userdetail);
  }

  viewRepoByUserName(name) {
    this.routerService.navigate(['UserRepo', name]);
  }

ngOnDestroy(){
console.log("Destroed userdetail");
}

}
