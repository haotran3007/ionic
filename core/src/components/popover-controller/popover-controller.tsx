import { Component, Method, Prop } from '@stencil/core';

import { OverlayController, PopoverOptions } from '../../interface';
import { createOverlay, dismissOverlay, getOverlay } from '../../utils/overlays';

@Component({
  tag: 'ion-popover-controller'
})
export class PopoverController implements OverlayController {

  @Prop({ context: 'document' }) doc!: Document;

  /**
   * Create a popover overlay with popover options.
   */
  @Method()
  create(opts?: PopoverOptions): Promise<HTMLIonPopoverElement> {
    return createOverlay(this.doc.createElement('ion-popover'), opts);
  }

  /**
   * Dismiss the open popover overlay.
   */
  @Method()
  dismiss(data?: any, role?: string, popoverId = -1) {
    return dismissOverlay(this.doc, data, role, 'ion-popover', popoverId);
  }

  /**
   * Get the most recently opened popover overlay.
   */
  @Method()
  getTop(): HTMLIonPopoverElement {
    return getOverlay(this.doc, 'ion-popover') as HTMLIonPopoverElement;
  }
}
