

// HASH TABLE

// Collection of key-value pairs.
// Map keys to values for efficient lookup.
// Use an array as the underlying data structure.
// Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
// A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
// Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.

// *** Note:

// ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).

// Hash tables are also referred to as hash mapse or dictionaries.

// *** Operations:

// myMap.set(key, value)
// => myMap object
// Store the key-value pair in the storage array.
// If the key already exists, replace stored value with new value.
// Use the hashing function to map the key to an integer and store the value at the corresponding index.
// Account for the possibility of collisions.

// myMap.get(key)
// => value associated with key, or undefined if none

// myMap.has(key)
// => true/false depending on if a value has been associated with the key

// myMap.delete(key)
// => true if a value was associated with the key
// => false if a value was never associated with the key
// Remove any value associated to the key

// myMap.count()
// => integer number of key/value pairs in hash table

// myMap.forEach(callbackFn)
// => no returned value
// Invokes callback function once for each key-value pair in the hash table

class HashTable {
  constructor(limit) {
    this.limit = limit || 250;
    this._storage = [];
    this.size = 0;
  }

  set(key, value) {
    this.size++;
    const index = this.simpleHash(key, this.limit);
    const bucket = this._storage[index] || [];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        if (tuple[0] === key) {
          tuple[1] = value;
          this.size--;
          return;
        }
      }
    }

    this._storage[index] = bucket;
    bucket.push([key, value]);
  }

  get(key) {
    const index = this.simpleHash(key, this.limit);
    const bucket = this._storage[index];

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) return tuple[1];
    }

    throw new Error('Key does not exist in hash table');
  }

  has(key) {
    const index = this.simpleHash(key, this.limit);
    const bucket = this._storage[index];

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) return true;
    }

    return false;
  }

  delete(key) {
    const index = this.simpleHash(key, this.limit);
    const bucket = this._storage[index];

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        this.size--;
        return !!bucket.splice(i, 1);
      }
    }

    return false;
  }

  count() {
    return this.size;
  }

  forEach(callback) {
    this._storage.forEach((bucket) => {
      bucket.forEach((tuple) => {
        callback(tuple);
      });
    });
  }

  simpleHash(str, tableSize) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i) * (i + 1);
    }
    return hash % tableSize;
  }

  find(key) {
    return {
      match,
      bucket,
      matchIndex,
    };
  }
}
