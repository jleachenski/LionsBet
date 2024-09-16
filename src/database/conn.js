import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://jleachenski:ISSIN64KOwheXth2@cluster0.osw4i.mongodb.net/";
const database = "lionsbet";

const main = async () => {
  try {
    await mongoose.connect(mongoDB + database);
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;
