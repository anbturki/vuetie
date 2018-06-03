import VUApp from './components/VUApp/VUApp'
import VUContainer from './components/VUContainer/VUContainer'
import VUFlex from './VUFlex/VUFlex'
import VUContent from './VUContent/VUContent'
import VUToolbar from './VUToolbar/VUToolbar'
import VULayout from './components/VULayout/VULayout'
import VUCard from './components/VUCard/VUCard'
import VUCardContent from './components/VUCard/VUCardContent'
import VUCardHeader from './components/VUCard/VUCardHeader'
import VUBtn from './components/VUBtn/VUBtn'
import VUIcon from './components/VUIcon/VUIcon'
import VUIconSvg from './components/VUIcon/VUIconSvg'
import VUIconSvgGroup from './components/VUIcon/VUIconSvgGroup'
import VUForm from './components/VUForm/VUForm'
import VUFormGroup from './components/VUForm/VUFormGroup'
import VUInput from './components/VUForm/VUInput'
import VUPhoneInput from './components/VUForm/VUPhoneInput'
import VUSelect from './components/VUForm/VUSelect'
import VUSubmitBtn from './components/VUForm/VUSubmitBtn'
import VUImagePreview from './components/VUImg/VUImagePreview'
import VVImagLoader from './components/VUImg/VUImgLoader'
import VUDataViewer from './components/VUTable/VUDataViewer'
import VUContentPlaceholder from './components/VUContentPlaceholder/VUContentPlaceholder'
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
