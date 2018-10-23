import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hostPath } from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class HuabanService {
  constructor(private http: HttpClient) {}
  getHuabanHome = () => this.http.get(`${hostPath}/huabanhome`)
  getAnthorInfo = (params:any) => this.http.post(`${hostPath}/author`, params)
}