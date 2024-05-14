import './store.css';

export default function Store(){
    return(
        <div>
            <div className="store-bg"></div>
            <div className='context-outer-box'>
                <div className='context-inner-box'>
                    <div style={{textAlign:'center'}}>
                        <p className='typewriter'>뭐가 필요하니? 필요한게 있으면 말해보렴.</p>
                    </div>
                </div>
            </div>
            <div className='item-container'>

            </div>
        </div>
    )
}