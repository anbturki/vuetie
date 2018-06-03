import VUApp from './components/VUApp/VUApp.vue'
import VUContainer from './components/VUContainer/VUContainer.vue'
import VUFlex from './VUFlex/VUFlex.vue'
import VUContent from './VUContent/VUContent.vue'
import VUToolbar from './VUToolbar/VUToolbar.vue'
import VULayout from './components/VULayout/VULayout.vue'
import VUCard from './components/VUCard/VUCard.vue'
import VUCardContent from './components/VUCard/VUCardContent.vue'
import VUCardHeader from './components/VUCard/VUCardHeader.vue'
import VUBtn from './components/VUBtn/VUBtn.vue'
import VUIcon from './components/VUIcon/VUIcon.vue'
import VUIconSvg from './components/VUIcon/VUIconSvg.vue'
import VUIconSvgGroup from './components/VUIcon/VUIconSvgGroup.vue'
import VUForm from './components/VUForm/VUForm.vue'
import VUFormGroup from './components/VUForm/VUFormGroup.vue'
import VUInput from './components/VUForm/VUInput.vue'
import VUPhoneInput from './components/VUForm/VUPhoneInput.vue'
import VUSelect from './components/VUForm/VUSelect.vue'
import VUSubmitBtn from './components/VUForm/VUSubmitBtn.vue'
import VUImagePreview from './components/VUImg/VUImagePreview.vue'
import VVImagLoader from './components/VUImg/VUImgLoader.vue'
import VUDataViewer from './components/VUTable/VUDataViewer.vue'
import VUContentPlaceholder from './components/VUContentPlaceholder/VUContentPlaceholder.vue'
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
