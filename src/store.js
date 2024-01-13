import { reactive } from "vue";

export const  store =reactive({
endpoint_1:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
cardlist:[],
endpoint:'https://db.ygoprodeck.com/api/v7/archetypes.php',
arc:[],
ricerca: ""
});