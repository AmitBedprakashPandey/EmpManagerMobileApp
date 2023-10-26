import { openDatabase } from 'react-native-sqlite-storage';
var DB = openDatabase({ name: 'UserDatabase.db' });
export default DB;