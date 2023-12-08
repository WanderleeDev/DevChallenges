export interface ITranslateData {
  exception_code:  null;
  matches:         Match[];
  mtLangSupported: null;
  quotaFinished:   boolean;
  responderId:     null;
  responseData:    ResponseData;
  responseDetails: string;
  responseStatus:  number;
}

export interface Match {
  "create-date":      Date;
  "created-by":       string;
  id:                 string;
  "last-update-date": Date;
  "last-updated-by":  string;
  match:              number;
  quality:            number | string;
  reference:          null;
  segment:            string;
  source:             string;
  subject:            string;
  target:             string;
  translation:        string;
  "usage-count":      number;
}

export interface ResponseData {
  match:          number;
  translatedText: string;
}


export interface IErrResponseData {
  exception_code:  null;
  matches:         string;
  mtLangSupported: null;
  quotaFinished:   null;
  responderId:     null;
  responseData:    ErrorData;
  responseDetails: string;
  responseStatus:  string;
 }

 export interface ErrorData {
  translatedText: string;
 }

