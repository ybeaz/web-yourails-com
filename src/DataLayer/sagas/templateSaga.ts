import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnector } from '../../CommunicationLayer/templateConnector'
import { GetRecipeDocument } from '../../types/graphql'
import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'

function* template(input: any) {
  const { data: variables } = input

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    /**
     * @description Code snippet to use axios as a connector client
     * @example: */
    const { client, params } = templateConnector(variables)
    const {
      data: { data },
    } = yield client.post('', params)

    // const { data } = yield apolloClient.query({
    //   query: GetRecipeDocument,
    //   variables,
    // })

    yield put(actionAsync.TEMPLATE_ASYNC.SUCCESS(data))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    const err: any = error
  }
}

/**
 * @description Function to templateSaga
 * @import import templateSaga from './sagas/templateSaga'
 */
export default function* templateSaga() {
  yield takeEvery([actionAsync.TEMPLATE_ASYNC.REQUEST().type], template)
}
