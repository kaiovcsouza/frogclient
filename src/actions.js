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
//-------------------------------------------FAZENDAS--------------------------------
export const setFieldsFazendas = (ename, text) => {
  switch (ename) {
    case "faznom":
      return { type: CHANGE_FAZENDA_NOME, payload: text };
    case "fazcnpj":
      return { type: CHANGE_FAZENDA_CNPJ, payload: text };
    case "fazinscestadual":
      return { type: CHANGE_FAZENDA_IE, payload: text };
    case "fazend":
      return { type: CHANGE_FAZENDA_END, payload: text };
    case "fazbai":
      return { type: CHANGE_FAZENDA_BAIRRO, payload: text };
    case "fazcomp":
      return { type: CHANGE_FAZENDA_COMP, payload: text };
    case "fazcep":
      return { type: CHANGE_FAZENDA_CEP, payload: text };
    case "fazcoord":
      return { type: CHANGE_FAZENDA_COORDENADAS, payload: text };
    case "faztel":
      return { type: CHANGE_FAZENDA_TEL, payload: text };
    case "fazprop":
      return { type: CHANGE_FAZENDA_PROPIETARIO, payload: text };
    default:
      return;
  }
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
