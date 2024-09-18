const { Command } = require("commander");
const program = new Command();

const {
  addItem,
  removeItem,
  updateItem,
  fIndItem,
  seedData,
} = require("./Index");

program
  .name("trademe-cli")
  .description("To Seed data into mongodb for trade me")
  .version("0.8.0");

//Add Command
program
  .command("add <title> <description> <start_price> <reserve_price>")
  .alias("a")
  .description("add an item")
  .action((title, description, start_price, reserve_price) => {
    addItem({ title, description, start_price, reserve_price });
  });

//Find Command

program
  .command("find <title>")
  .alias("f")
  .description("find an item")
  .action((title) => {
    fIndItem({title});
  });

//Update command
program
  .command("update <id> <title> <description> <start_price> <reserve_price>")
  .alias("u")
  .description("update an item")
  .action((_id, title, description, start_price, reserve_price) => {
    updateItem({ _id, title, description, start_price, reserve_price });
  });

//Remove command

program
  .command("remove <_id>")
  .alias("r")
  .description("remove an item")
  .action((_id) => {
    removeItem({ _id });
  });

program
  .command("seedData")
  .alias("s")
  .description("Seed data into MongoDB")
  .action(() => {
    seedData();
  });

program.parse();
