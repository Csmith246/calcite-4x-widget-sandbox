
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import AppTypeInfoModal from './AppTypeInfoModal';
import MyCalciteModal from './modal';

/**
 * You can add Calcite Component Tests embedded in 4.x Widgets here
 */
@subclass('widgets.RootCalciteArea')
export default class RootCalciteArea extends Widget {

  @property()
  modal: MyCalciteModal = new MyCalciteModal({ isOpen: true });

  private _appDescModal: AppTypeInfoModal;

  constructor(props) {
    super(props);
  }

  postInitialize() {
  }

  render() {

    return (
      <div class="root">
        {this?.modal?.render()}

        {this?._appDescModal?.render()}

        <calcite-button onclick={() => {
          this._appDescModal = new AppTypeInfoModal({ isOpen: true });
        }}>
          Example of Calcite Modal Footer Not Working
        </calcite-button>

      </div>
    )
  }

}
