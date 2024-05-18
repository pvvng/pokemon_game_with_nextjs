import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginForm ({session}){
    if(session !== null){
        return(
            <div className="login-form-outer-container">
                <div className='login-form-inner-container'>
                <h2 style={{marginBottom:'20px'}}>회원가입을 해주세요</h2>
                    <form action='/api/post/userdata' method="post">
                        <div className="input-container row">
                            <div className='col-2'>
                                <label htmlFor='name'>이름</label>
                            </div>
                            <div className='col-10'>
                                <input id='name' name="name" defaultValue={session.user.name}/>
                            </div>
                        </div>
        
                        <div className="input-container row">
                            <div className='col-2'>
                                <label htmlFor='email'>이메일</label>
                            </div>
                            <div className='col-10'>
                                <input style={{background:'#eee'}} id='email' readOnly name="email" type="email" defaultValue={session.user.email}/>
                            </div>
                        </div>
        
                        <div className="input-container row">
                            <div className='col-2'>
                                <label htmlFor='gender'>성별</label>
                            </div>
                            <div className='col-10'>
                                <select id='gender' name="gender">
                                    <option>남</option>
                                    <option>여</option>
                                    <option disabled>옵티머스프라임</option>
                                </select>
                            </div>
                        </div>

                        {/* hidden inputs */}
                        <input name='notorious' defaultValue={0} style={{display:'none'}}/>
                        <input name='gold' defaultValue={500} style={{display : 'none'}}/>
                        <input name='ball' defaultValue={5} style={{display :'none'}}/>
                        <input name='medi' defaultValue={5} style={{display :'none'}}/>
                        <input name='script' defaultValue={0} style={{display :'none'}}/>
        
                        <button type="submit" className="btn btn-primary">회원가입</button>
                    </form>
                </div>
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