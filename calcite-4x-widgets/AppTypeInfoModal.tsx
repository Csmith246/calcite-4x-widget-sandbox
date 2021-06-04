import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import { messageBundle, tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';

import "./AppTypeInfoModal/styles/AppTypeInfoModal.scss";

@subclass('Landing.widgets.AppTypeInfoModal')
export default class AppTypeInfoModal extends Widget {

  @property()
  appTypeTitle: string = "Dummy App";

  constructor(properties) {
    super(properties);
  }

  render() {

    const header = this._renderHeader();
    const descSection = this._renderDescription();

    return (

      <div>
      <calcite-modal
        class="app-description-modal"
        afterCreate={(modal: HTMLCalciteModalElement) => { this._handleModalClose(modal) }}
        active="true"
        background-color="white"
        scale="m"
        width="m"
        intl-close={"close"}
      >

        { header}

        <div class="app-description-modal__description" slot="content">
          <img class="app-desc-image"
            src="https://catsqa.mapsdevext.arcgis.com/sharing/rest/content/items/86ed5adf609947babcc7c835b59b52cd/info/screenshots/Attachment.png"
            width="150px" alt="" />
          {descSection}
        </div>

        <calcite-button
          slot="back"
          onclick={this.destroy.bind(this)}
        >
          Back
        </calcite-button>

        <calcite-button
          slot="secondary"
          class="app-description-modal__close"
        >
          Secondary
        </calcite-button>

        <calcite-button
          slot="primary"
          width="auto"
          class="app-description-modal__close"
          onclick={this.destroy.bind(this)}
        >
          Primary
        </calcite-button>
      </calcite-modal>

      </div>

    );
  }

  private _handleModalClose(modal: HTMLCalciteModalElement) {
    modal.addEventListener("calciteModalClose", () => {
      this.destroy();
    });
  }

  private _renderHeader() {
    return (
      <h2 class="app-description-modal__header" slot="header">
        <div>
          {this.appTypeTitle}
        </div>
      </h2>
    );
  }

  private _renderDescription() {
    return [
      <h4>SAMPLE TEXT</h4>,
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at lacus vitae nibh dapibus venenatis. Nam maximus euismod dolor, et porta nisi consectetur sed. Vivamus elementum, lorem et aliquam accumsan, libero dolor euismod felis, eget vehicula sapien arcu efficitur est. Morbi sit amet elit et massa semper semper in a risus. Sed non faucibus velit, a euismod metus. Nam tempus porta elit in pretium. Quisque tincidunt eget ante aliquet suscipit. Curabitur consectetur tortor ac volutpat condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce pellentesque urna quis erat imperdiet condimentum. Suspendisse venenatis nisl nec ex luctus, vel finibus sapien suscipit. Sed eget ex convallis, consequat leo eu, vehicula lacus. Aenean ac ligula tincidunt, tincidunt odio vel, aliquam elit.

        Praesent elementum ex non imperdiet cursus. Donec ornare justo risus, et mattis velit varius quis. Morbi a mi interdum, lacinia libero ut, lacinia est. Maecenas semper, mi a rhoncus auctor, diam lorem euismod mi, vitae euismod risus sapien eget urna. Donec laoreet enim diam, et dignissim dolor facilisis nec. Sed faucibus volutpat felis, ac pharetra nisi vulputate imperdiet. Mauris a felis fringilla erat sollicitudin vestibulum. Aliquam interdum ut neque sit amet pretium. Vestibulum pharetra non quam eget luctus. Suspendisse eleifend aliquet dolor ac luctus. Nullam libero tellus, mollis non porta cursus, pretium ut enim.
        <br/> <br/>
        ******** FOOTER IS MISSING BELOW *********
      </p>
    ];
  }


}
