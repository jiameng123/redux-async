import isPromise from 'is-promise';


function  createRduxAsync(extraArgument) {
    return ({dispatch, getState}) => next => action => {
        
        if(Object.prototype.toString.call(action)=== '[object GeneratorFunction]') {
            const it = action(dispatch);

            function handle(itRes) {
                if(itRes.done) return;
                const itValue = itRes.value;
                if(isPromise(itValue)) {
                    itValue
                    .then(res => handle(it.next(res)))
                    .catch(e => it.throw(e))
                }
            }

            try {
                handle(it.next());
            } catch (error) {
                it.throw(e)
            }

        }
      
       return next(action)
      
    }
}

 const asyncChunk = createRduxAsync();
 export default asyncChunk;