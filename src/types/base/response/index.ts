export interface IResponse<T = any> {
    success: boolean
    status: number
    message: string
    data: T
}