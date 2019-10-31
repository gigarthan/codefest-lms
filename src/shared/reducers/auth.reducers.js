import types from "../../modules/sign-in/redux/signin.constants";

const initialState = {
  token: null,
  role: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case types.SIGN_IN_SUCCESS: {
      const { token, role } = payload;
      return {
        token,
        role
      };
    }

    case types.SIGN_OUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
