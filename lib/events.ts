import posthog from "posthog-js";

export function capture(event: string, properties: Record<string, any>) {
  if (typeof window !== "undefined") {
    posthog.capture(event, properties);
  }
}

export function identify(distinctId: string) {
  if (typeof window !== "undefined") {
    posthog.identify(distinctId);
  }
}
