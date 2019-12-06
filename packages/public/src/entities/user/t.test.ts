import { EntitiesUserStore } from './index'
jest.useFakeTimers()
it('test', async () => {
    const Store = new EntitiesUserStore();
    Store.onUpdate()
});
