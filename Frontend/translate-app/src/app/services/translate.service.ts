import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
//  services
import { BoxTextStateService } from './boxTextState.service';
//  interfaces
import { IErrResponseData, ITranslateData } from '../shared/interfaces/ITranslatedata.interface';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private readonly API_TRANSLATE = 'https://api.mymemory.translated.net/get'

  constructor (
    private boxTextStateSvc: BoxTextStateService,
    private httpTranslate: HttpClient,
  ) {}

  public getTranslate() {
    let params = new HttpParams();
    params = params.set('q', this.boxTextStateSvc.getContentFormControl(true));
    params = params.set('langpair', 'en|es');
    params = params.set('mt', 1);

    this.httpTranslate.get<ITranslateData | IErrResponseData>(this.API_TRANSLATE, {params: params})
      .pipe(take(1))
      .subscribe(res => this.boxTextStateSvc.setValueFormControl(
        res.responseData.translatedText,
        false
      ))
  }
}
