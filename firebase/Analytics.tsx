import { getAnalytics } from "firebase/analytics";
import app from "./clientApp"

const anaytics = getAnalytics(app);

export default anaytics;
