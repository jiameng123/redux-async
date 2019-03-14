import isPromise from 'is-promise';

function  createRduxAsync(extraArgument) {
    return ({dispatch, getState}) =>  next => action => {
        console.log(action, 'action');
        console.log(next, 'next')

       return isPromise(action) ? action.then(dispatch): next(action)
      
    }
}

function * getList(parmas) {
    
    const rest = yield axios.get();

}

 const asyncChunk = createRduxAsync();
 export default asyncChunk;