import { Component } from '@angular/core';

@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.css']
})
export class JobseekerprofileComponent {
  profile = {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      summary: ''
    },
    workExperience: [{
      company: '',
      position: '',
      duration: '',
      description: ''
    }],
    education: [{
      institution: '',
      degree: '',
      graduationYear: ''
    }],
    skills: [''],
    preferences: {
      preferredLocation: '',

    }
  };

  addWorkExperience() {
    this.profile.workExperience.push({
      company: '',
      position: '',
      duration: '',
      description: ''
    });
  }

  removeWorkExperience(index: number) {
    this.profile.workExperience.splice(index, 1);
  }

  addEducation() {
    this.profile.education.push({
      institution: '',
      degree: '',
      graduationYear: ''
    });
  }

  removeEducation(index: number) {
    this.profile.education.splice(index, 1);
  }

  addSkill() {
    this.profile.skills.push('');
  }

  removeSkill(index: number) {
    this.profile.skills.splice(index, 1);
  }

  onSubmit() {
    console.log('Profile submitted:', this.profile);
  }
}
