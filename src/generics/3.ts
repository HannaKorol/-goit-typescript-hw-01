//T & U означає комбінований тип (інтерсекція) з усіма властивостями як objA, так і objB. Це дозволяє TypeScript розпізнавати всі властивості об’єднаного об’єкта merged.

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ name: 'Alisa' }, { age: 28 });

merged.name;