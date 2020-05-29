import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../models/mail';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private _urlService:string = environment.mailer;
  private _sendMailEndpoint:string = `${this._urlService}/sendmail`;

  constructor(
    private http: HttpClient
  ) { }

  public send(mail: Mail): Observable<any> {
    return this.http.post(this._sendMailEndpoint, mail);
  }

}
