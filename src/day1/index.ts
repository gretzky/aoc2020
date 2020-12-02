import * as fs from 'fs'

type Nullable<T> = T | null | undefined

function run(): Nullable<number> {
  const nums: number[] = fs
    .readFileSync('./input.txt', 'utf-8')
    .split('\n')
    .map((line: string) => Number(line))
  
  for (let i = 0; i < nums.length; i += 1) {
    const lock = nums[i]
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      const stock = nums[j]
      for (let k = j + 1; k < nums.length - 2; k += 1) {
        const barrel = nums[k]
        if (lock + stock + barrel === 2020) {
          return lock * stock * barrel
        }
      }
    }
  }
}

console.log(run())