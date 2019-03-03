/* eslint-disable global-require */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Action Types
import {
  TODOS_GET_TODOS,
  TODOS_CREATE_TODO
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
    mockTodo,
    {
      ...mockTodo,
      name: 'foobaz'
    }
  ]
};

const mockOnError = jest.fn();

/* eslint-disable no-unused-vars */
// I don't like using this, but it will be removed when I
// implement Notifications.
const console = {
  error: mockOnError
};

const mockServicesSuccess = () => ({
  getTodos: jest.fn(() => Promise.resolve(mockTodos)),
  createTodo: jest.fn(() => Promise.resolve(mockTodo))
});

const mockServicesFailure = () => ({
  getTodos: jest.fn(() => Promise.reject()),
  createTodo: jest.fn(() => Promise.reject())
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
      const { getAllTodos } = require('./index');
      const expected = [];

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
      const { createSingleTodo } = require('./index');

      const expected = [
        {
          type: TODOS_CREATE_TODO,
          payload: mockTodo
        },
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
      const { createSingleTodo } = require('./index');
      const expected = [];

      expect.assertions(1);

      return store.dispatch(createSingleTodo())
        .then(() => {
          expect(store.getActions()).toEqual(expected);
        });
    });
  });
});
