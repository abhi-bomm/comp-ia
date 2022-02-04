const fs = require("fs");
const chalk = require("chalk");

const addList = (title, item, store, quantity, order) => {
  const lists = loadLists();
  const existingList = lists.find(
    (list) => list.title.toLowerCase() === title.toLowerCase()
  );

  if (existingList) {
    const existingItem = existingList.items.find(
      (list) => list.item.toLowerCase() === item.toLowerCase()
    );

    if (existingItem) {
      console.log(chalk.red.inverse("Item already exists!"));
    } else {
      existingList.items.push({
        item: item,
        store: store,
        quantity: quantity,
        order: order,
      });

      saveLists(lists);
      console.log(chalk.green.inverse("Adding new item to existing list!"));
    }
  } else {
    const listDetails = {
      title: title,
      items: [],
    };

    listDetails.items.push({
      item: item,
      store: store,
      quantity: quantity,
      order: order,
    });

    lists.push(listDetails);

    saveLists(lists);
    console.log(chalk.green.inverse("New list created!"));
  }
};

const updateList = (
  title,
  newTitle,
  item,
  newItemName,
  store,
  quantity,
  order
) => {
  const lists = loadLists();
  const existingList = lists.find(
    (list) => list.title.toLowerCase() === title.toLowerCase()
  );

  if (existingList) {
    existingList.title = newTitle || existingList.title;

    if (item) {
      const existingItem = existingList.items.find(
        (list) => list.item.toLowerCase() === item.toLowerCase()
      );

      if (existingItem) {
        existingItem.item = newItemName || existingItem.item;
        existingItem.store = store || existingItem.store;
        existingItem.quantity = quantity || existingItem.quantity;
        existingItem.order = order || existingItem.order;
      } else {
        const newItem = {
          item: item,
          store: store,
          quantity: quantity,
          order: order,
        };
        existingList.items.push(newItem);
      }
    }

    saveLists(lists);
    console.log(chalk.green.inverse("List updated!"));
  } else {
    console.log(chalk.red.inverse("List was not found"));
  }
};

const removeItem = (title, item) => {
  const lists = loadLists();
  const existingList = lists.find(
    (list) => list.title.toLowerCase() === title.toLowerCase()
  );

  if (existingList) {
    const existingItem = existingList.items.find(
      (listItem) => listItem.item.toLowerCase() === item.toLowerCase()
    );

    if (existingItem) {
      existingList.items.pop(existingItem);
      saveLists(lists);
      console.log(chalk.green.inverse("Removed an item from the list!"));
    } else {
      console.log(chalk.red.inverse("Item not found"));
    }
  } else {
    console.log(chalk.red.inverse("List was not found"));
  }
};

const saveLists = (lists) => {
  const dataJSON = JSON.stringify(lists);
  fs.writeFileSync("lists.json", dataJSON);
};

const loadLists = () => {
  try {
    const dataBuffer = fs.readFileSync("lists.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeList = (title) => {
  const lists = loadLists();
  const listsToKeep = lists.filter((list) => {
    return list.title.toLowerCase() != title.toLowerCase();
  });
  if (lists.length > listsToKeep.length) {
    console.log(chalk.green.inverse("list removed!"));
    saveLists(listsToKeep);
  } else {
    console.log(chalk.red.inverse("No list found"));
  }
};

const listLists = () => {
  const lists = loadLists();
  console.log(chalk.green.inverse("Your lists"));
  lists.forEach((list) =>
    console.log(chalk.yellow.inverse("title: " + list.title))
  );
};

const readList = (title) => {
  const lists = loadLists();
  const listToPrint = lists.find(
    (list) => list.title.toLowerCase() === title.toLowerCase()
  );
  if (listToPrint) {
    console.log(chalk.yellow.inverse(listToPrint.title.toUpperCase()));
    const items = listToPrint.items.sort(function (a, b) {
      return parseInt(a.order) - parseInt(b.order);
    });
    console.log(items);
  } else console.log(chalk.inverse.red("No list found"));
};

module.exports = {
  addList: addList,
  removeList: removeList,
  listLists: listLists,
  readList: readList,
  updateList: updateList,
  removeItem: removeItem,
};