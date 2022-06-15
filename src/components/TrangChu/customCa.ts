export const customCa = {

    months: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],

    weekDays: [
      {
        name: "Chủ nhật", 
        short: "CN", 
        isWeekend: true, 
      },
      {
        name: "Thứ 2",
        short: "T2",
      },
      {
        name: "Thứ 3",
        short: "T3",
      },
      {
        name: "Thứ 4",
        short: "T4",
      },
      {
        name: "Thứ 5",
        short: "T5",
      },
      {
        name: "Thứ 6",
        short: "T6",
      },
      {
        name: "Thứ 7",
        short: "T7",
        isWeekend: true,
      },
    ],
 
    weekStartingIndex: 0,
 
    getToday(gregorainTodayObject: any) {
      return gregorainTodayObject;
    },
  

    toNativeDate(date: any) {
      return new Date(date.year, date.month - 1, date.day);
    },

    getMonthLength(date: any) {
      return new Date(date.year, date.month, 0).getDate();
    },

    transformDigit(digit: any) {
      return digit;
    },

    nextMonth: "Tháng sau",
    previousMonth: "Tháng trước",
    openMonthSelector: "Open Month Selector",
    openYearSelector: "Open Year Selector",
    closeMonthSelector: "Close Month Selector",
    closeYearSelector: "Close Year Selector",
    defaultPlaceholder: "Select...",

    from: "from",
    to: "to",

    digitSeparator: ",",

    yearLetterSkip: 0,

    isRtl: false,
  };