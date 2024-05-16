import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm ({session}){
    if(session !== null){
        return(
            <div className="login-form-container">
                <h2>회원가입을 해주세요</h2>
                <form action='/api/post/userdata' method="post">
                    <div className="input-container">
                        <label htmlFor='name'>이름</label>
                        <input id='name' name="name" defaultValue={session.user.name}/>
                    </div>
    
                    <div className="input-container">
                        <label htmlFor='email'>이메일</label>
                        <input id='email' readOnly name="email" type="email" defaultValue={session.user.email}/>
                    </div>
    
                    <div className="input-container">
                        <label htmlFor='gender'>성별</label>
                        <select id='gender' name="gender">
                            <option>남</option>
                            <option>여</option>
                            <option disabled>옵티머스프라임</option>
                        </select>
                    </div>

                    {/* hidden inputs */}
                    <input name='notorious' defaultValue={0} style={{display:'none'}}/>
                    <input name='gold' defaultValue={0} style={{display : 'none'}}/>
                    <input name='award' defaultValue={'[]'} style={{display : 'none'}}/>
    
                    <button type="submit" className="btn btn-primary">회원가입</button>
                </form>
            </div>
        )
    }else{
        return(
          <div>
            <h2 style={{textAlign:'center', fontWeight:'bold'}}>로그인이 필요한 페이지입니다</h2>
          </div>
        )
      }
}