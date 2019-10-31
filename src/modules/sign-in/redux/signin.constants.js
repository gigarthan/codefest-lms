import { createTypes, async } from "redux-action-creator";

const types = createTypes([...async("SIGN_IN"), "SIGN_OUT"], "AUTH");

export default types;
