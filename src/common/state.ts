class Control{
  constructor(parentNode, itemName, className, content){
    const elem = document.createElement(itemName);
    // this.node = elem
    elem.className = className;
    elem.content = content;
    parentNode.append(elem)
  }

  remove(){
    this.node.remove
  }
}