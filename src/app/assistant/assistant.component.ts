import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-assistant',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './assistant.component.html',
  styleUrl: './assistant.component.scss'
})
export class AssistantComponent implements OnInit {

  selectedType: string = null;
  lawType: string[] = ['Civil','Criminal'];
  isLoading: boolean = false;
  isRequested: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
      this.isRequested = true;
      }
    });
  }

  selectLawType(type: string){
    this.selectedType = type;
  }

  toggleLoading() {
    this.isRequested = false;
    this.isLoading = !this.isLoading;
    
    // Simulate an asynchronous operation
    setTimeout(() => {
      // After some time, reset loading state
      this.isLoading = false;
      this.isRequested = true;
    }, 2000);
  }

}
