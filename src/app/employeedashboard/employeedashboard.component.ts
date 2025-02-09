import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent {
  jobSeekers: any[] = [];
  jobs: any[] = [];
  savedFilters: any[] = [];
  showCreateJob = false;
  selectedFilter: any = null;
  
  searchCriteria = {
    skills: '',
    minExperience: '',
    maxExperience: '',
    culturalFit: ''
  };

  searchCandidates() {
    // Mock data - replace with actual API call
    this.jobSeekers = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        experience: 5,
        preference: 'Remote',
        skills: ['Angular', 'TypeScript', 'Node.js']
      }
    ];
    console.log('Searching with criteria:', this.searchCriteria);
  }

  saveFilter() {
    const newFilter = {
      name: `Filter ${this.savedFilters.length + 1}`,
      skills: this.searchCriteria.skills.split(','),
      minExperience: this.searchCriteria.minExperience,
      maxExperience: this.searchCriteria.maxExperience
    };
    this.savedFilters.push(newFilter);
  }

  applyFilter(filter: any) {
    this.selectedFilter = filter;
    this.searchCriteria.skills = filter.skills.join(',');
    this.searchCriteria.minExperience = filter.minExperience;
    this.searchCriteria.maxExperience = filter.maxExperience;
    this.searchCandidates();
  }

  createJob(jobForm: NgForm) {
    if (jobForm.valid) {
      this.jobs.push(jobForm.value);
      this.showCreateJob = false;
      jobForm.reset();
    }
  }

  getAllJobs() {
    // Mock data - replace with actual API call
    this.jobs = [
      {
        title: 'Frontend Developer',
        description: 'Angular developer needed',
        companyName: 'Tech Corp',
        requiredSkills: ['Angular', 'TypeScript'],
        salaryRange: '60k-80k'
      }
    ];
  }
}
