import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hostPath } from '../config/config'

@Injectable({
  providedIn: 'root'
})
export class HuabanService {
  constructor(private http: HttpClient) {}
  getHuabanHome = (params:any) => this.http.get(`${hostPath}/huabanhome?page=${params}`)
  getAnthorInfo = (params:any) => this.http.post(`${hostPath}/author`, params)
  searchAuto = (params:any) => this.http.get(`${hostPath}/searchAuto?q=${params.q}&size=${params.size}`)
  search = (params:any) => this.http.get(`${hostPath}/search?q=${params.q}`)
}