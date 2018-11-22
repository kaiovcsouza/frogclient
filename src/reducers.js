import {
  CHANGE_TALHAO_NOME,
  CHANGE_TALHAO_VARIEDADE,
  CHANGE_TALHAO_AREA,
  CHANGE_TALHAO_DATA,
  DATA_TABLE_INSERT,
  DATA_TABLE_DELETE
} from "./constants.js";

const initialStateField = {
  fazid: "",
  idtalhao: "",
  nomeTalhao: "",
  areaTalhao: "",
  variedadeTalhao: "",
  dtpTalhao: ""
};

export const changeFields = (state = initialStateField, action = {}) => {
  switch (action.type) {
    case CHANGE_TALHAO_NOME:
      return Object.assign({}, state, { nomeTalhao: action.payload });
    case CHANGE_TALHAO_VARIEDADE:
      return Object.assign({}, state, { variedadeTalhao: action.payload });
    case CHANGE_TALHAO_AREA:
      return Object.assign({}, state, { areaTalhao: action.payload });
    case CHANGE_TALHAO_DATA:
      return Object.assign({}, state, { dtpTalhao: action.payload });
    default:
      return state;
  }
};

const initialDataTable = {
  data: []
};

export const changeDataTable = (state = initialDataTable, action = {}) => {
  switch (action.type) {
    case DATA_TABLE_INSERT:
      return Object.assign({}, state, {
        data: [
          ...state.data,
          {
            id: action.payload.id,
            talhao: action.payload.talhao,
            area: action.payload.area,
            variedade: action.payload.variedade,
            dtplantio: action.payload.dtplantio
          }
        ]
      });
    case DATA_TABLE_DELETE:
      const newData = state.data.filter(row => {
        return action.id !== row.id;
      });
      return {
        ...state,
        data: newData
      };
    default:
      return state;
  }
};
