import VUApp from './components/VUApp/VUApp'
import VUContainer from './component/VUContainer/VUContainer'
import VUFlex from './VUFlex/VUFlex'
import VUContent from './VUContent/VUContent'
import VUToolbar from './VUToolbar/VUToolbar'
import VULayout from './component/VULayout/VULayout'
import VUCard from './component/VUCard/VUCard'
import VUCardContent from './component/VUCard/VUCardContent'
import VUCardHeader from './component/VUCard/VUCardHeader'
import VUBtn from './component/VUBtn/VUBtn'
import VUIcon from './component/VUIcon/VUIcon'
import VUIconSvg from './component/VUIcon/VUIconSvg'
import VUIconSvgGroup from './component/VUIcon/VUIconSvgGroup'
import VUForm from './component/VUForm/VUForm'
import VUFormGroup from './component/VUForm/VUFormGroup'
import VUInput from './component/VUForm/VUInput'
import VUPhoneInput from './component/VUForm/VUPhoneInput'
import VUSelect from './component/VUForm/VUSelect'
import VUSubmitBtn from './component/VUForm/VUSubmitBtn'
import VUImagePreview from './component/VUImg/VUImagePreview'
import VVImagLoader from './component/VUImg/VUImgLoader'
import VUDataViewer from './component/VUTable/VUDataViewer'
import VUContentPlaceholder from './component/VUContentPlaceholder/VUContentPlaceholder'
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
