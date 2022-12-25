import { getAnalytics } from "firebase/analytics";
import app from "./FirebaseApp";

const anaytics = getAnalytics(app);

export default anaytics;
