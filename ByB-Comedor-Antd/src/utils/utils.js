/* eslint no-useless-escape:0 */
const reg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

export const searchTree = (element, matchProperty, matchingTitle) => {
  var result;
  element.some((e) => {
    if (
      e[matchProperty] == matchingTitle ||
      (matchingTitle == "" && e[matchProperty] == "inicio")
    ) {
      result = e;
      return result;
    }
    if (e.children)
      result = searchTree(e.children, matchProperty, matchingTitle);
    if (result) return result;
  });
  return result;
};

export const formatNumber = (number) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const formatted = Number(number).toLocaleString("es", options);
  return formatted;
};

export const setKeyTable = (dataArray, prefix = null, attribute = null) => {
  const clonedObj = JSON.parse(JSON.stringify(dataArray));
  if (clonedObj)
    clonedObj.forEach((data, index) => {
      if (!data.key) {
        if (attribute) {
          data.key = data[`${attribute}`];
        } else {
          data.key = prefix + index;
        }
      }
    });
  return clonedObj;
};

export const monthList = [
  { value: "Enero", readOnly: true, valueInt: 1 },
  { value: "Febrero", readOnly: true, valueInt: 2 },
  { value: "Marzo", readOnly: true, valueInt: 3 },
  { value: "Abril", readOnly: true, valueInt: 4 },
  { value: "Mayo", readOnly: true, valueInt: 5 },
  { value: "Junio", readOnly: true, valueInt: 6 },
  { value: "Julio", readOnly: true, valueInt: 7 },
  { value: "Agosto", readOnly: true, valueInt: 8 },
  { value: "Septiembre", readOnly: true, valueInt: 9 },
  { value: "Octubre", readOnly: true, valueInt: 10 },
  { value: "Noviembre", readOnly: true, valueInt: 11 },
  { value: "Diciembre", readOnly: true, valueInt: 12 },
];

//   console.log("SeccionDetalleTipoId para referencia > ", seccionDetalleTipoId);
//   console.log("Listado para insertar registro > ", listado);
//   let seccionIndex = listado.secciones.findIndex(
//     (s) =>
//       s.seccionesDetalleTipo.findIndex(
//         (sdt) => sdt.seccionDetalleTipoId == seccionDetalleTipoId
//       ) > -1
//   );
//   let seccionDetalleTipoIndex = listado.secciones[
//     seccionIndex
//   ].seccionesDetalleTipo.findIndex(
//     (x) => x.seccionDetalleTipoId == seccionDetalleTipoId
//   );
//   console.log(seccionDetalleTipoIndex);
//   console.log("Seccion Index > ", seccionIndex);
//   console.log("Seccion Detalle Tipo Index > ", seccionDetalleTipoIndex);
//   /*Copio el objeto anterior (la fila anterior)*/
//   let newRow = Object.assign(
//     {},
//     listado.secciones[seccionIndex].seccionesDetalleTipo[
//       seccionDetalleTipoIndex
//     ]
//   );
//   newRow.name = undefined;
//   newRow.orden = 3;
//   newRow.seccionDetalleTipoDescripcion = undefined;
//   newRow.seccionDetalleTipoId = Math.floor(Math.random() * 1000);
//   newRow.editable = true;
//   let newMesesArray = [];
//   newRow.meses.forEach((m) => {
//     let mTemp = Object.assign({}, m);
//     mTemp.editable = false;
//     mTemp.esTotal = false;
//     mTemp.seccionDetalleId = null;
//     mTemp.valor = 0;
//     m = mTemp;
//   });
//   // let seccionesDetalleTipoArrayNew = []
//   let seccionesDetalleTipoArrayNew = listado.secciones[
//     seccionIndex
//   ].seccionesDetalleTipo.map((sdt) => Object.assign({}, sdt));

//   seccionesDetalleTipoArrayNew.splice(seccionDetalleTipoIndex, 0, newRow);
//   listado.secciones[seccionIndex].seccionesDetalleTipo =
//     seccionesDetalleTipoArrayNew;
//   console.log("Nueva Fila > ", newRow);
//   return listado;
//   // var newRow = Object.assign({},record);
//   // newRow.class = 'text';
//   // newRow.seccionDetalleTipoId = null;
//   // newRow.name = ''
//   // monthList.forEach(month => {
//   //   let currentMonth = newRow[month.value.toLowerCase()];
//   //   currentMonth.class= 'disabled number';
//   //   currentMonth.editable= false;
//   //   currentMonth.esTotal= false;
//   //   currentMonth.seccionDetalleId= null;
//   //   currentMonth.valor= 0;
//   // });
// };
