const employee = {
    name: 'Jackson',
    streetAddress: '31 Karanja Road',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    return Object.assign({}, employee, {name: undefined });    
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
} 