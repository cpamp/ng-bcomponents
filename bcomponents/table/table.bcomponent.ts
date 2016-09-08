import {Component, Input} from '@angular/core';
import {BComponent, BComponentInputs} from '../bcomponent';

@Component({
    selector: "bc-table",
    templateUrl: "table.bcomponent.html",
    inputs: BComponentInputs
})
export class TableBComponent extends BComponent {
    @Input() items: any[];
    @Input() headers: any[];
    @Input() striped: boolean;

    constructor() {
        super("table");
    }

    public Initialize = (items: any[] = [], headers: any[] = null, striped: boolean = false): TableBComponent => {
        this.items = items;
        this.headers = headers;
        this.striped = striped;
        if(this.ngOnChildChanges != null) this.ngOnChildChanges();
        return this;
    }

    extractHeaders = (object: any): any[] => {
        return Object.getOwnPropertyNames(object);
    }

    extractRows = (object: any[]): any[] => {
        var result = [];
        for(var i = 0; i < object.length; i++) {
            var row = [];
            for(var column in object[i]) {
                row.push(object[i][column])
            }
            result.push(row);
        }
        return result;
    }

    ngOnChildChanges = () => {
        if(this.striped) {
            this.baseClass = "table table-striped";
        }

        if(this.items.length > 0 && this.items[0].constructor !== Array) {
            this.headers = this.extractHeaders(this.items[0]);

            var rows = [];
            rows = this.extractRows(this.items);
            this.items = rows;
        }
    }
}