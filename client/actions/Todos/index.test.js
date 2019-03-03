/* eslint-disable global-require */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Action Types
import {
  TODOS_GET_TODOS,
  TODOS_CREATE_TODO,
  TODOS_SET_CUR_TODO
} from 'actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockTodo = {
  id: '2',
  name: 'foobar',
  completed: false,
  createdAt: 1551589812
};
const mockTodos = {
  data: [
    mockTodo
  ]
};

const mockNotificationSuccessObj = {
  type: 'NOTIFICATION_ADD',
  payload: {
    message: 'success message',
    type: 'success',
    id: 'foo'
  }
};

const mockNotificationFailureObj = {
  type: 'NOTIFICATION_ADD',
  payload: {
    message: 'error message',
    type: 'error',
    id: 'bad'
  }
};

// Mock Actions
const mockNotificationSuccess = () => ({
  toggleNotification: jest.fn(() => mockNotificationSuccessObj)
});

const mockNotificationFailure = () => ({
  toggleNotification: jest.fn(() => mockNotificationFailureObj)
});

// Mock Services
const mockServicesSuccess = () => ({
  getTodos: jest.fn(() => Promise.resolve(mockTodos)),
  createTodo: jest.fn(() => Promise.resolve(mockTodos)),
  deleteTodo: jest.fn(() => Promise.resolve({}))
});

const mockServicesFailure = () => ({
  getTodos: jest.fn(() => Promise.reject()),
  createTodo: jest.fn(() => Promise.reject()),
  deleteTodo: jest.fn(() => Promise.reject())
});

let store;

describe('Todo Actions', () => {
  beforeEach(() => {
    jest.resetModules();
    store = mockStore({});
  });

  describe('Getting Todos', () => {
    it('should successfully get all Todos', () => {
      jest.doMock('services/todos', mockServicesSuccess);
      const { getAllTodos } = require('./index');
      const expected = [{
        type: TODOS_GET_TODOS,
        payload: mockTodos.data
      }];

      expect.assertions(1);

      return store.dispatch(getAllTodos())
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    it('should throw an error on a bad get all Todos', () => {
      jest.doMock('services/todos', mockServicesFailure);
      jest.doMock('actions/Notifications', mockNotificationFailure);
      const { getAllTodos } = require('./index');
      const expected = [mockNotificationFailureObj];

      expect.assertions(1);

      return store.dispatch(getAllTodos())
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });
  });

  describe('Creating Todos', () => {
    it('should successfully create a Todo', () => {
      jest.doMock('services/todos', mockServicesSuccess);
      jest.doMock('actions/Notifications', mockNotificationSuccess);
      const { createSingleTodo } = require('./index');

      const expected = [
        {
          type: TODOS_CREATE_TODO,
          payload: [mockTodo]
        },
        mockNotificationSuccessObj,
        {
          type: TODOS_GET_TODOS,
          payload: mockTodos.data
        }
      ];

      expect.assertions(1);

      return store.dispatch(createSingleTodo(mockTodo))
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    it('should throw an error on a bad create Todo', () => {
      jest.doMock('services/todos', mockServicesFailure);
      jest.doMock('actions/Notifications', mockNotificationFailure);
      const { createSingleTodo } = require('./index');
      const expected = [mockNotificationFailureObj];

      expect.assertions(1);

      return store.dispatch(createSingleTodo())
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });
  });

  describe('Deleting Todos', () => {
    it('should successfully delete a Todo', () => {
      jest.doMock('services/todos', mockServicesSuccess);
      jest.doMock('actions/Notifications', mockNotificationSuccess);
      const { deleteSingleTodo } = require('./index');

      const expected = [
        {
          type: TODOS_GET_TODOS,
          payload: mockTodos.data
        },
        mockNotificationSuccessObj
      ];

      store = mockStore({
        todosReducer: {
          currentTodo: mockTodo
        }
      });

      expect.assertions(1);

      return store.dispatch(deleteSingleTodo())
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });

    it('should throw an error on a bad delete Todo', () => {
      jest.doMock('services/todos', mockServicesFailure);
      jest.doMock('actions/Notifications', mockNotificationFailure);
      const { deleteSingleTodo } = require('./index');
      const expected = [mockNotificationFailureObj];

      store = mockStore({
        todosReducer: {
          currentTodo: mockTodo
        }
      });

      expect.assertions(1);

      return store.dispatch(deleteSingleTodo())
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });
  });

  describe('Setting Todos', () => {
    it('should successfull set a current Todo', () => {
      const { setCurrentTodo } = require('./index');
      const expected = [
        {
          type: TODOS_SET_CUR_TODO,
          payload: mockTodo
        }
      ];

      store.dispatch(setCurrentTodo(mockTodo));
      expect(store.getActions()).toEqual(expected);
    });
  });
});
