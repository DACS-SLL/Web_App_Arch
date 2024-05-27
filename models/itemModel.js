let items = [];
let currentId = 1;

const getAllItems = () => items;

const getItemById = (id) => items.find(item => item.id === id);

const createItem = (name) => {
  const newItem = { id: currentId++, name };
  items.push(newItem);
  return newItem;
};

const updateItem = (id, name) => {
  const item = items.find(item => item.id === id);
  if (item) {
    item.name = name;
    return item;
  }
  return null;
};

const deleteItem = (id) => {
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
