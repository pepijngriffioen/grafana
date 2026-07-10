import type { JourneyMeta } from '@grafana/runtime';

/**
 * Static registry of all known Critical User Journeys.
 *
 * Each entry describes metadata only - no runtime wiring.
 * Trigger wiring lives in public/app/core/journeys/.
 */
export const JOURNEY_REGISTRY: JourneyMeta[] = [
  {
    type: 'search_to_resource',
    description: 'User searches for and navigates to a resource (dashboard, folder, alert, etc.)',
    owner: 'grafana-dashboards',
    timeoutMs: 60_000,
  },
  {
    type: 'home_to_alert_insight',
    description:
      'User clicks the homepage Firing alerts card and reaches the destination value moment (alert detail, alert list, rule list, or new-rule editor)',
    owner: 'grafana-frontend-navigation',
    timeoutMs: 60_000,
  },
];
