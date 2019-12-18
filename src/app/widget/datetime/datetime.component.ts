import { Component, OnInit } from '@angular/core';
import { WidgetService } from 'src/app/services/widget.service';

@Component({
  selector: 'widget-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {

  constructor(
    public widgetService: WidgetService,
  ) { }

  ngOnInit() {}

}
