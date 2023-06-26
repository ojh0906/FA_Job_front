import dayjs from "dayjs";
import router from '@/_router';
import { useCommonStore } from '@/_stores';

export default {
  methods: {
    goToPage(name){
      router.push({name:name});
    },
    goToDetail(name, key){
      router.push({name:name, query:{key:key}});
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
    getFieldList(type_name){
      const commonStore = useCommonStore();
      return commonStore.field.filter(f => f.type_name === type_name);
    },
    getFieldName(field){
      if(field === 0) return '';
      const commonStore = useCommonStore();
      return commonStore.field[commonStore.field.findIndex(f => f.field === field)].name;
    },
    getPageNums(total, pages){
      pages.pagesList = [];
      pages.end_page = Math.ceil(total / pages.page_block)
      let pagesList = [];

      pages.start = (Math.ceil(pages.page / pages.num_block) - 1) * pages.num_block + 1;
      pages.end = pages.start + pages.num_block;
      if(pages.end > pages.end_page){
        pages.end = pages.end_page + 1;
      }

      for (let i = pages.start; i < pages.end; i++) {
        pages.pagesList.push(i)
      }

      return pages;
    }
  },
};
