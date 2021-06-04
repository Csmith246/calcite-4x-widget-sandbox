
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';

export interface MyCalciteModalProps extends __esri.WidgetProperties {
  isOpen: boolean;
}

@subclass('widgets.MyCalciteModal')
export default class MyCalciteModal extends Widget {
  @property()
  isOpen: boolean = false;

  constructor(props) {
    super(props);
  }

  postInitialize() {
    console.log("PostInit");
  }

  render() {

    return (
      <div class="my-modal">
        <calcite-modal
          active={this.isOpen}
          color=""
          background-color="white"
          scale="m"
          width="s"
          intl-close="Close"
        >
          <h3 slot="header">Small Modal</h3>
          <div slot="content">
            <p>
              The small modal is perfect for short confirmation dialogs or very compact
              interfaces with few elements.
            </p>
          </div>
          <calcite-button
            slot="back"
            color="neutral"
            appearance="outline"
            icon="chevron-left"
            width="full"
          >
            Back
          </calcite-button>
          <calcite-button slot="secondary" width="full" appearance="outline">
            Cancel
          </calcite-button>
          <calcite-button slot="primary" width="full">Save</calcite-button>
        </calcite-modal>
      </div>
    )
  }

}
