/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  fakeTimers: {
    enableGlobally: true,
    advanceTimers: true,
    // Uncomment to make the test pass
    // doNotFake: ['performance'],
    now: new Date('2025-01-01T00:00:00Z').getTime(),
  }
};