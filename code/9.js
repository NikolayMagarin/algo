function reversed(list) {
  const a = [list];
  debugger;
  let cur = list;
  while (cur.next) {
    a.push(cur.next);
    cur = cur.next;
  }

  let newList = a.pop();
  cur = newList;
  while (a.length) {
    cur.next = a.pop();
    cur = cur.next;
  }

  cur.next = null;

  return newList;
}

/*
const testlist = {
  val: 1,
  next: {
    val: 5,
    next: {
      val: 8,
      next: {
        val: 13,
        next: {
          val: 19,
          next: null,
        },
      },
    },
  },
};

console.log(list);
console.log(reversed(list));
*/
