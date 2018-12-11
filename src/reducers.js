import {
  CHANGE_TALHAO_NOME,
  CHANGE_TALHAO_VARIEDADE,
  CHANGE_TALHAO_AREA,
  CHANGE_TALHAO_DATA,
  CHANGE_LOGIN_EMAIL,
  CHANGE_LOGIN_PASSWORD,
  DATA_TABLE_INSERT,
  DATA_TABLE_DELETE,
  CHANGE_FAZENDA_NOME,
  CHANGE_FAZENDA_CNPJ,
  CHANGE_FAZENDA_IE,
  CHANGE_FAZENDA_END,
  CHANGE_FAZENDA_BAIRRO,
  CHANGE_FAZENDA_COMP,
  CHANGE_FAZENDA_CEP,
  CHANGE_FAZENDA_COORDENADAS,
  CHANGE_FAZENDA_TEL,
  CHANGE_FAZENDA_PROPIETARIO
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
//------------------------------------------FAZENDA-----------------------------------------------
const initialFieldValues = {
  faznom: "",
  fazcnpj: "",
  fazinscestadual: "",
  fazareatot: "",
  fazend: "",
  fazbai: "",
  fazcomp: "",
  fazcep: "",
  fazcoord: "",
  faztel: "",
  fazprop: ""
};

export const changeFieldsFazenda = (
  state = initialFieldValues,
  action = {}
) => {
  switch (action.type) {
    case CHANGE_FAZENDA_NOME:
      return Object.assign({}, state, { faznom: action.payload });
    case CHANGE_FAZENDA_CNPJ:
      return Object.assign({}, state, { fazcnpj: action.payload });
    case CHANGE_FAZENDA_IE:
      return Object.assign({}, state, { fazinscestadual: action.payload });
    case CHANGE_FAZENDA_END:
      return Object.assign({}, state, { fazend: action.payload });
    case CHANGE_FAZENDA_BAIRRO:
      return Object.assign({}, state, { fazbai: action.payload });
    case CHANGE_FAZENDA_COMP:
      return Object.assign({}, state, { fazcomp: action.payload });
    case CHANGE_FAZENDA_CEP:
      return Object.assign({}, state, { fazcep: action.payload });
    case CHANGE_FAZENDA_COORDENADAS:
      return Object.assign({}, state, { fazcoord: action.payload });
    case CHANGE_FAZENDA_TEL:
      return Object.assign({}, state, { faztel: action.payload });
    case CHANGE_FAZENDA_PROPIETARIO:
      return Object.assign({}, state, { fazprop: action.payload });
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
