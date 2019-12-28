import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      // a reducer can listen to actions from other modules
      case '@auth/SIGN_IN_SUCCESS':
        draft.profile = action.payload.user;
        return;
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}
