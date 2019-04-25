import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../datamodels';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MemberService } from '../member.service';
import { switchMap } from 'rxjs/operators';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  member$: Observable<TeamMember>;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    ) {}

  ngOnInit() {
    this.member$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.memberService.getMember(params.get('id')))
    );
  }
}
