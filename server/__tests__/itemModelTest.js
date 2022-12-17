const { Item } = require("../models/index");
const { sequelize } = require("../db");
const regeneratorRuntime = require("regenerator-runtime");

describe("Item model", () => {
    beforeAll(async () => {
        // The 'sync' method will create tables based on the model classes
        // 'force:true' tables are recreated each time the tests are run
        await sequelize.sync({ force: true });
    });

    test("Can create an Item", async () => {
        const itemTest = await Item.create({
            name: "ItemName",
            description: "No description",
            price: 150.99,
            category: "Toys",
            image: "imageURL",
        });

        expect(itemTest).toBeInstanceOf(Item);
        expect(itemTest.name).toBe("ItemName");
    });
});
