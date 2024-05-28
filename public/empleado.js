async function loadEmployeeDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
  
    if (id) {
      const response = await fetch(`/api/items/${id}`);
      if (response.ok) {
        const item = await response.json();
        displaySingleEmployeeDetails(item);
      } else {
        document.getElementById('employeeDetails').textContent = 'Empleado no encontrado';
      }
    } else {
      const employees = JSON.parse(localStorage.getItem('employees'));
      if (employees && employees.length > 0) {
        displayAllEmployeeDetails(employees);
      } else {
        document.getElementById('employeeDetails').textContent = 'No se encontraron empleados.';
      }
    }
  }
  
  function displaySingleEmployeeDetails(employee) {
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>ID</th>
        <td>${employee.id}</td>
      </tr>
      <tr>
        <th>Nombre</th>
        <td>${employee.name}</td>
      </tr>
    `;
    document.getElementById('employeeDetails').appendChild(table);
  }
  
  function displayAllEmployeeDetails(employees) {
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Nombre</th>
      </tr>
    `;
    employees.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
      `;
      table.appendChild(row);
    });
    document.getElementById('employeeDetails').appendChild(table);
  }
  
  window.onload = loadEmployeeDetails;
  