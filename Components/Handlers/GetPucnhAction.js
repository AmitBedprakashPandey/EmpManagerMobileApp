import {
    collection,    
    getDoc,    
    getDocs,
    
  } from "firebase/firestore";
  import { DB } from "../config/firebase";
import { useEffect } from "react";
const PunchActionCollectionRef = collection(DB, "PunchAction");
export default function GetPunchAction (props){
    const GetPunchaction =async()=>{
        const datas = await  getDoc(PunchActionCollectionRef,1);
       console.log(datas);
       
        
    }

    
    useEffect(()=>{

    },[])
    
}