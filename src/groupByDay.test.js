import groupByDay from './groupByDay';

describe('groupByDay', () => {
    it('should aggregate events by day', () => {
        const events = [
            { createdAt: '2019-01-05T12:56:31.039Z', label: 'foo1' },
            { createdAt: '2019-01-05T09:12:43.456Z', label: 'foo2' },
            { createdAt: '2019-01-04T12:34:56.789Z', label: 'foo3' },
        ];
        expect(groupByDay(events)).toEqual({
            days: ['2019-01-04T23:00:00.000Z', '2019-01-03T23:00:00.000Z'],
            eventsByDay: {
                '2019-01-04T23:00:00.000Z': [
                    {
                        createdAt: '2019-01-05T12:56:31.039Z',
                        label: 'foo1',
                    },
                    {
                        createdAt: '2019-01-05T09:12:43.456Z',
                        label: 'foo2',
                    },
                ],
                '2019-01-03T23:00:00.000Z': [
                    {
                        createdAt: '2019-01-04T12:34:56.789Z',
                        label: 'foo3',
                    },
                ],
            },
        });
    });
});
