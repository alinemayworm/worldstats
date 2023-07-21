import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function fadeIn(): AnimationTriggerMetadata {
  return trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('1.5s 1s', style({ opacity: 1 })),
    ]),
  ]);
}

export function fadeOut(): AnimationTriggerMetadata {
  return trigger('fadeOut', [
    transition(':leave', [
      style({ opacity: 1 }),
      animate('1.5s 1s', style({ opacity: 0 })),
    ]),
  ]);
}
