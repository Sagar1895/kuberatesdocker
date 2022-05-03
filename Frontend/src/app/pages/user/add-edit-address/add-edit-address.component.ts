import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-edit-address',
  templateUrl: './add-edit-address.component.html',
  styleUrls: ['./add-edit-address.component.scss']
})
export class AddEditAddressComponent implements OnInit, OnChanges {

  @Input() type: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.type);
  }

  ngOnInit(): void {
    
  }

  show: boolean = false;
  public deploymentName: any;
  showModal(){
    this.show = !this.show;
  }
  fnAddDeploytment(){
    alert(this.deploymentName);
  }


}
