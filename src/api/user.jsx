import {authInstance} from './axiosApi';
export async function Login(value){
        return await authInstance.post('/User/Login',value);
}
export async function Register(value){
        return await authInstance.post('/User/Register',value);
}
export async function ActivateUser(value){
        return await authInstance.post('/User/ActivationBackLink',value);
}
export async function ForgotPassword(value){
        return await authInstance.post('/User/ResetPassword',value);
}
export async function ResetPassword(value){
        return await authInstance.post('/User/ResetPasswordBacklink',value);
}