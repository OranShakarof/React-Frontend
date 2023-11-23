class AppConfig {
    public readonly usersUrl = "https://jsonplaceholder.typicode.com/users/";
    public readonly employeesUrl ="http://localhost:3030/api/employees/";
    public readonly registerUrl = "http://localhost:3030/api/auth/register/";
    public readonly loginUrl ="http://localhost:3030/api/auth/login/";
}

const appConfig = new AppConfig();
export default appConfig;