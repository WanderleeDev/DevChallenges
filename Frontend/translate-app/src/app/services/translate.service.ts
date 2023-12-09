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
  private languageInitial = '';
  private languageFinal = '';
  private hasLanguageDetection = false;

  constructor (
    private boxTextStateSvc: BoxTextStateService,
    private httpTranslate: HttpClient,
  ) {}

  public setLanguageInitial(language: string): void {
    this.languageInitial = language;
    console.log(this.languageInitial);
  }

  public setLanguageFinal(language: string): void {
    this.languageFinal = language;
    console.log(this.languageFinal);
  }

  public setLanguageDetection(): boolean {
    this.hasLanguageDetection = !this.hasLanguageDetection
    return this.hasLanguageDetection
  }

  private getParams (): HttpParams {
    const data = `${this.languageInitial}|${this.languageFinal}`
    console.log(data, this.languageFinal);

    let params = new HttpParams();

    params = params.set('q', this.boxTextStateSvc.getContentFormControl(true));
    params = params.set('langpair', data);
    params = params.set('mt', Number(this.hasLanguageDetection).toString());
    return params
  }

  public getTranslate() {


    console.log(this.getParams());
    this.httpTranslate.get<ITranslateData | IErrResponseData>(this.API_TRANSLATE, {params: this.getParams()})
      .pipe(take(1))
      .subscribe(res => this.boxTextStateSvc.setValueFormControl(
        res.responseData.translatedText,
        false
      ))
  }
}
