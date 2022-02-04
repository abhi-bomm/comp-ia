const chalk = require("chalk");
const yargs = require("yargs");
const lists = require("./lists");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new list",
  builder: {
    title: {
      describe: "List title",
      demandOption: true,
      type: "string",
    },
    item: {
      describe: "Item part of list",
      demandOption: true,
      type: "string",
    },
    store: {
      describe: "Store from where to get the item",
      demandOption: false,
      type: "string",
    },
    quantity: {
      describe: "Quantity of the items",
      demandOption: false,
      type: "number",
    },
    order: {
      describe: "Order of the items",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    lists.addList(argv.title, argv.item, argv.store, argv.quantity, argv.order);
  },
});

// Create update command
yargs.command({
  command: "update",
  describe: "Update an existing list",
  builder: {
    title: {
      describe: "List title",
      demandOption: true,
      type: "string",
    },
    newTitle: {
      describe: "New List title",
      demandOption: false,
      type: "string",
    },
    item: {
      describe: "Item part of list",
      demandOption: false,
      type: "string",
    },
    newItemName: {
      describe: "New Item name to update part of list",
      demandOption: false,
      type: "string",
    },
    store: {
      describe: "Store from where to get the item",
      demandOption: false,
      type: "string",
    },
    quantity: {
      describe: "Quantity of the items",
      demandOption: false,
      type: "number",
    },
    order: {
      describe: "Order of the items",
      demandOption: false,
      type: "number",
    },
  },
  handler(argv) {
    lists.updateList(
      argv.title,
      argv.newTitle,
      argv.item,
      argv.newItemName,
      argv.store,
      argv.quantity,
      argv.order
    );
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a list",
  builder: {
    title: {
      describe: "List title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    lists.removeList(argv.title);
  },
});

// Create remove item command
yargs.command({
  command: "remove-item",
  describe: "Remove an item from a list",
  builder: {
    title: {
      describe: "List title",
      demandOption: true,
      type: "string",
    },
    item: {
      describe: "Item part of list",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    lists.removeItem(argv.title, argv.item);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a list",
  builder: {
    title: {
      describe: "List title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    lists.readList(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all lists",
  handler() {
    lists.listLists();
  },
});

yargs.parse();