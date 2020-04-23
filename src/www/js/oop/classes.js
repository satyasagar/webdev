/**
 * Create a class `TempTracker`
 *
 * It has two methods:
 *
 *   setTemp: takes a single argument and sets the
 *            current temperature to the value of the argument.
 *
 *   getTemp: returns the last temperature set by
 *            the setTemp function.
 *
 */

export class TempTracker {
  constructor(){
    this.temp = 0;
  }
  setTemp(v){
    this.temp = v;
  }
  getTemp(){
    return this.temp;
  }
}

/**
 * Create a class `AverageTempTracker`
 *
 * Offers the same functionality as `TempTracker`
 *
 * Additionally, it implements:
 *
 *   getAverageTemp: returns the average of temps that
 *                   have been set
 *
 */

export class AverageTempTracker extends TempTracker {
  temps = []
  
  setTemp(v) {
    this.temps.push(v)
    super.setTemp(v)
  }

  getAverageTemp(){
    const sum = this.temps.reduce((acc, n) => acc+n)
    return sum / this.temps.length
  }
}

/**
 * Create a class `BoundedTempTracker`
 *
 * Implements functionality of `TempTracker`
 *
 * Additionally, it implements:
 *      setTemp: same as before, but it does not set the temp
 *               if it is greater than 100 or less than 0.
 *
 *      getTemp: same as before, but it tracks each time
 *               getTemp has been called
 *
 *      getTempReads: returns how many times `getTemp` has
 *                    been called
 *
 */

export class BoundedTempTracker extends TempTracker{
  reads = 0

  setTemp(v) {
    if(v > 100 || v < 0) return 
    super.setTemp(v)
  }

  getTemp(){
    this.reads += 1
    return super.getTemp()
  }

  getTempReads() {return this.reads}
}

export class Counter {
  /**
   * Step 1: Rewrite setting the initial state without
   * the `constructor` method.
   */
  #counter = 1

  /**
   * Step 2: rewrite `this.counter` to use a private field
   *         so it can't be accessed outside the class.
   */
  tick() { return this.#counter++ }
}
