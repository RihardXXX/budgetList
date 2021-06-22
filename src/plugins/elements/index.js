import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import Element from 'element-ui';

// import {
//   Button,
//   Card,
//   Form,
//   FormItem,
//   Input,
//   Select,
//   Option,
// } from 'element-ui';

// const elements = [Button, Card, Form, FormItem, Input, Select, Option];

// locale to English
locale.use(lang);
Vue.use(Element);

// elements.forEach((element) => Vue.use(element, { locale }));
