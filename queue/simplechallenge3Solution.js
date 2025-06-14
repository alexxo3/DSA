let customerQueue = [];

// Add "Alice", "Bob", "Charlie"
customerQueue.push("Alice");
customerQueue.push("Bob");

// Serve the first customer
customerQueue.shift()

// Print who is next in line
console.log(customerQueue[0])
