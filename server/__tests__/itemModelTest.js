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

    test("Can update an Item", async () => {
        const itemTest = await Item.findByPk(1);

        expect(itemTest.name).toBe("ItemName");

        // Update and save new name in database
        itemTest.name = "UpdatedItem";
        await itemTest.save();

        expect(itemTest.name).toBe("UpdatedItem");
    });

    test("Can delete an Item", async () => {
        const itemToDelete = await Item.findByPk(1);

        expect(itemToDelete).toBeInstanceOf(Item);

        // Delete item from database
        await itemToDelete.destroy();

        // Try retrieving item again but will be null because it does
        // not exist in database anymore.
        const itemDeleted = await Item.findByPk(1);
        expect(itemDeleted).toBe(null);
    });
});
