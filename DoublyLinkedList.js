/**
 * Node class having blueprint for a node object
 */
class Node {
  /**
   * @param {Node} prev node reference
   * @param {any} value of the node
   * @param {Node} next node reference
   */
  constructor(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }
}

/**
 * DoublyLinkedList class
 */
class DoublyLinkedList {
  constructor() {
    this.root = null;
  }

  /**
   * @returns the last node in the list
   */
  getLastNode() {
    let lastNode = this.root;

    if (!lastNode) {
      return lastNode;
    }

    while (lastNode.next) {
      lastNode = lastNode.next;
    }

    return lastNode;
  }

  /**
   *
   * @param {Any} value
   * @appends the node at the end of the list
   */
  append(value) {
    if (this.root === null) {
      this.root = new Node(null, value);
    } else {
      const lastNode = this.getLastNode();
      if (!lastNode) {
        this.root = new Node(null, value, null);
      } else {
        const newNode = new Node(lastNode, value, null);
        lastNode.next = newNode;
      }
    }
  }

  /**
   *
   * @param {Any} value
   * @returns {Node} object with matching value
   */
  getNodeByValue(value) {
    let node = this.root;
    while (!node && node.value !== value) {
      node = node.next;
    }
    return node;
  }

  /**
   *
   * @param {INT} index of the node
   * @returns {Node} at given index
   */
  getNodeAtIndex(index) {
    let idx = -1;
    let nodeAtIndex = this.root;
    while (idx < index) {
      idx += 1;
      if (!nodeAtIndex || idx === index) {
        break;
      } else {
        nodeAtIndex = nodeAtIndex.next;
      }
    }

    return nodeAtIndex;
  }

  /**
   *
   * @param {INT} index
   * @param {Any} value
   * @adds Node at given index with given value and updates links
   */
  addNodeAtIndex(index, value) {
    let nodeAtIndex = this.getNodeAtIndex(index);

    if (!nodeAtIndex) {
      console.log(`Index ${index} is out of range`);
      return;
    }

    const preNode = nodeAtIndex.prev;
    preNode.next = new Node(preNode, value, nodeAtIndex);
  }

  /**
   *
   * @param {Node} node object to unlink from the LinkedList
   * @unlinks and updates the previous and next references
   */
  dereferenceNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node = null;
  }

  /**
   *
   * @param {INT} index of the node to delete.
   * @removes Node from the list at given index.
   */
  deleteNodeAtIndex(index) {
    const node = this.getNodeAtIndex(index);

    if (!node) {
      console.log(`node does not exist at index ${index}`);
      return;
    }

    this.dereferenceNode(node);
  }

  /**
   *
   * @param {Ant} value of the node which you want to delete
   * @dereferences the node from the list
   */
  deleteNode(value) {
    const node = this.getNodeByValue(value);

    if (!node) {
      console.log(`node with value ${value} does not exist`);
      return;
    }

    this.dereferenceNode(node);
  }

  /**
   * @displays the values of the linked list
   */
  toArray() {
    let list = [];
    let nodeToDisplay = this.root;
    while (nodeToDisplay) {
      list.push(nodeToDisplay.value);
      nodeToDisplay = nodeToDisplay.next;
    }

    return list;
  }

  forEach(callback) {
    let node = this.root;
    if (!node) {
      callback(null, null, null, null);
      return;
    }

    let index = 0;
    while (node) {
      callback(node.value, index);
      node = node.next;
      index += 1;
    }
  }
}

module.exports = DoublyLinkedList;
