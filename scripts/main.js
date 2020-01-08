import { getEmployees } from "./employeeDataProvider.js"
import { getComputers } from "./computerDataProvider.js"
import EmployeeList from "./EmployeeList.js"

getEmployees()
    .then(getComputers)
    .then(EmployeeList)