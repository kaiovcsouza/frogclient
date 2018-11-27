import {
  CHANGE_TALHAO_NOME,
  CHANGE_TALHAO_VARIEDADE,
  CHANGE_TALHAO_AREA,
  CHANGE_TALHAO_DATA,
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
  DATA_TABLE_INSERT,
  DATA_TABLE_DELETE
} from "./constants.js";

//----------------------------------------TALHAO--------------------------------------------------
const initialStateField = {
  fazid: "",
  idtalhao: "",
  nomeTalhao: "",
  areaTalhao: "",
  variedadeTalhao: "",
  dtpTalhao: ""
};
export const changeFieldsTalhao = (state = initialStateField, action = {}) => {
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
//------------------------------------------------------------------------------------------------
//------------------------------------------LOGIN-------------------------------------------------
const initialStateLoginfields = {
  signInEmail: "",
  signInPassword: ""
};
export const changeFieldsLogin = (
  state = initialStateLoginfields,
  action = {}
) => {
  switch (action.type) {
    case CHANGE_LOGIN_EMAIL:
      return Object.assign({}, state, { signInEmail: action.payload });
    case CHANGE_LOGIN_PASSWORD:
      return Object.assign({}, state, { signInPassword: action.payload });
    default:
      return state;
  }
};
//------------------------------------------------------------------------------------------------
