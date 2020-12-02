import * as fs from 'fs'

function counter(): number {
  const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

  let correct: number = 0

  for (const entry of input) {
    if (entry === '') {
      break
    }
    const [range,letter,pw]: string[] = entry.split(' ')
    const [min,max]: number[] = range.split('-').map(Number)
    const pwMin: string = pw.charAt(min - 1)
    const pwMax: string = pw.charAt(max - 1)

    const letterMatch: boolean = pwMin == letter.charAt(0) || pwMax == letter.charAt(0)
    const indexMismatch: boolean = pwMin != pwMax

    if (letterMatch && indexMismatch) {
      correct++
    }
  }
  return correct
}

console.log(counter())