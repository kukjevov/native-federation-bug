export type DochadzkaEventType = 'dayType'|'dochadzkaType';

export interface DayEvent
{
    type: DochadzkaDayData;
}

export interface DayData extends Omit<DayEvent, 'type'>
{
    type: 'dayType';
    dayOff?: boolean;
}

export interface DochadzkaDayData extends Omit<DayEvent, 'type'>
{
    type: 'dochadzkaType';
}