import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
  query,
  animateChild,
} from "@angular/animations";

export function fadeIn(): AnimationTriggerMetadata {
  return trigger("fadeIn", [
    transition(":enter", [
      style({ opacity: 0 }),
      animate("1.5s", style({ opacity: 1 })),
    ]),
  ]);
}

export function fadeInLong(): AnimationTriggerMetadata {
  return trigger("fadeInLong", [
    transition(":enter", [
      style({ opacity: 0 }),
      animate("4s 1s", style({ opacity: 1 })),
    ]),
  ]);
}

/* export function fadeInOut(): AnimationTriggerMetadata {
  return trigger("fadeInOut", [
    transition(":enter", [
      style({ opacity: 0 }),
      animate("3s", style({ opacity: 1 })),
    ]),
        transition("WelcomePage => HomePage", [
      style({ opacity: 0 }),
      query(":enter", animate("5s ease-out", style({ opacity: 0 }))),
      query(":leave", animate("5s ease-out", style({ opacity: 100 }))),
    ]), 
  ]);
} */

export const fadeInOut = trigger("fadeInOut", [
  transition("* => *", [
    query(":enter", [style({ opacity: 0 })], {
      optional: true,
    }),
    query(
      ":leave",
      [style({ opacity: 1 }), animate("1s", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("1s", style({ opacity: 1 }))],
      { optional: true }
    ),
  ]),
]);
