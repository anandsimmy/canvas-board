
export const COLORS = ['blue', 'springgreen', 'royalblue', 'orange', 'violet',
'brown', 'chocolate', 'darksalmon'];

export const rowNumber = 8;
export const columnNumber = 8;

export const getBoxInitialState = () => Array(rowNumber).fill().map(() => Array(columnNumber).fill('white'));
