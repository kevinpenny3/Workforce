import { getEmployees } from "./employeeDataProvider.js"
import { getComputers } from "./computerDataProvider.js"
import { getDepartments } from "./departmentDataProvder.js"
import { getOffices } from "./officeDataProvider.js"
import EmployeeList from "./EmployeeList.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getOffices)
    .then(EmployeeList)