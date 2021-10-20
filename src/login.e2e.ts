import { Selector } from 'testcafe';

fixture('FOO')
    .page(`https://www.google.com`)

test
    ('BAR', async t => {
        await t.expect(Selector('div').exists).ok();
    });