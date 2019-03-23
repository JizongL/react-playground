import leapYear  from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});

it('should Not be a leap year if not divisible by 400', () => {
  const input = 2000;
  const expectedOutput = true; 
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});

it('should Not be a leap year if not divisible by 4, not 100, leap year',()=>{
  const input = 1984;
  const expectedOutput = true;
  const actualoutput = leapYear(input);
  expect(expectedOutput).toBe(actualoutput);
});

it('should Not be a leap year if not divisible by 4',()=>{
  const input = 1983;
  const expectedOutput = false;
  const actualOutput = leapYear(input)
  expect(expectedOutput).toBe(actualOutput)
});

it('should NOT be a leap year if divisible by 100, not 4', () => {
  const input = 1985;
  const expectedOutput = false; 
  const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);
});

it('should throw an error for year before 1582',()=>{
  expect(()=>{
    leapYear(1568);
  }
  ).toThrow();
});

