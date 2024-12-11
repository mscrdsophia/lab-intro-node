class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
  let index = this.items.findIndex(current => current > item);
  if (index === -1){
    this.items.push(item);
  }
  else {
    this.items.splice(index, 0, item);
  }
  this.length = this.items.length;
  }
  

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if(this.length === 0){
      return 0;
    }
    return this.items.reduce((total,current) => total + current, 0);
  }

  avg() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
