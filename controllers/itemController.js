const itemModel = require('../models/itemModel');

const getAllItems = (req, res) => {
  res.json(itemModel.getAllItems());
};

const getItemById = (req, res) => {
  const item = itemModel.getItemById(parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Ítem no encontrado');
  }
};

const createItem = (req, res) => {
  const newItem = itemModel.createItem(req.body.name);
  res.status(201).json(newItem);
};

const updateItem = (req, res) => {
  const item = itemModel.updateItem(parseInt(req.params.id), req.body.name);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Ítem no encontrado');
  }
};

const deleteItem = (req, res) => {
  const success = itemModel.deleteItem(parseInt(req.params.id));
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).send('Ítem no encontrado');
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
