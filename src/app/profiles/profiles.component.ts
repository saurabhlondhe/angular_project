import { Component, OnInit } from '@angular/core';
import { studentData } from '../model/studentData.model';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
private emailID=""
  constructor() { }

  object: studentData[]=[
    {
      id:1,
      name: "Saurabh Londhe",
      email: "saurabh.londhe@emtecinc.com",
      mob: 8888603379,
      img:"https://saurabhlondhe.github.io/static/assets/img/landing/avatar.jpg"
    },
    {
      id:2,
      name: "Sonalkumar Kadelwar",
      email: "sonalkumar.k@emtecinc.com",
      mob: 8888603379,
      img:"../assets/img/sonalkumar.jpg"
    },
    {
      id:3,
      name: "Rohini jadhav",
      email: "rohini.jadhav@emtecinc.com",
      mob: 8888603379,
      img:"../assets/img/rohinijadhav.jpg"
    }
  ]

  ngOnInit() {
  }
  mailHim(e)
  {
    console.log("mail send to: "+e.target.value);
  }

}
