import {capitalizeString,filterFoodByType,generateFoodHTML, sortByRating} from './foodUtilities'
import {Food, FoodType} from './Food'
import foodStock from './foodData';

describe('testing capitilizeString', () => {
    test('should capitalize first letter of word ', () => {
        const output = capitalizeString('word')
        expect(output).toBe('Word')
    });
    test('should work on multiple word string', () => {
        const input = 'hello friend'
        const output = capitalizeString(input)
        expect(output).toBe('Hello Friend')
    })
    test('should work on multiple word string', () => {
        const input = 'hello friend'
        const output = capitalizeString(input)
        expect(typeof output).toBe('string')
    })
});
describe('testing filterFoodByType', () => {
    test('should return an array ', () => {
        const input = foodStock
        const foodType = 'junk' as FoodType
        const output = filterFoodByType(foodType,input)
        expect(typeof output).toBe('object')
    });
    test('should return an array of correct tyope', () => {
        const junkFood = [
            { img: "🍕", name: "pizza", foodType: FoodType.JUNK, rating: 10 },
            { img: "🍔", name: "burger", foodType: FoodType.JUNK, rating: 7 },
            { img: "🍟", name: "fries", foodType: FoodType.JUNK, rating: 3 },
            { img: "🌭", name: "hot dog", foodType: FoodType.JUNK, rating: 3 }
        ]
        const inputStock = foodStock
        const foodType = 'junk' as FoodType
        const output = filterFoodByType(foodType,inputStock)
        expect(output).toEqual(junkFood)
    });
    test('should not mutate original array ', () => {
        const inputStock = foodStock
        const foodType = 'junk' as FoodType
        const output = filterFoodByType(foodType, inputStock)
        expect(output).not.toBe(foodStock)
    });
    test('should return an empty array if food ', () => {
        
    });
});