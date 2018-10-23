import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hostPath } from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  constructor(private http: HttpClient) {}
  getImageList = (params:any) => 
    this.http.get(`${hostPath}/picture?page=${params}`)
  getHuBanImg = () => this.http.get(`${hostPath}/huaban`)
}