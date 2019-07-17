import { Component, OnInit } from '@angular/core';

import * as calendarRangeSrc from '!raw-loader!./examples/calendar-range-example.component.ts';
import * as calendarSingleSrc from '!raw-loader!./examples/calendar-single-example.component.ts';
import * as calendarMondayStartSrc from '!raw-loader!./examples/calendar-monday-start-example.component.ts';
import * as calendarIntlSrc from '!raw-loader!./examples/calendar-i18n-example.component.ts';
import * as calendarSingleFormSource from '!raw-loader!./examples/calendar-form-single-example.component.ts';
import * as calendarRangeFormSource from '!raw-loader!./examples/calendar-form-range-example.component.ts';
import * as calendarProgrammaticallySource from '!raw-loader!./examples/calendar-programmatically-change-example.component.ts';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar-docs.component.html'
})
export class CalendarDocsComponent implements OnInit {

    calendarSingleSource = calendarSingleSrc;
    calendarRangeSource = calendarRangeSrc;
    calendarMondayStartSource = calendarMondayStartSrc;
    calendari18nTs = calendarIntlSrc;
    calendarSingleFormSource = calendarSingleFormSource;
    calendarRangeFormSource = calendarRangeFormSource;
    calendarProgrammaticallySource = calendarProgrammaticallySource;

    exampleFunctionsHtml = `Example Disable and Block Functions: 

// Disable the weekends
myDisableFunction = function (d: FdDate): boolean {
    let day = d.toDate().getDay();
    return day === 6 || day === 0;
}

// Disable any weekday (Monday)
myDisableFunction2 = function(d: FdDate): boolean {
    let day = d.toDate().getDay();
    return day === 1;
}

// Disable past selection
myDisableFunction = function(d: FdDate): boolean {
    let today = new Date();
    today.setHours(0,0,0,0);
    return d.toDate().getTime() < today.getTime();
}

// Disable future selection
myDisableFunction = function(d: FdDate): boolean {
    let today = new Date();
    today.setHours(0,0,0,0); 
    return d.toDate().getTime() > today.getTime()
}

// Disable days before a particular day
myDisableFunction = function(d: FdDate): boolean {
    let day = new Date(2018, 9, 15);
    return d.toDate().getTime() < day.getTime();
}

// Disable days after a particular day
myDisableFunction = function(d: FdDate): boolean {
    let day = new Date(2018, 9, 5);
    return d.toDate().getTime() > day.getTime()
}

// Disable days within a range
myDisableFunction = function(d: FdDate): boolean {
    let firstDay = new Date(2018, 7, 5);
    let lastDay = new Date(2018, 7, 20);
    return d.toDate().getTime() > firstDay.getTime() && d.toDate().getTime() < lastDay.getTime()
}`;

    constructor() {}

    ngOnInit() {}
}
