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

//------------------------------------TALHAO-----------------------------------------------
export const setFieldsTalhao = (ename, text) => {
  switch (ename) {
    case "nometalhao":
      return { type: CHANGE_TALHAO_NOME, payload: text };
    case "areatalhao":
      return { type: CHANGE_TALHAO_AREA, payload: text };
    case "varitalhao":
      return { type: CHANGE_TALHAO_VARIEDADE, payload: text };
    case "dttalhao":
      return { type: CHANGE_TALHAO_DATA, payload: text };
    default:
      return;
  }
};
export const setDataTable = (id, talhao, area, variedade, dtplantio) => {
  return {
    type: DATA_TABLE_INSERT,
    payload: {
      id: id,
      talhao: talhao,
      area: area,
      variedade: variedade,
      dtplantio: dtplantio
    }
  };
};
export const deleteDataTable = id => {
  return {
    type: DATA_TABLE_DELETE,
    id: id
  };
};
//-----------------------------------------------------------------------------------
//---------------------------------LOGIN--------------------------------------------------
export const setFieldsLogin = (ename, text) => {
  switch (ename) {
    case "email-address":
      return { type: CHANGE_LOGIN_EMAIL, payload: text };
    case "password":
      return { type: CHANGE_LOGIN_PASSWORD, payload: text };
    default:
      return;
  }
};
