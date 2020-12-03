import * as fs from 'fs'

interface InputMap {
  height: number
  width: number
  map: string[]
}

const parse = (input: string[]): InputMap => {
  const map: string[] = input.reduce((acc, row) => [...acc, ...row.split("")], [] as string[])
  const width: number = input[0].length
  const height: number = input.length

  return {
    width,
    height,
    map
  }
}

const traverse = (input: InputMap, pattern: [number, number]): number => {
  let x: number = 0
  let y: number = 0
  const { width, height, map } = input
  let hit: number = 0

  while (y < height) {
    x += pattern[0]
    y += pattern[1]

    const location: string = map[y * width + (x % width)]

    if (location === "#") {
      hit++
    }
  }

  return hit
}

const solve1 = (input: string[]): number => {
  const map = parse(input)
  return traverse(map, [3,1])
}

const solve2 = (input: string[]): number => {
  const patterns: Array<[number, number]> = [[1,1], [3,1], [5,1], [7,1], [1,2]]
  const map: InputMap = parse(input)
  
  return patterns.reduce((acc, pattern) => acc * traverse(map, pattern), 1)
}

const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')

console.log('part1', solve1(input))
console.log('part2', solve2(input))