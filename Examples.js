const DLL = require('./DoublyLinkedList');

const numbersLinkedList = new DLL();

numbersLinkedList.append(1);
numbersLinkedList.append(2);
numbersLinkedList.addNodeAtIndex(1, 1.5);
console.log(numbersLinkedList.getList());

numbersLinkedList.deleteNodeAtIndex(1);
console.log(numbersLinkedList.getList());
