// @ts-check

class LinkNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkQueue {

  // 指针，指向队尾
  rear = null;

  constructor() {
    this.head = new LinkNode('head');
    this.rear = this.head;
  }

  // 向队尾添加元素
  push(element) {
    const newNode = new LinkNode(element);
    // 将指针 next 指向新元素，即将原队尾元素 next 指向新元素
    this.rear.next = newNode;
    // 将指针指向新元素
    this.rear = newNode;
  }

  // 移除队尾元素
  pop() {
    const current = this.findPrev(this.rear.element);

    console.log(JSON.stringify(current))
    if (current === -1) {
      return -1;
    }
    current.next = null;
    this.rear = current;
    return current;
  }

  // 查找上一个元素
  findPrev(element) {
    let current = this.head;
    while (1) {
      if (current.next === null) {
        current = -1;
        break;
      }
      if (current.next.element === element) {
        break;
      }
      current = current.next
    }
    return current;
  }

  // 输出所有元素
  print() {
    const elements = [];
    let current = this.head;
    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }
    return elements.join(', ');
  }
}

const queue = new LinkQueue();
queue.push('luoyuecheng');
queue.push('123456789');
console.log(queue.pop());
console.log(queue.print());
console.log(queue.findPrev('luoyuecheng'))
console.log(queue.print())
