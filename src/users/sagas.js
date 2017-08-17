import { takeEvery, call, fork, put } from "redux-saga/effects";
import { schema } from "normalizr";

import { formatUserObject } from "users/helpers";
import { callApi, apiPut } from "utils/api";
import { FundraiserSchema } from "fundraisers/sagas";
import * as actions from "users/actions";
import {
  createTextNotification,
  createErrorNotification
} from "notifications/actions";

export const UserSchema = new schema.Entity("user", {
  fundraisers: [FundraiserSchema]
});

/**
 * Fetch a single user by their ID
 * @param {number} payload - User ID
 */
export function* fetchUserById({ payload }) {
  return yield call(callApi, `/riders/${payload}`, {}, UserSchema);
}

/**
 * Fetch all users by the ride they are riders on
 * @param {number} payload - Ride ID
 */
export function* fetchUsersByRide({ payload }) {
  return yield call(callApi, `/rides/${payload}/riders`, {}, [UserSchema]);
}

/**
 * Update the user record
 * @param {Object} payload - Updated user object
 */
export function* updateUser({ payload }) {
  const user = yield call(formatUserObject, payload);
  const { error } = yield call(apiPut, `/riders/${payload.id}`, user, UserSchema);

  if (!error) {
    yield put(createTextNotification("Profile updated"));
  } else {
    yield put(createErrorNotification("Whoops - we couldn't update your profile"));
  }
}

export default function* root() {
  yield [
    fork(takeEvery, actions.FETCH_USER_BY_ID, fetchUserById),
    fork(takeEvery, actions.FETCH_USERS_BY_RIDE, fetchUsersByRide),
    fork(takeEvery, actions.UPDATE_USER, updateUser)
  ];
}
