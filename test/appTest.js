import { assert } from "chai";
import numberConverter from "../app";

describe("Number Converter", () => {
  describe("handle valid input", () => {
    it("numberConverter should return a string", () => {
      let result = numberConverter(4);
      assert.typeOf(result, "string");
    });

    it("should return plong for 28", () => {
      let result = numberConverter(28);
      assert.equal(result, "Plong");
    });
    it("should return plingplang for 1755", () => {
      let result = numberConverter(1755);
      assert.equal(result, "PlingPlang");
    });

    it("should return Plang for 10", () => {
      let result = numberConverter(10);
      assert.equal(result, "Plang");
    });

    it("should return PlingPlang for 15", () => {
      let result = numberConverter(15);
      assert.equal(result, "PlingPlang");
    });

    it("should return PlingPlang for 105", () => {
      let result = numberConverter(105);
      assert.equal(result, "PlingPlangPlong");
    });

    it("should return PlingPlang for 20", () => {
      let result = numberConverter(20);
      assert.equal(result, "Plang");
    });

    it("should return PlingPlangPlong for 21", () => {
      let result = numberConverter(21);
      assert.equal(result, "PlingPlong");
    });

    it("should return Pling for 3", () => {
      let result = numberConverter(3);
      assert.equal(result, "Pling");
    });

    it("should return plang  for 100", () => {
      let result = numberConverter(100);
      assert.equal(result, "Plang");
    });
  });

  describe("handle invalid input", () => {
    it("should return an error for a string", () => {
      let result = numberConverter("String");
      assert.equal(result, "Number not valid please enter a valid Number.");
    });
  });

  it("should return an error if the parameters is empty", () => {
    let result = numberConverter();
    assert.equal(result, "Number not valid please enter a valid Number.");
  });
});
