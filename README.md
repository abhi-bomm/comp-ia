# lists-app

This is a command line tool that uses NodeJs libraries `yargs` and `chalk`. It gives the user the following abilities:

- create lists
- add items to the list
- read a list
- update the lists
- delete an item
- delete the list
- list the lists

## To run this program

- download the repository
- run `npm install` on the terminal from the location of the repository

## Sample commands

- `node app.js add --title="list1" --item "beets" --store "publix" --quantity 2`
- `node app.js update --title="list1" --newTitle "BJs" --item "squash" --quantity 2`
- `node app.js remove --title="List2"`
- `node app.js remove-item --title="list2" --item "carrots"`
- `node app.js read --title="List2"`
- `node app.js list`
