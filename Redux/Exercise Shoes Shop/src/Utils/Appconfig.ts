class AppConfig {
    public readonly usersUrl = "https://jsonplaceholder.typicode.com/users/";
    public readonly employeesUrl ="http://localhost:3030/api/employees/";
}

const appConfig = new AppConfig();
export default appConfig;