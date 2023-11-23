import axios from "axios";
import UserModel from "../Model/UsersModel";
import appConfig from "../Utils/Appconfig";

class UsersService {
    public async getAllUsers(): Promise<UserModel[]> {
        const response = await axios.get<UserModel[]>(appConfig.usersUrl);
        const user = response.data;
        return user;
    }
}

const usersService = new UsersService();

export default usersService;