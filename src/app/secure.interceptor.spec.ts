import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { SecureInterceptor } from './secure.interceptor';

describe('SecureInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SecureInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SecureInterceptor,
          multi: true,
        },
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });

  it('should be created', () => {
    const interceptor: SecureInterceptor = TestBed.inject(SecureInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should change http:// to https:// in request url', () => {
    httpClient.get('http://test.com').subscribe();

    const httpRequest: TestRequest = httpTestingController.expectOne('https://test.com');
    expect(httpRequest.request.url).toEqual('https://test.com');
  });

  it('should not change https:// in request url', () => {
    httpClient.get('https://example.com').subscribe();

    const httpRequest: TestRequest = httpTestingController.expectOne('https://example.com');
    expect(httpRequest.request.url).toEqual('https://example.com');
  });
});
