import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CompanyService } from '../company.service';
import { CompanyModel, Team } from '../datamodels';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {

  company$: Observable<CompanyModel>;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
    ) {}

  ngOnInit() {
    this.company$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.companyService.getCompany(params.get('id')))
    );
  }
}
