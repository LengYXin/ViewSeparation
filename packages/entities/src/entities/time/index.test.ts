import { EntitiesTimeStore } from './index'
jest.useFakeTimers()
it('test', async () => {
    const time = new EntitiesTimeStore();
    console.log("TCL: time", time)
    await time.onTest()
});
