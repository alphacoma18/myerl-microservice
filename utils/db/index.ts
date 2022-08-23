import mongoose, { Connection, ConnectOptions } from "mongoose";
import { Schema, model, connect } from "mongoose";

interface IERL {
	encrypted_url: string;
	generated_url: string;
	post_date: Date;
}
const ERLSchema = new Schema<IERL>({
	encrypted_url: {
		type: String,
		required: true,
	},
	generated_url: {
		type: String,
		required: true,
	},
	post_date: {
		type: Date,
		required: true,
	},
});
const ERL = model<IERL>("ERL", ERLSchema);
run().catch((err) => console.log(err));
async function run() {
	await connect(process.env.MONGO_DEV_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
		poolSize: parseInt(process.env.POOL_SIZE!),
	} as ConnectOptions);
	console.log("Connected to Distribution API Database - Initial Connection");
}
run();

export default ERL;
