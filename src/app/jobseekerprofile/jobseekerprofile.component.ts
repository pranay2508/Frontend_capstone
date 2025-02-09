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
      location: '',
      summary: ''
    },
    workExperience: [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    education: [{
      institution: '',
      degree: '',
      field: '',
      graduationYear: ''
    }],
    skills: [''],
    preferences: {
      jobType: '',
      expectedSalary: '',
      preferredLocation: '',
      remoteWork: false
    }
  };

  addWorkExperience() {
    this.profile.workExperience.push({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
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
      field: '',
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
