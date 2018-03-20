/*
 * Copyright © HatioLab Inc. All rights reserved.
 */
import MixinRoller from './mixin-conveyor'

var {
  Component,
  Polygon
} = scene;

const NATURE = {
  mutable: false,
  resizable: true,
  rotatable: true,
  properties : [{
    type: 'select',
    label: 'conveyor-type',
    name: 'conveyorType',
    property: {
      options: [{
        display: 'Roller',
        value: 0
      }, {
        display: 'Belt',
        value: 1
      }]
    }
  }, {
    type: 'number',
    label: 'roll-width',
    name: 'rollWidth'
  }, {
    type: 'number',
    label: 'value',
    name: 'value'
  }, {
    type: 'checkbox',
    label: 'animation',
    name: 'animated'
  }]
}

const STAT_IDLE = 0;
const STAT_RUN = 1;
const STAT_CHUTE_FULL = 3;
const STAT_ERROR = 4;

export default class ConveyorJoinTrapezoid extends MixinRoller(Polygon) {

  get nature() {
    return NATURE
  }

  is3dish() {
    return false
  }

  render(context) {
    this.get('animated') && this.animOnState()
    super.render(context)
  }
}

Component.register('conveyor-join-trapezoid', ConveyorJoinTrapezoid);
