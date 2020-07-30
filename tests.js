// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function () {
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it('should should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello("World")).toBe("Hello, World!");
    });
});

// Unit tests for the isFive function
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should only return a boolean no matter the input when executed', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should allow the string "5" to be true when passed', function () {
        expect(isFive("5")).toBe(true);
    });
})

// Unit tests for the isEven function
describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven). toBe("function");
    });
    it('should only return a boolean no matter the input when executed', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when 2 is passed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return false when 3 is passed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is passed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is passed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when Infinity is passed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when a false boolean is passed', function () {
        expect(isEven(typeof input === "boolean")).toBe(false);
    });
    it('should return false when "" is passed', function () {
        expect(isEven("")).toBe(false);
    });
})

// Unit tests for the isVowel function
describe("isVowel", function () {
    it('should be a defined function', function () {
       expect(typeof isVowel).toBe("function");
    });
    it('should only return a boolean no matter the input when executed', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when "a" is passed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when "A" is passed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when "y" is passed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when 4 is passed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when a false boolean is passed', function () {
        expect(isVowel(typeof input === "boolean")).toBe(false);
    });
    it('should return false when "banana" is passed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when "" is passed', function () {
        expect(isVowel("")).toBe(false);
    });
})

//unit test for the add function
describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return the sum of the two numbers that are passed', function () {
        expect(add(2,3)).toBe(5);
        expect(add(-3,-9)).toBe(-12);
        expect(add("5", 6)).toBe(11);
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN if either input parsed is NaN', function () {
        expect(add("banana","split")).toBe("NaN");
    });
})