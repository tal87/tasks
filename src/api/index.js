import axios from "axios";

import { config } from "../config/debug";

export default axios.create({
  baseURL: config.baseURL
});
