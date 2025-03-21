import { connect } from "mongoose";
import "dotenv/config";

const MDBS_URL = process.env.MDBS_URL;

export const dbConnection = async () => {
  try {
    await connect(`${MDBS_URL}/travel`);
    console.log("Database connected successfuly: ", `${MDBS_URL}/travel`);
  } catch (error) {
    console.log(error.message);
  }
}
