import chain from 'chain';
import asynChunk from '../src';


describe('test', () => {
    const doDispatch = (a) => { console.log(a+'action')};
    const doGetState = () => {};

    it('test', () => {
        const action = asynChunk(doDispatch);
        function *a (ccc) {
            doDispatch('a');
            const res = yield new Promise(res => res(1000));
            doDispatch(res);
        };
        action(doDispatch)(a);
      
    });
})