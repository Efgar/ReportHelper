export class DataField {
    name: string;
    mask: string;
    value: Object;
    detailLink: URL;

    constructor (receivedValue) {
        if (typeof receivedValue !== 'object') {
            this.value = receivedValue;
        } else {
            this.name = receivedValue.name;
            this.mask = receivedValue.mask;
            this.value = receivedValue.value;
            this.detailLink = receivedValue.detailLink;
        }
    }

}
