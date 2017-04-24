import * as EventApiUtil from '../util/event_api_util';
import { receiveErrors } from './session_actions';
import { hashHistory } from 'react-router';

export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const fetchEvent = (eventId) => {
  return (dispatch) => {
    return EventApiUtil.fetchEvent(eventId)
      .then( event => dispatch(receiveEvent(event)),
              err => dispatch(receiveErrors(err)))
  };
};

export const createEvent = (event) => {
  return (dispatch) => {
    return EventApiUtil.createEvent(event)
      .then( event => dispatch(receiveEvent(event)),
              err => dispatch(receiveErrors(err)))
  };
};

export const updateEvent = (event) => {
  return (dispatch) => {
    return EventApiUtil.updateEvent(event)
      .then( event => dispatch(receiveEvent(event)),
              err => dispatch(receiveErrors(err)))
  };
};

export const deleteEvent = (eventId) => {
  return (dispatch) => {
    return EventApiUtil.deleteEvent(eventId)
      .then( event => dispatch(receiveEvent({})),
              err => dispatch(receiveErrors(err)))
  };
};