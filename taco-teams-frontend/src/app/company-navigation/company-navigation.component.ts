import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyService } from '../company.service';
import { CompanyModel } from '../datamodels';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-company-navigation',
  templateUrl: './company-navigation.component.html',
  styleUrls: ['./company-navigation.component.css']
})
export class CompanyNavigationComponent implements OnInit {

  companies: CompanyModel[];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private companyService: CompanyService, private loginService: LoginService) {}

  ngOnInit() {
    this.companyService.getCompanys().subscribe(companies => {
      this.companies = companies;
    });
  }
}
