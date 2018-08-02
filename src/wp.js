import WPAPI from 'wpapi';
import { Config } from "./config";
export default new WPAPI({
  endpoint: `${Config.apiUrl}/wp-json`
})