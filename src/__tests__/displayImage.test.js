/*
 * @jest-environment jsdom
 */
// import { totalItems } from '../displayImage.js';

// const data = [];
// const data1 = 'njnnnn';
// const data2 = [1, 3, 'jlnln', 'Hello', true, false, 5];
// describe('test for counting data', () => {
//     test('testing when the array is empty', () => {
//         expect(totalItems(data)).toEqual(0);
//     });
//     test('testing when the parameter is not a array', () => {
//         expect(totalItems(data1)).toEqual(0);
//     });
//     test('testing when the array has elements', () => {
//         expect(totalItems(data2)).toEqual(7);
//     });
// });

import mealsMock from '../__mocks__/displayImage.js';

test('Should count the total number of meals', async() => {
    const meals = await mealsMock();
    const count = meals.length;
    expect(count).toBe(25);
});