import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ReadonlyDirective } from './readonly.directive';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,ReadonlyDirective],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  form!: FormGroup;
  readonly : boolean=false;

  constructor(public postService: PostService, private router: Router,private fb:FormBuilder) {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   body: new FormControl('', Validators.required)
    // })

    this.form = this.fb.group({
      title: ['', Validators.required], // Pass initial value and validators
      body: ['', Validators.required]
    });
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.readonly=true;
    // this.postService.create(this.form.value).subscribe((res:any)=> {
    //   alert("Post Created Successfull")
    //   this.router.navigateByUrl("post/index")
    // })
    
  }

  readonlyStatus(e:any){

  }
}
