import {
  animate,
  animateChild,
  animation,
  group,
  query,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

/* ----------------------------------------------------
 * Shared Timing Constants
 * -------------------------------------------------- */
const TIMING_FAST = '400ms ease';
const TIMING_MEDIUM = '500ms ease';
const TIMING_SLOW = '800ms ease';

/* ----------------------------------------------------
 * Base Layout Styles
 * -------------------------------------------------- */
const baseStyles = style({
  position: 'absolute',
  left: 0,
  width: '100%',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  opacity: 0,
});

/* ----------------------------------------------------
 * Reusable Animations
 * -------------------------------------------------- */

// Fade In Left
export const fadeInLeftAnimation = animation([
  query(':enter, :leave', baseStyles, { optional: true }),

  query(':enter', style({ transform: 'translateX(-100%)', opacity: 0 }), { optional: true }),

  group([
    query(':leave', animate(TIMING_MEDIUM, style({ transform: 'translateX(100%)', opacity: 1 })), {
      optional: true,
    }),

    query(
      ':enter',
      [animate(TIMING_SLOW, style({ transform: 'translateX(0)', opacity: 1 })), animateChild()],
      { optional: true }
    ),
  ]),
]);

// Zoom In
export const zoomInAnimation = animation([
  query(
    ':enter, :leave',
    [
      baseStyles,
      style({
        transform: 'scale(0.5) translateY(-20%)',
      }),
    ],
    { optional: true }
  ),

  query(
    ':enter',
    animate(
      TIMING_FAST,
      style({
        transform: 'scale(1) translateY(0)',
        opacity: 1,
      })
    ),
    { optional: true }
  ),
]);

// Fade In
export const fadeInAnimation = animation([
  query(':enter, :leave', baseStyles, { optional: true }),

  query(':enter', animate(TIMING_MEDIUM, style({ opacity: 1 })), { optional: true }),
]);

/* ----------------------------------------------------
 * Triggers (Use these in components)
 * -------------------------------------------------- */

export const fadeInLeft = trigger('fadeInLeft', [
  transition('* <=> *', useAnimation(fadeInLeftAnimation)),
]);

export const zoomIn = trigger('zoomIn', [transition('* <=> *', useAnimation(zoomInAnimation))]);

export const fadeIn = trigger('fadeIn', [transition('* <=> *', useAnimation(fadeInAnimation))]);
