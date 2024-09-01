/* global describe, test, expect */
const cyberReindeer = require('./index')

test("Test #01 - Returns an Array", () => {
  expect(
    Array.isArray(
      cyberReindeer('S..|...|..', 10)
    )
  ).toBe(true)
})

test("Test #02 - cyberReindeer('S..|...|..', 10)", () => {
  expect(cyberReindeer('S..|...|..', 10)).toStrictEqual([
    "S..|...|..",
    ".S.|...|..",
    "..S|...|..",
    "..S|...|..",
    "..S|...|..",
    "...S...*..",
    "...*S..*..",
    "...*.S.*..",
    "...*..S*..",
    "...*...S.."
  ])
})