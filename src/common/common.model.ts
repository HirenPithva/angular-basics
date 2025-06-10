export type ValidationErrorMessage<T> = {
    [key in keyof T]?: ErrorMessage
}

export interface ErrorMessage{
    error: string[],
    visible: boolean 
}

export type IFormControlName<T> = {
    [key: string]: keyof T
}

