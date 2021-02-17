const DLL = require('./DoublyLinkedList');

const numbersLinkedList = new DLL();

numbersLinkedList.append(1);
numbersLinkedList.append(2);
numbersLinkedList.addNodeAtIndex(1, 1.5);
console.log(numbersLinkedList.toArray());

numbersLinkedList.deleteNodeAtIndex(1);

numbersLinkedList.forEach((value, index) => {
  console.log(`value at index ${index} is ${value}`);
});
