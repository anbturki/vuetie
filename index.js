import VUApp from 'VUC/VUApp/VUApp'
import VUContainer from 'VUC/VUContainer/VUContainer'
import VUFlex from 'VUC/VUFlex/VUFlex'
import VUContent from 'VUC/VUContent/VUContent'
import VUToolbar from 'VUC/VUToolbar/VUToolbar'
import VULayout from 'VUC/VULayout/VULayout'
import VUCard from 'VUC/VUCard/VUCard'
import VUCardContent from 'VUC/VUCard/VUCardContent'
import VUCardHeader from 'VUC/VUCard/VUCardHeader'
import VUBtn from 'VUC/VUBtn/VUBtn'
import VUIcon from 'VUC/VUIcon/VUIcon'
import VUIconSvg from 'VUC/VUIcon/VUIconSvg'
import VUIconSvgGroup from 'VUC/VUIcon/VUIconSvgGroup'
import VUForm from 'VUC/VUForm/VUForm'
import VUFormGroup from 'VUC/VUForm/VUFormGroup'
import VUInput from 'VUC/VUForm/VUInput'
import VUPhoneInput from 'VUC/VUForm/VUPhoneInput'
import VUSelect from 'VUC/VUForm/VUSelect'
import VUSubmitBtn from 'VUC/VUForm/VUSubmitBtn'
import VUImagePreview from 'VUC/VUImg/VUImagePreview'
import VVImagLoader from 'VUC/VUImg/VUImgLoader'
import VUDataViewer from 'VUC/VUTable/VUDataViewer'
import VUContentPlaceholder from 'VUC/VUContentPlaceholder/VUContentPlaceholder'
// externals
import VueCookie from 'vue-cookies'
require('bootstrap/dist/js/bootstrap.js')
const Vuetie = {
  VUApp,
  VUContainer,
  VUFlex,
  VUContent,
  VUToolbar,
  VULayout,
  VUCard,
  VUCardContent,
  VUCardHeader,
  VUBtn,
  VUIcon,
  VUIconSvg,
  VUIconSvgGroup,
  VUForm,
  VUFormGroup,
  VUInput,
  VUPhoneInput,
  VUSelect,
  VUSubmitBtn,
  VUImagePreview,
  VUDataViewer,
  VVImagLoader,
  VUContentPlaceholder
}
Vuetie.install = function (Vue) {
  Object.keys(Vuetie).forEach(key => {
    if (key === 'install') {
      return
    }
    const Component = Vuetie[key]
    Vue.component(Component.name, Component)
  })
}
export default Vuetie
// Export each component indepently
export {VUApp}
export {VUContainer}
export {VUFlex}
export {VUContent}
export {VUToolbar}
export {VULayout}
export {VUCard}
export {VUCardContent}
export {VUCardHeader}
export {VUBtn}
export {VUIcon}
export {VUIconSvg}
export {VUForm}
export {VUFormGroup}
export {VUInput}
export {VUPhoneInput}
export {VUSelect}
export {VUSubmitBtn}
export {VUImagePreview}
export {VUDataViewer}
export {VVImagLoader}
export {VUContentPlaceholder}
