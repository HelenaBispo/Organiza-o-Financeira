import { jwtDecode } from "jwt-decode";
import { UserRole } from "../enums/UserRole";

export type User = {
    name? : string,
    email? : string,
    phone? : string,
    userId? : string,
    role?: UserRole[];
}

class UserService{

    getToken() : string | null{
        try{
            return localStorage.getItem("userJwt")
        }
        catch(err){
            console.log(err)
            return null
        }
    }

    setToken(token : string){
        localStorage.setItem("userJwt", token)
    }

    setAttendant( attendant: any){
        localStorage.setItem('attendant', JSON.stringify(attendant))
    }

    getUser() : User | undefined{

        const token = this.getToken()

        return token ? jwtDecode<User>(token) : undefined;

    }

    isAuthenticated() : boolean{
        const user : User | undefined = this.getUser();
        return user ? user.role != undefined : false
    }

    logout(){
        localStorage.removeItem("userJwt")
    }

}

export default new UserService();