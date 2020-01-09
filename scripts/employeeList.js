import { useEmployees } from "./employeeDataProvider.js"
import { useComputers } from "./computerDataProvider.js"
import { useDepartments } from "./departmentDataProvder.js"
import { useOffices } from "./officeDataProvider.js"
import Employee from "./employee.js"

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const offices = useOffices()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find the Employee's computer
            const computer = computers.find(computer => computer.id === employee.computerId)
            // Find the Employee's department
            const department = departments.find(department => department.id === employee.departmentId)
            // Find the Employee's Office
            const office = offices.find(office => office.id === employee.officeId)
            // Get HTML representation of employee
            const html = Employee(employee, computer, department, office)

            return html
        }).join("")
    }

    debugger
    render()
}

export default EmployeeList