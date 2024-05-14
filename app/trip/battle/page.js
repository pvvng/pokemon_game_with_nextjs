import 'bootstrap/dist/css/bootstrap.min.css';
import './battle.css'

export default function Battle (){

    return(
        <div className='container'>
            <div className='main-container'>
                <div className='inner-container'>
                    <div className='row-container row'>
                        <div className='col-6'></div>
                        <div className='col-6' style={{backgroundColor:'#eee'}}>
                            상대 포켓몬
                        </div>
                    </div>
                </div>
                <div className='inner-container'>
                    <div className='row-container row'>
                        <div className='col-6' style={{backgroundColor:'#eee'}}>
                            내 포켓몬
                        </div>
                        <div className='col-6'></div>
                    </div>
                </div>
            </div>

            <div className='content-container'>
                <div className='row'>
                    <div className='col-3'>버튼1</div>
                    <div className='col-3'>버튼2</div>
                    <div className='col-3'>버튼3</div>
                    <div className='col-3'>버튼4</div>
                </div>
                <div>
                    버튼 내용에 따른 컨텐츠
                </div>
            </div>
        </div>
    )
}