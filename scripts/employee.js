const Employee = (employee, computer) => {
    return `
        <section class="product">
            <header>
                <h2>${employee.firstName} ${employee.lastName}</h2>
            </header>
            <div>
                Age: ${employee.age}
            </div>
            <div>
                Computer: ${computer.model}
            </div>
            <div>
                Manufactured: ${computer.year}
            </div>
        </section>
    `
}

export default Employee