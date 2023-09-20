import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiCallService } from './api-call.service';

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiCallService]
    });

    service = TestBed.inject(ApiCallService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts', () => {
    const dummyPosts = [
      { userId: 1, id: 1, title: 'Test title 1', body: 'Test body 1' },
      { userId: 2, id: 2, title: 'Test title 2', body: 'Test body 2' }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/posts`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts);
  });

  it('should fetch post by id', () => {
    const dummyPost = { userId: 1, id: 1, title: 'Test title 1', body: 'Test body 1' };
  
    service.getPostById(1).subscribe(post => {
      expect(post).toEqual(dummyPost);
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/posts/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPost);
  });
  
  it('should add a post', () => {
    const newPost = { title: 'Test title', body: 'Test body' };
  
    service.addPost(newPost).subscribe(post => {
      expect(post).toEqual(newPost);
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/posts`);
    expect(req.request.method).toBe('POST');
    req.flush(newPost);
  });
  
  it('should update a post', () => {
    const updatedPost = { id: 1, title: 'Updated title', body: 'Updated body' };
  
    service.updatePost(1, updatedPost).subscribe(post => {
      expect(post).toEqual(updatedPost);
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/posts/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedPost);
  });
  
  it('should delete a post', () => {
    service.deletePost(1).subscribe(response => {
      expect(response).toEqual({});
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/posts/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });  
});
