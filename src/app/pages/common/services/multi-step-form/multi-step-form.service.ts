import { Injectable } from '@angular/core';
import { multiStepFormPlansConstant } from '../../contants/multi-step-form-plans.constant';

@Injectable({
  providedIn: 'root',
})
export class MultiStepFormService {
  stepOneData = {
    email: '',
    phoneNumber: '',
    name: '',
  };
  stepTwoData = {
    selectedPlan: multiStepFormPlansConstant[1],
    billingType: 'month',
  };
  stepThreeData = {};
}
