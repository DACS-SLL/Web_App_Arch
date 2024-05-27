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
    alert(`Item creado: ${item.name} con ID: ${item.id}`);
  }
  
  async function getItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    alert(`Items: ${JSON.stringify(items)}`);
  }
  
  async function getItem() {
    const id = document.getElementById('itemId').value;
    const response = await fetch(`/api/items/${id}`);
    if (response.ok) {
      const item = await response.json();
      alert(`Item: ${JSON.stringify(item)}`);
    } else {
      alert('Ítem no encontrado');
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
      alert(`Item actualizado: ${JSON.stringify(item)}`);
    } else {
      alert('Ítem no encontrado');
    }
  }
  
  async function deleteItem() {
    const id = document.getElementById('itemId').value;
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      alert('Ítem eliminado');
    } else {
      alert('Ítem no encontrado');
    }
  }
  