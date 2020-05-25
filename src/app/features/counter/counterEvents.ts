const counterEvents = {
  onIncrementNormal(counter: number, old: number): void {
    // Something to do on Increment Normal Counter
    console.log(`Normal counter incremented from ${old} to ${counter}`);
  },
  onIncrementEven(counter: number, old: number): void {
    // Something to do on Increment Even Counter
    console.log(`Even counter incremented from ${old} to ${counter}`);
  },
  onIncrementOdd(counter: number, old: number): void {
    // Something to do on Increment Odd Counter
    console.log(`Odd counter incremented from ${old} to ${counter}`);
  },
};

export default counterEvents;
