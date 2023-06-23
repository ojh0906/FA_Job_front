import dayjs from "dayjs";
import router from '@/_router';
import { useCommonStore } from '@/_stores';

export default {
  methods: {
    goToPage(name){
      router.push({name:name});
    },
    getFirstImagePath: (data) => {
      if (
        data !== "" &&
        data !== "[]" &&
        typeof data !== "undefined" &&
        data != null
      ) {
        let file = JSON.parse(data);
        // console.log("getFirstImagePath", data);
        return `${import.meta.env.VITE_FILE_URL}${file[0].path}`;
      }
      return "";
    },
    getImagePath: (data) => {
      return `${import.meta.env.VITE_FILE_URL}${data}`;
    },
    getFileDownPath: (data) => {
      return `${import.meta.env.VITE_API_URL}/file/download?path=${data.path}&name=${data.name}`;
    },
    addComma(number) {
      const result = Number.isInteger(number)
        ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : 0;
      return result;
    },
    differenceDate(start, end, unit = "d") {
      // console.log(dayjs(start));
      const start_date = dayjs(start);
      const end_date = dayjs(end);
      // return 0;
      return end_date.diff(start_date, unit);
    },
    formattedDate(value, format = "YYYY.MM.DD") {
      return dayjs(value).format(format);
    },
    showEnterContent(content){
      if(content != null){
        return content.replaceAll(/(\n|\r\n)/g,'<br>');
      } else {
        return '';
      }
    },
    getFieldName(field){
      const commonStore = useCommonStore();
      return commonStore.field[commonStore.field.findIndex(f => f.field === field)].name;
    },
  },
};
