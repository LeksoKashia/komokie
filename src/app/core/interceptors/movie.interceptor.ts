import { HttpInterceptorFn, HttpParams } from "@angular/common/http";

export const MovieInterceptor: HttpInterceptorFn = (req, next) => {
    let newParams = new HttpParams({fromString: req.params.toString()});
    newParams = newParams.append('api_key', '7a5d0f9bed5d907ff9ae138bd5469601');
    
    const requestClone = req.clone({
        params: newParams
    });
    
    return next(requestClone)
};