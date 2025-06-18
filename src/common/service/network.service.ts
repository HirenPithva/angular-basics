import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environment/environment";

export const network_token = new InjectionToken<NetworkService>("network")

export class NetworkService{
    private httpClient = inject(HttpClient);

    get<T>(url:string, params: 
        Record<string, string> | null, 
        heaers: Record<string, string>| null):Observable<T>{
        
        let httpParams = new HttpParams()
        params && Object.keys(params).forEach(paramsKey => {    
            httpParams.append(paramsKey, params[paramsKey]);
        })

        let httpHeader = new HttpHeaders()
        heaers && Object.keys(heaers).forEach(headerKey => {    
            httpHeader.append(headerKey, heaers[headerKey]);
        })

        return this.httpClient.get<T>(`${environment.apiUrl}/${url}`, {
            params : httpParams,
            headers : httpHeader
        })
    }

    post<T>(url:string, 
        payload: object, 
        params?: Record<string, string> | null, 
        heaers?: Record<string, string>| null):Observable<T>{

        let httpParams = new HttpParams()
        params && Object.keys(params).forEach(paramsKey => {    
            httpParams.append(paramsKey, params[paramsKey]);
        })
    
        let httpHeader = new HttpHeaders().append("content-type", "application/json")
        heaers && Object.keys(heaers).forEach(headerKey => {    
            httpHeader.append(headerKey, heaers[headerKey]);
        })
        console.log("API:",`${environment.apiUrl}/${url}`);
        return this.httpClient.post<T>(`${environment.apiUrl}/${url}`, payload, {
            params : httpParams,
            headers : httpHeader
        })
    }
}