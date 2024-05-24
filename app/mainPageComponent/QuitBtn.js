'use client'

import axios from "axios"
import { useRouter } from "next/navigation"

export default function ({userdata}){

    console.log(userdata)

    let router = useRouter();

    return <button className="btn btn-danger" onClick={()=>{
        axios.delete('api/delete/userdata', {data : userdata._id})
        alert('탈퇴 완료')
        router.refresh();
    }}>회원 탈퇴</button>
}