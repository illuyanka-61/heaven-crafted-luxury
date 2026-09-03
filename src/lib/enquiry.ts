/**
 * Tiny shared channel so a collection card can pre-fill the Project Type in the
 * quote form (#contact) without introducing a state library or extra routes.
 */
export const projectTypes = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Office & Study",
  "Fully Bespoke",
] as const;

export type ProjectType = (typeof projectTypes)[number];

type Listener = (type: ProjectType) => void;

const listeners = new Set<Listener>();

export function requestProjectType(type: ProjectType) {
  for (const listener of listeners) listener(type);
}

export function onProjectType(listener: Listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
