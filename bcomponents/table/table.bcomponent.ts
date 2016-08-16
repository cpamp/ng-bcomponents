import {Component} from '@angular/core';
import {BComponent, BComponentAttributes, BComponentInputs} from '../bcomponent';

@Component({
    selector: "table-bcomponent",
    templateUrl: "table.bcomponent.html",
    directives: [BComponentAttributes],
    inputs: BComponentInputs.concat(['items', 'headers', 'striped'])
})
export class TableBComponent extends BComponent {
    public items: any[];
    public headers: any[];
    public striped: boolean;

    constructor() {
        super("table");
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