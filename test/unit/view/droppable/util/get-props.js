// @flow
import { getPreset } from '../../../../utils/dimension';
import type {
  MapProps,
  OwnProps,
  DispatchProps,
} from '../../../../../src/view/droppable/droppable-types';

export const preset = getPreset();

export const ownProps: OwnProps = {
  droppableId: preset.home.descriptor.id,
  type: preset.home.descriptor.type,
  isDropDisabled: false,
  isCombineEnabled: false,
  direction: preset.home.axis.direction,
  ignoreContainerClipping: false,
  children: () => null,
};

export const foreignOwnProps: OwnProps = {
  ...ownProps,
  droppableId: preset.foreign.descriptor.id,
  type: preset.foreign.descriptor.type,
  direction: preset.foreign.axis.direction,
};

export const atRest: MapProps = {
  isDraggingOver: false,
  draggingOverWith: null,
  placeholder: null,
  draggingFromList: null,
  shouldAnimatePlaceholder: true,
};
export const isOverHome: MapProps = {
  isDraggingOver: true,
  draggingOverWith: preset.inHome1.descriptor.id,
  draggingFromList: preset.inHome1.descriptor.id,
  placeholder: preset.inHome1.placeholder,
  // this can change during a drag
  shouldAnimatePlaceholder: false,
};
export const isOverForeign: MapProps = {
  isDraggingOver: true,
  draggingOverWith: preset.inHome1.descriptor.id,
  placeholder: preset.inHome1.placeholder,
  draggingFromList: null,
  shouldAnimatePlaceholder: true,
};

export const isNotOverHome: MapProps = {
  isDraggingOver: false,
  draggingOverWith: null,
  placeholder: null,
  draggingFromList: preset.inHome1.descriptor.id,
  // this can change during a drag
  shouldAnimatePlaceholder: false,
};

export const isNotOverForeign: MapProps = {
  isDraggingOver: false,
  draggingOverWith: null,
  placeholder: null,
  draggingFromList: null,
  shouldAnimatePlaceholder: true,
};

export const dispatchProps: DispatchProps = {
  // $ExpectError
  updateViewportMaxScroll: () => {},
};
