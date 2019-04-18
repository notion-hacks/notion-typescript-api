import { Greeter } from '../index'

test(`My Greeter`, (): void => {
  expect(Greeter(`John`)).toBe(`Hello John!`)
})
