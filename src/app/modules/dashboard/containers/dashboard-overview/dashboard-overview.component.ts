import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Doc } from '../../../../core/models/doc.model';
import { Team } from '../../../../core/models/team.model';
import { User } from '../../../../core/models/user.model';
import { DocsService } from '../../../../core/services/docs.service';
import { TeamsService } from '../../../../core/services/teams.service';
import { UsersService } from '../../../../core/services/users.service';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss'],
})
export class DashboardOverviewComponent implements OnInit {
  public teams: Team[] = [];
  public users: User[] = [];
  public closeResult = '';
  public alert: boolean = false;
  private newDoc: Doc;

  constructor(
    private usersService: UsersService,
    private teamsService: TeamsService,
    private docsService: DocsService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });

    this.teamsService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  public titleChange(title: string) {
    this.newDoc = {
      name: title,
    };
  }

  public teamChange(team: string) {
    this.newDoc = {
      teamId: team,
    };
  }

  public viewerChange(viewer: string) {
    this.newDoc = {
      viewerId: viewer,
    };
  }

  public open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true }).result.then(
      result => {
        this.docsService.addDoc(this.newDoc.name, this.newDoc.viewerId, this.newDoc.teamId).subscribe(() => {
          this.alert = true;
          this.closeResult = `Closed with: ${result}`;
          setTimeout(() => (this.alert = false), 5000);
        });
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
