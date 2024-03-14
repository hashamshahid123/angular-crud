import { Directive, Input, Output } from "@angular/core";
import EventEmitter from "events";

@Directive({
  selector: '[appReadonly]',
  standalone: true
})
export class ReadonlyDirective {
// @Output() readonlyStatus=new EventEmitter<>

@Output() readonlyStatus = new EventEmitter();


@Input() set appReadonly(v : any) {
  this.readonlyStatus.emit(v)
}

  constructor() { }

}
