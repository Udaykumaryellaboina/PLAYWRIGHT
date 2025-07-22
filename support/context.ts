import type { CustomWorld } from './custom-world';

export function init(world: CustomWorld) {
  if (!world.page || !world.context) {
    throw new Error('CustomWorld is not initialized with page and context.');
  }
}

export function getContext(world: CustomWorld) {
  return world.context;
}
export function getPage(world: CustomWorld) {
  return world.page;
}