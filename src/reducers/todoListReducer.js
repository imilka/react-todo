const initialState = [
  {
    id: 1,
    description: "Todo item 1",
    completed: false
  },
  {
    id: 2,
    description: "Todo item 2",
    completed: true
  },
  {
    id: 3,
    description: "Todo item 3",
    completed: false
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    default:
      return state
  }
}
