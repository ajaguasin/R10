import Realm from "realm";

const Fave = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    fave_on: { type: "date", optional: false }
  }
};
const realm = new Realm({ schema: [Fave] });
export default realm;
