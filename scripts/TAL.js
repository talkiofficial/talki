async function main() {
   
    const Tal = await ethers.getContractFactory("TALToken");
    const tal = await Tal.deploy();

    console.log("TALToken deployed to:", tal.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });