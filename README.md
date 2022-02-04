# lists-app

This is a command line tool that uses NodeJs libraries `yargs` and `chalk`. It gives the user the following abilities:

- create lists
- add items to the list
  - an additional field order has been added to the item attributes and the items in the list are sorted based on this order.
- update the lists
  - using the update the list name can be updated.
  - an individual item name under the list can be updated.
  - other details for the item can be updated.
  - new attribute order added to the item can be updated based on which the position of the item can be changed when reading a list.
- list the lists
- read a list
- delete an item
- delete the list

## To run this program

- download the repository
- run `npm install` on the terminal from the location of the repository

## Sample commands

- create list: `node app.js add --title="list1" --item "beets" --store "publix" --quantity 2 --order 1`
- add another item to the list: `node app.js add --title="list1" --item "carrots" --store "publix" --quantity 2 --order 2`
- update the list title: `node app.js update --title="list1" --newTitle "BJs" --item "squash" --quantity 2`
- update the list item name: `node app.js update --title="BJs" --item "beets" --newItemName "onions" --quantity 2`
- update the position of an item: `node app.js update --title="bjs" --item "beets" --store "publix" --quantity 2 --order 13`
- list all the listsL `node app.js list`
- read a list contents: `node app.js read --title="List2"`
- remove an item: `node app.js remove-item --title="list2" --item "carrots"`
- remove a list: `node app.js remove --title="List2"`
