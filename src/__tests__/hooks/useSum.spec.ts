import { it, expect } from '@jest/globals';
import { sum } from '@/hooks/useSum';

it('should use useSum 1 and 2 expect 3', () => {
  expect(sum(1, 2)).toBe(3);
});
