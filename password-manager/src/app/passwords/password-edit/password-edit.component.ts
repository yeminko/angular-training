import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/guards/deactivate-guard.service';
import { RouteService } from 'src/app/route.service';
import { Password } from '../password.model';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  styleUrls: ['./password-edit.component.scss'],
})
export class PasswordEditComponent implements OnInit, CanComponentDeactivate {
  disableInput: boolean = false;
  isNewMode: boolean = true;
  password: Password = new Password(-1, '', '', '', '', '');
  originalPassword: Password = new Password(-1, '', '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private passwordService: PasswordService,
    private routeService: RouteService
  ) {}

  onSave() {
    if (this.password.id === -1) {
      this.passwordService.addPassword(this.password);
    } else {
      this.passwordService.editPassword(this.password);
      this.originalPassword = { ...this.password };
      this.disableInput = true;
    }
  }

  onEdit() {
    this.disableInput = false;
  }

  onCancel() {
    this.disableInput = true;
    this.password = { ...this.originalPassword };
    if (this.isNewMode) this.passwordService.changeRoute();
  }

  onDelete() {
    this.passwordService.deletePassword(this.password.id);
  }

  loadPassword(id: number) {
    let password = this.passwordService.getPassword(id);
    if (password) {
      this.password = password;
      this.originalPassword = { ...password };
    } else {
      this.routeService.navigateTo404();
    }
  }

  watchMode() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.get('id')) {
        this.disableInput = true;
        this.isNewMode = false;
        this.loadPassword(+paramMap.get('id')!);
      } else {
        this.disableInput = false;
        this.isNewMode = true;
      }
    });
  }

  canDeactivate(): boolean {
    return this.disableInput
      ? true
      : confirm('Do you want to discard the changes?');
  }

  ngOnInit(): void {
    this.watchMode();
  }
}
