const { name, height, message } = require('./root.js');

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan');
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      expect(height).toBeLessThan(40);
    });
  });
  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toContain(name);
      expect(message).toContain(height.toString());
    });
  });
});

// The code below ensures that students who are using CodeGrade will get credit 
// for the code-along in Canvas; you can disregard it.

describe('', () => {
  describe('', () => {
    it('', () => {
      return true;
    });
  });
});