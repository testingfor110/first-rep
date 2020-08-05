import { LightningElement, api } from 'lwc';

export default class CurrentDateTIme extends LightningElement {
    @api tdate;
    tdate = new Date().toDateString();
}