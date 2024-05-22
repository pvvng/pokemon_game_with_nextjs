// db에서 불러온 값과, 현재 user의 session 값을 매개변수로 가지는 함수

export default function userCheck(result, session){

  let exist = false;
  let userdata

  if (result.length !== 0 && session !== null){
    result.map(data => {
      //db와 session data 중 겹치는 email이 존재하면 exist 를 true로
      if(data.email === session.user.email){
        exist = true;
        if(userdata === undefined){
          userdata = data;
        }
      }
    })
  }

  return { exist, userdata }

}
