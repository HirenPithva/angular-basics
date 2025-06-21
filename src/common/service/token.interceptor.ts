import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHandlerFn, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// @Injectable()
// export class tokenInterceptor implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const token = localStorage.getItem("access-token")
//         console.log("toekn", token)
//         let updatedReq = req;
//         if (token != null && token != undefined) {
//             updatedReq = req.clone({
//                 setHeaders: {
//                     Authorization: "Bearer " + token
//                 }
//             })
//             let r = updatedReq.headers;
//             //headers.append("Authorization", "Bearer " + token);
//         }
//         return next.handle(updatedReq);
//     }

// }

export const tokenInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
    const token = localStorage.getItem("access-token")
    if (token != null && token != undefined) {
        let clonereq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        })
        return next(clonereq);
    }
    return next(req);
}