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
  private languageInitial = 'en';
  private languageFinal = 'fr';
  private hasLanguageDetection = false;

  constructor (
    private boxTextStateSvc: BoxTextStateService,
    private httpTranslate: HttpClient,
  ) { }

  public getLanguage (param: boolean): string {
    return param ? this.languageInitial : this.languageFinal;
  }

  public setLanguageInitial(language: string): void {
    this.languageInitial = language;
  }

  public setLanguageFinal(language: string): void {
    this.languageFinal = language;
  }

  public setLanguageDetection(): boolean {
    this.hasLanguageDetection = !this.hasLanguageDetection;
    return this.hasLanguageDetection;
  }

  private getParams (): HttpParams {
    let params = new HttpParams();
    params = params.set('q', this.boxTextStateSvc.getContentFormControl(true));
    params = params.set('mt', Number(this.hasLanguageDetection).toString());
    params = params.set('langpair', `${this.languageInitial}|${this.languageFinal}`);

    return params
  }

  public getTranslate(): void {
    this.boxTextStateSvc.setValueFormControl('Translating ...', false)

    this.httpTranslate.get<ITranslateData | IErrResponseData>(this.API_TRANSLATE, { params: this.getParams() })
      .pipe(take(1))
      .subscribe(res => {
        this.boxTextStateSvc.setValueFormControl(res.responseData.translatedText, false)
      })
  }
}
