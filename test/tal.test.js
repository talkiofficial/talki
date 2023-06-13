const { expect } = require("chai");

describe("TAL", function() {
    it("Should return the new greeting once it's changed", async function() {
        const Tal = await ethers.getContractFactory("TALToken");
        const tal = await Tal.deploy();

    });
});