const db = require("../data/dbConfig.js");

const { insert } = require('./hobbitsModel.js');

describe('hobits model', function() {
  describe('insert()', function () {
    // beforeAll();
    beforeEach(async () => {
      await db('hobbits').truncate();
    });

    // afterEach();
    // afterAll();

    it('should insert the expected hobbits', async function() {
      //insert a hobbit
      await insert({ name: "sam" });
      await insert({ name: "gandalf" });

      // check if it was inserted into the db
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
      expect(hobbits[0].name).toMatch("sam");
      expect(hobbits[1].name).toMatch("gandalf");
    });

    it("should return the inserted hobbit", async function() {
      let hobbit;
      hobbit = await insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
      expect(hobbit.id).toBeDefined(); // ensures it's not just sending the parameter back

      hobbit = await insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");
      expect(hobbit.id).toBeDefined();
    })
  });
});