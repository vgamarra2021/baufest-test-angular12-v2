import { IAddon } from '../interfaces/multi-step-form/addon.interface';

export const multiStepFormAddonsConstant: IAddon[] = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 4,
    formControlName: 'online',
    initialValue: true
  },
  {
    title: 'Larger storage',
    description: 'Access to multiplayer games',
    price: 5,
    formControlName: 'largerStorage',
    initialValue: true
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    price: 8,
    formControlName: 'customizableProfile',
    initialValue: false
  },
];
