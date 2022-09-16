import { randomUUID } from 'crypto';

export function generateRandomString() {
  return randomUUID();
}

export function generateRandomNumber({ min = 0, max = 1, isInteger = true }) {
  if (max <= min) {
    throw Error('max value should be bigger than min value; default min: 0, default max: 1');
  }

  const randomNumber = min + Math.random() * (max - min);
  return isInteger ? Math.round(randomNumber) : randomNumber;
}
