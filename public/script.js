async function createItem() {
    const name = document.getElementById('itemName').value;
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    const item = await response.json();
    alert(`Asistencia creada \nNombre: ${item.name} con ID: ${item.id}`);
  }
  
  async function getItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    alert(`Empleados registrados: \n${JSON.stringify(items)}`);
  }
  
  async function getItem() {
    const id = document.getElementById('itemId').value;
    const response = await fetch(`/api/items/${id}`);
    if (response.ok) {
      const item = await response.json();
      alert(`Empleado: ${JSON.stringify(item)}`);
    } else {
      alert('Dato no encontrado');
    }
  }
  
  async function updateItem() {
    const id = document.getElementById('itemId').value;
    const name = document.getElementById('itemName').value;
    const response = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    if (response.ok) {
      const item = await response.json();
      alert(`Empleado actualizado: ${JSON.stringify(item)}`);
    } else {
      alert('Dato no encontrado');
    }
  }
  
  async function deleteItem() {
    const id = document.getElementById('itemId').value;
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      alert('Empleado eliminado');
    } else {
      alert('Dato no encontrado');
    }
  }
  