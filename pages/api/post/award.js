export default async function handler (요청, 응답){
    console.log(1111)
    응답.status(200).json('와씀')
}