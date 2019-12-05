import { EntitiesTestStore } from './index';
import { testDataSource } from '../../dataSource/test';
it('test', async () => {
    const testDs = new testDataSource();
    const test = new EntitiesTestStore();
    const data = await testDs.onGetMock();
    test.dataSource = data;
    // expect(test.dataSource.length)
    console.log("TCL: test.dataSource", test.dataSource)
});
