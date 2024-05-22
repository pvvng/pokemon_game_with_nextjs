export default function LoadingDetail(){
    return (
        <div style={{position: "fixed", top:0, width:'100vw'}}>
            <div className="sky-bg">
                <div style={{textAlign:'center'}}>
                    <h2 className="typewriter" style={{fontSize:'2rem', fontWeight:'bold', color:'white'}}>LOADING...</h2>
                </div>  
                <div  style={{maxWidth:'728px', marginLeft:'auto', marginRight:'auto'}}>
                    <img src='/images/pikachu-dancing.gif' width={'100%'}/>
                </div>
                <img src='/images/grass.png' width={'100%'}/>
            </div>
        </div>
    )
}